import { useCallback, useMemo } from 'react'
import { InjectedConnector, NoEthereumProviderError, UserRejectedRequestError } from '@web3-react/injected-connector'
// import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'
import {Contract} from 'web3-eth-contract';
import {provider} from 'web3-core';
import Web3 from 'web3'
import {abiObj,contractAddress} from './config'
declare let window: any;
interface contractType {
    [propName: string]: Contract;
}
export const ChainId = {
    BSC: 97,
    // BSC: 56,
}
//切换链
const SCAN_ADDRESS = {
    [ChainId.BSC]: 'https://bscscan.com'
}
//配置连接链的信息
const networkConf = {
    [ChainId.BSC]: {
        chainId: '0x61',
        // chainId: '0x38',
        chainName: 'BSC',
        nativeCurrency: {
            name: 'BNB',
            symbol: 'BNB',
            decimals: 18,
        },
        // rpcUrls: ['https://bsc-dataseed.binance.org/'],
        rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
        blockExplorerUrls: [SCAN_ADDRESS[ChainId.BSC]],
    }
}
//切换链
export const changeNetwork = (chainId:number) => {
    return new Promise<void>(reslove => {
        const { ethereum } = window
        if (ethereum && ethereum.isMetaMask && networkConf[chainId]) {
            ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                    {
                        ...networkConf[chainId]
                    }
                ],
            }).then(() => {
                setTimeout(reslove, 500)
            })
        } else {
            reslove()
        }
    })
}
// react-web3允许连接的链
export const injected = new InjectedConnector({
    supportedChainIds: [ChainId.BSC],
})
// 扫码连接配置
// export const POLLING_INTERVAL = 12000

// const bscWalletConnector = new WalletConnectConnector({
//     // rpc: { 56: 'https://bsc-dataseed.binance.org/' },
//     rpc: { 97: 'https://data-seed-prebsc-1-s1.binance.org:8545/' },
//     bridge: 'https://bridge.walletconnect.org',
//     qrcode: true,
//     // pollingInterval: POLLING_INTERVAL,
// })
// export const walletConnector = {
//     [ChainId.BSC]: bscWalletConnector
// }
export const useConnectWallet = () => {
    const { activate, deactivate, active } = useWeb3React()
    const connectWallet = useCallback((connector :InjectedConnector, chainId :number) => {
        //切换到指定链
        return changeNetwork(chainId).then(() => {
            //调用连接方法
            return activate(connector, undefined, true).then((e) => {
                    if (window.ethereum && window.ethereum.on) {
                        // 监听钱包事件
                        // const { ethereum } = window
                        window.ethereum.on('accountsChanged', (accounts: string[]) => {
                            if (accounts.length === 0) {
                                // 无账号，则代表锁定了,主动断开
                                deactivate()
                            }
                            // 账号改了，刷新网页
                            // window.location.reload()
                        })

                        window.ethereum.on('disconnect', () => {
                            // 断开连接
                            deactivate()
                        })

                        window.ethereum.on('disconnect', () => {
                            // 断开连接
                            deactivate()
                        })

                        // window.ethereum.on('message', message => {
                        //     console.log('message', message)
                        // })

                    }
                })
                .catch((error) => {
                    switch (true) {
                        case error instanceof UnsupportedChainIdError:
                            // console.log('链错了')
                            break
                        case error instanceof NoEthereumProviderError:
                            // console.log('不是钱包环境')
                            break
                        case error instanceof UserRejectedRequestError:
                            // console.log('用户拒绝连接钱包')
                            break
                        default:
                            // console.log(error)
                    }
                })
        })
        // eslint-disable-next-line
    }, [])

    useMemo(() => {
        // 首次尝试连接
        !active && connectWallet(injected, ChainId.BSC)
        window.ethereum && window.ethereum.on('chainChanged', () => {
            // 切换网络后，尝试连接
            // !active && connectWallet(injected, ChainId.BSC)
        })
        // eslint-disable-next-line
    }, [])
    return connectWallet
}
export class Contracts{
    //单例
    static example:Contracts
    web3:Web3
    contract:contractType={}
    constructor(library:provider) {
        this.web3 = new Web3(library)
        //保存实例到静态属性
        Contracts.example = this
    }
    //判断合约是否实例化
    verification(contractName:string){
        if(!this.contract[contractName]){
            this.contract[contractName] =new this.web3.eth.Contract(abiObj[contractName], contractAddress[contractName])
        }
    }
    //合约的方法
    //查询余额
    balanceOf(addr : string){
        this.verification('Token')
        return this.contract.Token?.methods.balanceOf(addr).call({from: addr})
    }
    //查询授权
    Tokenapprove(addr: string,toaddr: string){
        this.verification('Token')
        return this.contract.Token?.methods.allowance(addr,toaddr).call({from: addr})
    }
    //授权
    approve(addr: string,toaddr: string){
        this.verification('Token')
        var amount = Web3.utils.toBN("99999999999999999999999999999999")
        return this.contract.Token?.methods.approve(toaddr,amount).send({from: addr})
    }
    //购买
    buy(addr: string,reward: string){
        this.verification('IDO')
        return this.contract.IDO?.methods.buy(reward).send({from: addr})
    }
    //查询释放
    idoBalanceMapping(addr: string){
        this.verification('IDO')
        return this.contract.IDO?.methods.idoBalanceMapping(addr).call({from: addr})
    }
    //查询下级返佣
    getUserRefereeByAddress(addr: string){
        this.verification('IDO')
        return this.contract.IDO?.methods.getUserRefereeByAddress().call({from: addr})
    }
    //提取推荐收益
    userDrawRefereeToken(addr: string){
        this.verification('IDO')
        return this.contract.IDO?.methods.userDrawRefereeToken().send({from: addr})
    }
    //提取返还IDO
    userDrawToken(addr: string){
        this.verification('IDO')
        return this.contract.IDO?.methods.userDrawToken().send({from: addr})
    }
    //查询结束区块
    endBlock(addr: string){
        this.verification('IDO')
        return this.contract.IDO?.methods.endBlock().call({from: addr})
    }
    //查询是否开启释放领取
    openDraw(addr: string){
        this.verification('IDO')
        return this.contract.IDO?.methods.openDraw().call({from: addr})
    }
    //查询是否开启推荐奖励领取
    refereeOpenDraw(addr: string){
        this.verification('IDO')
        return this.contract.IDO?.methods.refereeOpenDraw().call({from: addr})
    }
    //查询用户是否购买
    buyMapping(addr: string){
        this.verification('IDO')
        return this.contract.IDO?.methods.buyMapping(addr).call({from: addr})
    }
    //查询邀请可领取量
    refereeTotalMapping(addr: string){
        this.verification('IDO')
        return this.contract.IDO?.methods.refereeTotalMapping(addr).call({from: addr})
    }
    //查询开始购买区块
    beginBlock(addr: string){
        this.verification('IDO')
        return this.contract.IDO?.methods.beginBlock().call({from: addr})
    }
    //查询当前区块高度
    QueryBlock(){
        return this.web3.eth.getBlockNumber()
    }
}
// //验证是否创建合约，是否包含地址
// function verification(library:provider,contractName:string,address:string ){
//     if(!contract[contractName]){
        
