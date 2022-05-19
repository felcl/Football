// SBL捐赠销毁捐赠成功
import React from 'react'
import { Modal} from 'antd';
import '../assets/style/componentsStyle/DonateSucceed.scss'

function DonateSucceed() {
  return (
    <>
    <Modal visible={false} 
    className='DonateSucceed'
    centered
    width={'446px'}
    closable={ false }
    footer={null}
    >

        <p className='title'>恭喜，捐贈成功！</p>
        <div className='box'>
        <p className='zifujg'>1、獎勵將在28800個區塊之後開始釋放10,368,0000個區塊線性釋放完成。 </p>
        <p className='zifujg'>2、28,800個區塊後可再次捐贈。</p>
        </div>

      <span>点击任意地方离开</span>
    </Modal>
    </>
  )
}
export default DonateSucceed
