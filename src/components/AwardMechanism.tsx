// 奖励机制
import React from 'react'
import { Modal} from 'antd';
import '../assets/style/componentsStyle/AwardMechanism.scss'

interface propsType{
  isShow: boolean,
  close:Function
}
function AwardMechanism(props:propsType) {
  return (
    <>
    <Modal visible={props.isShow} 
    className='AwardMechanism'
    onCancel={()=>props.close()}
    centered
    width={'449px'}
    closable={ false }
    footer={null}
    >
        <p className='title'>奖励机制</p>
        <p className='zifujg'>1、持有普通NFT卡牌，享有一星級10%推薦獎勵；</p>
        <p className='zifujgt'>2、持有良好NFT卡牌，享有二星級6%推薦獎勵。</p>
      <span>点击任意地方离开</span>
    </Modal>
    </>
  )
}
export default AwardMechanism