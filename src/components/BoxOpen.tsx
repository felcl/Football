// NTF盲盒开启
import React from 'react'
import { Modal} from 'antd';
import '../assets/style/componentsStyle/BoxOpen.scss'
const cardType=['']
function BoxOpen() {
  return (
    <>
    <Modal visible={false} 
    className='BoxOpen'
    centered
    width={'449px'}
    closable={ false }
    footer={null}
    >

        <div className='box'>
        <img src='' />
        </div>
        <p className='title'> 恭喜您！獲得優秀卡牌一張！</p>

      <span>点击任意地方离开</span>
    </Modal>
    </>
  )
}
export default BoxOpen
