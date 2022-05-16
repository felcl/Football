import { useCallback, useMemo } from 'react'
import { InjectedConnector, NoEthereumProviderError, UserRejectedRequestError } from '@web3-react/injected-connector'
// import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'
import {Contract} from 'web3-eth-contract';
import {provider} from 'web3-core';
import Web3 from 'web3'
import {abiObj,contractAddress} from './config'
import BigNumber from 'big.js'
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
    //购买盲盒
    buyBox(addr: string,data:string,payableAmount:number,){
        BigNumber.NE = -40
        BigNumber.PE = 40
        let num = new BigNumber(payableAmount).times(10 ** 18).toString()
        this.verification('BlindBox')
        return this.contract.BlindBox?.methods.buyBox(data).send({from: addr,value:num})
    }
    //购买盲盒
    OpenBox(addr: string,data:string){
        this.verification('BlindBox')
        return this.contract.BlindBox?.methods.OpenBox(data).send({from: addr})
    }
    //创建订单
    createOrder(addr: string,tokenId:string,price:number,payToken:string,nftAddr:string){
        this.verification('EXChangeNFT')
        return this.contract.EXChangeNFT?.methods.createOrder(tokenId,price,payToken,nftAddr,'0x0000000000000000000000000000000000000000').send({from: addr})
    }
    //查询当前区块高度
    QueryBlock(){
        return this.web3.eth.getBlockNumber()
    }
    //查询BNB余额
    getBalance(addr:string){
        return this.web3.eth.getBalance(addr)
    }
}