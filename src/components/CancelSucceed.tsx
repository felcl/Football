// 市场交易取消挂卖成功
import React from 'react'
import { Modal} from 'antd';

 function CancelSucceed() {
  return (
    <>
    <Modal title="Basic Modal" visible={false} 
      className='CancelSucceed'
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
export default CancelSucceed