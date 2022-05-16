// 流动性添加流动性成功
import React from 'react'
import { Modal} from 'antd';
import '../assets/style/componentsStyle/AddFlowSucceed.scss'
import SBL from '../assets/image/SBL.png'
import Frame from '../assets/image/Frame.png'

function AddFlowSucceed() {
  return (
    <>
    <Modal visible={false} 
    className='AddFlowSucceed'
    centered
    width={'459px'}
    closable={ false }
    footer={null}
    >

        <p className='title'>成功添加流動性</p>

        <div className='box'>
         <p className='huode'>您已獲得</p>

         <div className='user'>
           <div className='num'>1,215.451</div>
           <div className='right'>
             <div className='img1'>
             <img src={SBL}  alt="" />
             </div>
             <div className='img2'>
             <img src={Frame} alt="" />
             </div>
           </div>
         </div>
        <p className='titou'>SBL/BNB Pool Tokens</p>
        </div>
        <button className='btn'>確認供應</button>
      <span>点击任意地方离开</span>
    </Modal>
    </>
  )
}
export default AddFlowSucceed
