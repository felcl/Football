import React, { useState } from 'react';
import {BoxBaseType} from '../view/BlindBox'
import {useWeb3React} from '@web3-react/core'
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
  function Buy(){
    if(!web3React.account){
      return console.log("请链接钱包")
    }
    /* 获取BNB余额 */
    let Balance = Contracts.example.getBalance(web3React.account)
    buyBox({
      id:props.BoxInfo.id,
      userAddress:web3React.account
    }).then(res=>{
      console.log(res,"购买盲盒加密")
      Contracts.example.buyBox(web3React.account as string,res.data,props.BoxInfo.price).then((res:any)=>{
        props.buySuccess()
        console.log(res,"购买盲盒成功")
      })
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
