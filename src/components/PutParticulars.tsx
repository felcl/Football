// 交易场卡牌详情
import React, { useState } from 'react';
import { Modal} from 'antd';
import {orderInfoType} from '../view/Swap'
import '../assets/style/componentsStyle/PutParticulars.scss'

interface PropsType{
  isShow:boolean,
  close:Function,
  OrderInfo:orderInfoType
}
 function PutParticulars(props:PropsType) {
  return (
    <>
    {/* <div className='box'>11111</div> */}
      <Modal title="Basic Modal" visible={props.isShow} 
      className='PutParticulars'
      onCancel={()=>props.close()}
      centered
      width={'449px'}
      closable={ false }
      footer={null}
      >
          <p className='title'>卡牌详情</p>
          <div className='hzimg'>
              <img src={props.OrderInfo.image} alt="" ></img>
          </div>
          <p className='kpdetails'>卡牌名称:{props.OrderInfo.cardName}</p>
          <p className='kpdetails'>卡牌ID:111</p>
          <p className='kpdetails'>卡牌等级:1星</p>
          <p className='kpdetails'>卡牌类型:无</p>
          <p className='kpdetails'>卡牌介绍:{props.OrderInfo.introduce}</p>
        <span>点击任意地方离开</span>
      </Modal>
    </>
  )
}
export default PutParticulars