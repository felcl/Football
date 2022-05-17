// NTF合成成功
import React from 'react'
import { Modal} from 'antd';
import {OpenResType} from '../view/NFT'
import '../assets/style/componentsStyle/ComSucceed.scss'
interface PropsType{
  isShow:boolean,
  CardInfo:OpenResType,
  close:Function
}
function ComSucceed(props:PropsType) {
  return (
    <>
    <Modal visible={props.isShow} 
    className='ComSucceed'
    onCancel={()=>props.close()}
    centered
    width={'449px'}
    closable={ false }
    footer={null}
    >

        <p className='title'> 恭喜！獲得優秀卡牌一張 </p>
        <div className='box'>
          <img src={props.CardInfo.imageUrl} alt='' />
        </div>

      <span>点击任意地方离开</span>
    </Modal>
    </>
  )
}
export default ComSucceed
