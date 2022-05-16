// 团队奖励机制
import React from 'react'
import { Modal} from 'antd';
import '../assets/style/componentsStyle/TeamMachine.scss'

function TeamMachine() {
  return (
    <>
    <Modal visible={false} 
    className='TeamMachine'
    centered
    width={'446px'}
    closable={ false }
    footer={null}
    >

        <p className='title'>奖励机制</p>
        <div className='box'>
        <p className='zifujg'>1、持有優秀卡牌併添加LP（0.2BNB+SBL），獎勵新增業績：3%，同級收入的3%；；</p>
        <p className='zifujg'> 2、持有稀有卡牌併添加LP（0.5BNB+SBL），獎勵新增業績：6%，同級收入的5%；</p>
        <p className='zifujg'>3、持有良品卡牌併添加LP（1BNB+SBL），獎勵新增業績：8%，同級收入的10%；</p>

        <p className='zifujg'>4、持有史詩卡牌併添加LP（2.5BNB+SBL），獎勵新增業績：12%，同級收入的15%；</p>

        <p className='zifujg'>5、持有兩個史詩卡牌併添加LP（8BNB+SBL），獎勵新增業績：13%，同級收入的25%；</p>
        </div>

      <span>点击任意地方离开</span>
    </Modal>
    </>
  )
}
export default TeamMachine
