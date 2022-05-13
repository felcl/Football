import React, { useState } from 'react';
import { Modal} from 'antd';

interface CardSynthesisPropsType{
  isShow:boolean
}
 function CardSynthesis(props:CardSynthesisPropsType) {
  return (
    <>
      <Modal title="Basic Modal" visible={props.isShow} 
      className='CardSynthesis'
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
        <div className='butm'>
            <button className='gm'>挂卖</button>
            <button className='hc'>合成</button>
            <button className='zy'>质押</button>

        </div>
      </Modal>
    </>
  )
}
export default CardSynthesis