// NTF合成成功
import React from 'react'
import { Modal} from 'antd';
import '../assets/style/componentsStyle/ComSucceed.scss'

function ComSucceed() {
  return (
    <>
    <Modal visible={false} 
    className='ComSucceed'
    centered
    width={'449px'}
    closable={ false }
    footer={null}
    >

        <p className='title'> 恭喜！獲得優秀卡牌一張 </p>
        <div className='box'>
        <img src='' />
        </div>

      <span>点击任意地方离开</span>
    </Modal>
    </>
  )
}
export default ComSucceed
