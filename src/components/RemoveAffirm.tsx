// SBL以添加流动性移除确认
import React from 'react'
import { Modal} from 'antd';
import '../assets/style/componentsStyle/RemoveAffirm.scss'
import SBL from '../assets/image/SBL.png'
import Frame from '../assets/image/Frame.png'

function RemoveAffirm() {
  return (
    <>
    <Modal visible={false} 
    className='RemoveAffirm'
    centered
    width={'459px'}
    closable={ false }
    footer={null}
    >

        <p className='title'>移除流動性</p>

        <div className='box'>

       <div className='weite'>
       移除流動性後，您將失去獲得獎勵資格
       </div>
         <div className='boot'>
           <div className='xinxi'>
             <span className='left'>您將獲得：</span>
           </div>
           <div className='xinxi'>
             <span className='left'>BNB</span>
             <span className='rigth'>
               <img src={SBL} alt='' />
               128.7894</span>
           </div>
           <div className='xinxi'>
             <span className='left'>SBL</span>
             <span className='rigth'>
             <img src={Frame} alt='' />
               
               128.7894</span>
           </div>
           
           
         </div>
        </div>
        <button className='btn'>確認移除</button>
      <span className='low'>点击任意地方离开</span>
    </Modal>
    </>
  )
}
export default RemoveAffirm
