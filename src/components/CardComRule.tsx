// NTF卡牌合成规则
import React from 'react'
import { Modal} from 'antd';
import '../assets/style/componentsStyle/CardComRule.scss'

function CardComRule() {
  return (
    <>
    <Modal visible={false} 
    className='CardComRule'
    centered
    width={'449px'}
    closable={ false }
    footer={null}
    >

        <p className='title'>奖励机制</p>
        <div className='box'>
        <p className='zifujg'>良好：2個普通 + 0.2 BNB</p>
        <p className='zifujg'>優秀：2個良好 + 0.3 BNB</p>
        <p className='zifujg'>稀有：2個優秀 + 0.5 BNB</p>
        <p className='zifujg'>良品：2個稀有 + 1 BNB </p>
        <p className='zifujg'>史詩：2個同類良品 + 1.5 BNB</p>
        </div>

      <span>点击任意地方离开</span>
    </Modal>
    </>
  )
}
export default CardComRule