//         // console.log('首次调用创建合约')
//         const web3 = new Web3(library)
//         contract[contractName] =new web3.eth.Contract(abiObj[contractName], contractAddress[contractName])
//     }
//     if(!address){
//         return false
//     }
//     return contract[contractName]
// }
// //查询余额
// export function balanceOf(library :provider,addr : string){
//     let contractExample = verification(library,'Token',addr)
//     if(contractExample){
//         return contractExample.methods.balanceOf(addr).call({from: addr})
//     }
// }
// //查询授权
// export function Tokenapprove(library:provider,addr: string,toaddr: string){
//     let contractExample = verification(library,'Token',addr)
//     if(contractExample){
//         return contractExample.methods.allowance(addr,toaddr).call({from: addr})
//     }
// }
// //授权
// export function approve(library:provider,addr: string,toaddr: string){
//     let contractExample = verification(library,'Token',addr)
//     if(contractExample){
//         var amount = Web3.utils.toBN("99999999999999999999999999999999")
//         return contractExample.methods.approve(toaddr,amount).send({from: addr})
//     }else{
//         return Promise.reject('not address')
//     }
// }
// //购买盲盒
// export function buy(library:provider,addr: string,reward: string){
//     let contractExample = verification(library,'IDO',addr)
//     if(contractExample){
//         return contractExample.methods.buy(reward).send({from: addr})
//     }
// }
// //释放查询
// export function idoBalanceMapping(library:provider,addr: string){
//     let contractExample = verification(library,'IDO',addr)
//     if(contractExample){
//         return contractExample.methods.idoBalanceMapping(addr).call({from: addr})
//     }
// }
// //查询下级返佣
// export function getUserRefereeByAddress(library:provider,addr: string){
//     let contractExample = verification(library,'IDO',addr)
//     if(contractExample){
//         return contractExample.methods.getUserRefereeByAddress().call({from: addr})
//     }
// }
// //提取推荐收益
// export function userDrawRefereeToken(library:provider,addr: string,){
//     let contractExample = verification(library,'IDO',addr)
//     if(contractExample){
//         return contractExample.methods.userDrawRefereeToken().send({from: addr})
//     }
// }
// //提取返还IDO
// export function userDrawToken(library:provider,addr: string,){
//     let contractExample = verification(library,'IDO',addr)
//     if(contractExample){
//         return contractExample.methods.userDrawToken().send({from: addr})
//     }
// }
// //查询结束区块
// export function endBlock(library:provider,addr: string){
//     let contractExample = verification(library,'IDO',addr)
//     if(contractExample){
//         return contractExample.methods.endBlock().call({from: addr})
//     }
// }
// //查询是否开启释放领取
// export function openDraw(library:provider,addr: string){
//     let contractExample = verification(library,'IDO',addr)
//     if(contractExample){
//         return contractExample.methods.openDraw().call({from: addr})
//     }
// }
// //查询是否开启推荐奖励领取
// export function refereeOpenDraw(library:provider,addr: string){
//     let contractExample = verification(library,'IDO',addr)
//     if(contractExample){
//         return contractExample.methods.refereeOpenDraw().call({from: addr})
//     }
// }
// //查询用户是否购买
// export function buyMapping(library:provider,addr: string){
//     let contractExample = verification(library,'IDO',addr)
//     if(contractExample){
//         return contractExample.methods.buyMapping(addr).call({from: addr})
//     }
// }
// //查询邀请可领取量
// export function refereeTotalMapping(library:provider,addr: string){
//     let contractExample = verification(library,'IDO',addr)
//     if(contractExample){
//         return contractExample.methods.refereeTotalMapping(addr).call({from: addr})
//     }
// }
// //查询开始购买区块
// export function beginBlock(library:provider,addr: string){
//     let contractExample = verification(library,'IDO',addr)
//     if(contractExample){
//         return contractExample.methods.beginBlock().call({from: addr})
//     }
// }
// //查询当前区块高度
// export function QueryBlock(library:provider){
//     const web3 = new Web3(library)
//     return web3.eth.getBlockNumber()
// }