// 取消挂卖
import React from 'react'
import { Modal} from 'antd';
import '../assets/style/componentsStyle/CancelPurchase.scss'
 function CancelPurchase() {
  return (
    <>
    <Modal title="Basic Modal" visible={false} 
      className='CancelPurchase'
      centered
      width={'449px'}
      closable={ false }
      footer={null}
      >
          <p className='title'>取消挂卖</p>
          <p className='zifujg'>确认取消挂卖？</p>
        <span>点击任意地方离开</span>
        <button className='btm'>确认</button>
      </Modal></>
  )
}
export default CancelPurchase