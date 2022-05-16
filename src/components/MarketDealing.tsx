// 确认购买
import React from 'react'
import { Modal} from 'antd';
import '../assets/style/componentsStyle/MarketDealing.scss'

 function MarketDealing() {
  return (
    <>
    <Modal title="Basic Modal" visible={false} 
      className='Market'
      centered
      width={'449px'}
      closable={ false }
      footer={null}
      >
          <p className='title'>确认购买</p>
          <p className='zifujg'>购买此卡片需要支付1SBL</p>
        <span>点击任意地方离开</span>
        <button className='btm'>确认</button>
      </Modal></>
  )
}
export default MarketDealing