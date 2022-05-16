// NTF挂卖详情
import React, { useState } from 'react';
import { Modal} from 'antd';
import '../assets/style/componentsStyle/PutParticulars.scss'

 function PutParticulars() {

  return (
    <>
    {/* <div className='box'>11111</div> */}
      <Modal title="Basic Modal" visible={false} 
      className='PutParticulars'
      centered
      width={'449px'}
      closable={ false }
      footer={null}
      >
          <p className='title'>卡牌详情</p>
          <div className='hzimg'>
              <img src=''></img>
          </div>
          <p className='kpdetails'>卡牌名称:名称</p>
          <p className='kpdetails'>卡牌ID:111</p>
          <p className='kpdetails'>卡牌等级:1星</p>
          <p className='kpdetails'>卡牌类型:无</p>
          <p className='kpdetails'>卡牌介绍:</p>
          <p className='kpdetails'>请输入价格:<input type='text'/>BNB</p>
        
        <div className='butm'>
            <button className='hc'>确认</button>

        </div>
        <span>点击任意地方离开</span>
      </Modal>
    </>
  )
}
export default PutParticulars