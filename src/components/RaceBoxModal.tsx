import React, { useState } from 'react';
import { Modal } from 'antd';
import BlindBoxImg from '../assets/image/BlindBoxImg.png';
interface RaceBoxModalPropsType {
  isShow: boolean,
  close:Function,
  buySuccess:Function
}
function RaceBoxModal(props: RaceBoxModalPropsType) {
  return (
    <>
      <Modal visible={props.isShow}
        className='RaceBoxModal'
        centered
        onCancel={()=>props.close()}
        maskClosable
        width={'646px'}
        closable={false}
        footer={null}
      >
        <div className="Img">
          <img src={BlindBoxImg} alt="" />
        </div>
        <div className='Tip'>確認購買該盲盒？此次購買消耗0.5BNB</div>
        <button className='Verify' onClick={()=>props.buySuccess()}>確認</button>
      </Modal>
    </>
  )
}
export default RaceBoxModal
