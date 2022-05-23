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
const cardType=['','普通','良好','优秀','稀有','良品','史诗']
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

        <div className='box'>
          <img src={props.CardInfo.imageUrl} alt='' />
        </div>
        <p className='title'> 恭喜！獲得{cardType[props.CardInfo.cardLevel]}卡牌一張 </p>
      <span>点击任意地方离开</span>
    </Modal>
    </>
  )
}
export default ComSucceed
