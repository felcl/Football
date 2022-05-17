import React from 'react';
import BigNumber from 'big.js'
import {BoxBaseType} from '../view/BlindBox'
import {useWeb3React} from '@web3-react/core'
import {showLoding,addMessage} from '../utils/tool'
import {Contracts} from '../web3'
import {buyBox} from '../API'
import { Modal } from 'antd';
import BlindBoxImg from '../assets/image/BlindBoxImg.png';
interface RaceBoxModalPropsType {
  BoxInfo:BoxBaseType
  isShow: boolean,
  close:Function,
  buySuccess:Function
}
function RaceBoxModal(props: RaceBoxModalPropsType) {
  const web3React = useWeb3React()
  async function Buy(){
    if(!web3React.account){
      return addMessage("请连接钱包")
    }
    /* 获取BNB余额 */
    
    let Balance:number|string
    console.log(props.BoxInfo.coinName )
    if(props.BoxInfo.coinName === 'BNB'){
      Balance = await Contracts.example.getBalance(web3React.account)
      Balance = new BigNumber(Balance).div(10 ** 18).toString()
    }else{
      Balance = await Contracts.example.balanceOf(web3React.account)
      Balance = new BigNumber(Balance).div(10 ** 18).toString()
    }
    if(new BigNumber(Balance).lt(props.BoxInfo.price)){
      return  addMessage("余额不足")
    }
    showLoding(true)
    buyBox({
      id:props.BoxInfo.id,
      userAddress:web3React.account
    }).then(res=>{
      console.log(res,"购买盲盒加密")
      Contracts.example.buyBox(web3React.account as string,res.data,props.BoxInfo.price).then(()=>{
        props.buySuccess()
        addMessage("购买盲盒成功")
      }).finally(()=>{
        showLoding(false)
      })
    },()=>{
      showLoding(false)
    })
  }
  return (
    <>
      <Modal visible={props.isShow}
        className='RaceBoxModal'
        centered
        onCancel={()=>props.close()}
        maskClosable
        width={'646px'}
        closable={false}
        footer={null}
      >
        <div className="Img">
          <img src={BlindBoxImg} alt="" />
        </div>
        <div className='Tip'>確認購買該盲盒？此次購買消耗{props.BoxInfo.price}{props.BoxInfo.coinName}</div>
        <button className='Verify' onClick={Buy}>確認</button>
      </Modal>
    </>
  )
}
export default RaceBoxModal
