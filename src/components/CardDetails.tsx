import React, { useState } from 'react';
import {Contracts} from '../web3'
import {useWeb3React} from '@web3-react/core'
import {CardInfoType} from './Card'
import { Modal} from 'antd';
import {contractAddress} from '../config'
import '../assets/style/componentsStyle/carddetails.scss'

interface CardDetailPropsType{
  isShow:boolean,
  close:Function,
  type:string,
  CardInfo:CardInfoType,
  showCreateOrder?:Function
}
/* type:Swap 交易场详情 CreateOrder 挂单详情 NFT 背包卡牌详情 */
 function CardDetails(props:CardDetailPropsType) {
  const web3React = useWeb3React()
   function createOrder(){
     if(!web3React.account){
       console.log("请链接钱包")
     }
    Contracts.example.createOrder(web3React.account as string,props.CardInfo.tokenId,100,'0x0000000000000000000000000000000000000000',contractAddress.NFT)
   }
  return (
    <>
    {/* <div className='box'>11111</div> */}
      <Modal title="Basic Modal" visible={props.isShow} 
      onCancel={()=>props.close()}
      className='Card'
      centered
      width={'449px'}
      closable={ false }
      footer={null}
      >
          <p className='title'>卡牌详情</p>
          <div className='hzimg'>
              <img src={props.CardInfo.imageUrl} alt=""></img>
          </div>
          <p className='kpdetails'>卡牌名称:{props.CardInfo.cardName}</p>
          <p className='kpdetails'>卡牌ID:{props.CardInfo.id}</p>
          <p className='kpdetails'>卡牌等级:1星</p>
          <p className='kpdetails'>卡牌类型:无</p>
          <p className='kpdetails'>卡牌介绍:{props.CardInfo.introduce}</p>
          {
            props.type === "CreateOrder" &&<p className='kpdetails'>请输入价格:<input type='text'/>BNB</p>
          }
          {
            props.type === "NFT" && <div className='butm'>
                <button className='gm'><div onClick={()=>{props.showCreateOrder && props.showCreateOrder()}}>挂卖</div></button>
                <button className='hc'>合成</button>
                <button className='zy'>质押</button>
            </div>
          }
          {
            props.type === "CreateOrder" && <div className='butm'>
                <button className='hc' onClick={createOrder}>确认</button>
            </div>
          }
          <span>点击任意地方离开</span>
        </Modal>
    </>
  )
}
export default CardDetails