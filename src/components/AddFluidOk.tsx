import React, { useState } from 'react';
import { Modal } from 'antd';
import BlindBoxImg from '../assets/image/BlindBoxImg.png';
import BNBImg from '../assets/image/Frame.png'
import SBLImg from '../assets/image/SBL.png'
interface AddFluidPropsType {
  isShow: boolean
}
function AddFluidOk(props: AddFluidPropsType) {
  return (
    <>
      <Modal visible={props.isShow}
        className='AddFluidOk'
        centered
        maskClosable
        width={'459px'}
        closable={false}
        footer={null}
      >
        <div className="Title">添加流動性</div>
            <div className="ListItem">
               <div className="ListLeft">
                   <p className="title">入金 BNB</p>
                   <p className="title">入金 SBL</p>
                   <p className="title">匯率</p>
               </div>
               <div className="ListRight">
                <p className="content"><img src={BNBImg}></img>1</p>
                <p className="content"><img src={SBLImg}></img>128.7894</p>
                <p className="content">1 SBL = 0.0002 BNB</p>   
                1 BNB = 123.0000 SBL
                </div> 
            </div>
        <button className='Verify'>確認供應</button>
        
        <span>點擊任意地方關閉</span>
      </Modal>
    </>
  )
}
export default AddFluidOk
