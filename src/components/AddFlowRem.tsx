// SBL以添加流动性移除
import React from 'react'
import { Modal} from 'antd';
import '../assets/style/componentsStyle/AddFlowRem.scss'
import SBL from '../assets/image/SBL.png'
import Frame from '../assets/image/Frame.png'

function AddFlowRem() {
  return (
    <>
    <Modal visible={false} 
    className='AddFlowRem'
    centered
    width={'459px'}
    closable={ false }
    footer={null}
    >

        <p className='title'>移除流動性</p>

        <div className='box'>

         <div className='user'>
           <div className='num'>1 BNB</div>
           <div className='right'>
             <div className='img1'>
             <img src={SBL}  alt="" />
             </div>
             <div className='img2'>
             <img src={Frame} alt="" />
             </div>
           </div>
         </div>
         
         <div className='boot'>
           <div className='xinxi'>
             <span className='left'>添加時間</span>
             <span className='rigth'>2022/05/07 17:56</span>
           </div>
           <div className='xinxi'>
             <span className='left'>已入金 BNB</span>
             <span className='rigth'>
               <img src={SBL} alt='' />
               128.7894</span>
           </div>
           <div className='xinxi'>
             <span className='left'>已入金 SBL</span>
             <span className='rigth'>
             <img src={Frame} alt='' />
               
               128.7894</span>
           </div>
           
           
         </div>
        </div>
        <button className='btn'>確認供應</button>
      <span className='low'>点击任意地方离开</span>
    </Modal>
    </>
  )
}
export default AddFlowRem
