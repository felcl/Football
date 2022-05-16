// 金币节点奖励机制
import React from 'react'
import { Modal} from 'antd';

function GlodMechanism() {
  return (
    <>
    <Modal visible={false} 
    className='GlodMechanism'
    centered
    width={'634px'}
    closable={ false }
    footer={null}
    >

        <p className='title'>奖励机制</p>
        <div className='box'>
          <p className='tou'>加速釋放：</p>
        <p className='zifujg'>1、持有普通NFT卡牌，享有一星級12%推薦獎勵；持有良好NFT卡牌，享有二星級8%推薦獎勵；</p>
        <p className='zifujg'> 2、持有優秀卡牌併添加LP（0.2BNB+SBL），獎勵新增業績：3%，同級收入的3%；</p>
        <p className='zifujg'>3、持有稀有卡牌併添加LP（0.5BNB+SBL），獎勵新增業績：6%，同級收入的5%；</p>

        <p className='zifujg'>持有良品卡牌併添加LP（1BNB+SBL），獎勵新增業績：8%，同級收入的10%； </p>

        <p className='zifujg'>5、持有史詩卡牌併添加LP（2.5BNB+SBL），獎勵新增業績：12%，同級收入的15%；</p>
        <p className='zifujg'>6、持有2個史詩卡牌併添加LP（8BNB+SBL），獎勵新增業績：13%，同級收入的25%。</p>
        <p className='btm'>投入返還：</p>
        <p className='zifujg'> 鑄幣節點90天內未能完成節點鑄幣額度的20%，退還4個BNB，保留20%的SBL代幣，保留的SBL代幣可以繼續通過邀請銷毀加速釋放出來</p>

        </div>

      <span>点击任意地方离开</span>
    </Modal>
    </>
  )
}
export default GlodMechanism
