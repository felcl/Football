// 取消挂卖
import React from 'react'
import { Modal} from 'antd';
import {Contracts} from '../web3'
import {useSelector , useDispatch} from "react-redux";
import {stateType} from '../store/reducer'
import {addMessage,showLoding} from '../utils/tool'
import {useWeb3React} from '@web3-react/core'
import {orderInfoType} from '../view/Swap'
import '../assets/style/componentsStyle/CancelPurchase.scss'
interface CancelPurchasePropsType{
  isShow:boolean,
  close:Function,
  CancelSuccess:Function
  buyInfo:orderInfoType
}
 function CancelPurchase(props:CancelPurchasePropsType) {
  const web3React = useWeb3React()
  function CancelFun(){
    if(!web3React.account){
      return console.log("请连接钱包")
    }
    showLoding(true)
   Contracts.example.cancelOrder(web3React.account as string , props.buyInfo.chainOrderId).then(() => {
     console.log("订单取消成功")
     props.close()
   }).finally(()=>{
    showLoding(false)
   })
    /* 取消成功后回调 */
    // props.CancelSuccess()
  }
  return (
    <>
    <Modal title="Basic Modal" visible={props.isShow} 
      className='CancelPurchase'
      onCancel={()=>props.close()}
      centered
      width={'449px'}
      closable={ false }
      footer={null}
      >
          <p className='title'>取消挂卖</p>
          <p className='zifujg'>确认取消挂卖？</p>
        <span>点击任意地方离开</span>
        <button className='btm' onClick={CancelFun}>确认</button>
      </Modal></>
  )
}
export default CancelPurchase