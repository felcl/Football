// 捐赠奖励释放机制
import React from 'react'
import { Modal} from 'antd';
import '../assets/style/componentsStyle/ReleaseMechanusm.scss'

function ReleaseMechanusm() {
  return (
    <>
    <Modal visible={false} 
    className='ReleaseMechanusm'
    centered
    width={'446px'}
    closable={ false }
    footer={null}
    >

        <p className='title'>釋放機制</p>
        <div className='box'>
        <p className='zifujg'>捐贈後等待28800個區塊開始釋放，10,368,000個區塊線性釋放完</p>
        </div>

      <span>点击任意地方离开</span>
    </Modal>
    </>
  )
}
export default ReleaseMechanusm
