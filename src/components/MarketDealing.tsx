// 确认购买
import React from 'react'
import { Modal} from 'antd';
import {Contracts} from '../web3'
import {useSelector , useDispatch} from "react-redux";
import {stateType} from '../store/reducer'
import {useWeb3React} from '@web3-react/core'
import {orderInfoType} from '../view/Swap'
import BigNumber from 'big.js'
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
   async function buyFun(){
     if(!web3React.account){
       return console.log("请连接钱包")
     }
     let Balance = await Contracts.example.getBalance(web3React.account as string)
     Balance = new BigNumber(Balance).div(10 ** 18).toString()
     if(new BigNumber(Balance).lt(props.buyInfo.price)){
       return console.log("余额不足")
     }
    Contracts.example.takeOrder(web3React.account as string , props.buyInfo.chainOrderId,props.buyInfo.price).then(() => {
      console.log("订单购买成功")
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
          <p className='zifujg'>购买此卡片需要支付{props.buyInfo.price}{props.buyInfo.coinName}</p>
        <span>点击任意地方离开</span>
        <button className='btm' onClick={buyFun}>确认</button>
      </Modal></>
  )
}
export default MarketDealing