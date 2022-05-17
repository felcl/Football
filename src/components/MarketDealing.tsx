// 确认购买
import React from 'react'
import { Modal} from 'antd';
import {Contracts} from '../web3'
import {useSelector , useDispatch} from "react-redux";
import {stateType} from '../store/reducer'
import {useWeb3React} from '@web3-react/core'
import {orderInfoType} from '../view/Swap'
import '../assets/style/componentsStyle/MarketDealing.scss'

interface MarketDealingPropsType{
  isShow:boolean,
  close:Function,
  buySuccess:Function,
  buyInfo:orderInfoType
}
 function MarketDealing(props:MarketDealingPropsType) {
  let state = useSelector<stateType,stateType>(state => state);
  const web3React = useWeb3React()
   /* 确认购买 */
   function buyFun(){
     if(!web3React.account){
       return console.log("请连接钱包")
     }
    Contracts.example.takeOrder(web3React.account as string , props.buyInfo.chainOrderId,props.buyInfo.price).then(() => {
      console.log("订单取消成功")
    })
     /* 购买成功关闭弹窗 */
    //  props.close()
     /* 购买成功回调 */
    // props.buySuccess()
   }
  return (
    <>
    <Modal title="Basic Modal" visible={props.isShow} 
      className='Market'
      onCancel={()=>props.close()}
      centered
      width={'449px'}
      closable={ false }
      footer={null}
      >
          <p className='title'>确认购买</p>
          <p className='zifujg'>购买此卡片需要支付{props.buyInfo.price}SBL</p>
        <span>点击任意地方离开</span>
        <button className='btm' onClick={buyFun}>确认</button>
      </Modal></>
  )
}
export default MarketDealing