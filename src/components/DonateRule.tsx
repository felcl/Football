// SBL捐赠规则
import React from 'react'
import { Modal} from 'antd';
import '../assets/style/componentsStyle/DonateRule.scss'

function DonateRule() {
  return (
    <>
    <Modal visible={false} 
    className='DonateRule'
    centered
    width={'446px'}
    closable={ false }
    footer={null}
    >

        <p className='title'>捐贈規則</p>
        <div className='box'>
        <p className='zifujg'>1、捐贈 SBL，獲得兩倍價值的BNB獎勵，捐贈的SBL鏈上銷毀。 </p>
        <p className='zifujg'> 2、捐贈後需間隔28800個區塊方可再次捐贈。</p>
        <p className='zifujg'> 3、單次捐贈起始金額：價值0.5 BNB的SBL（按SBL/BNB市價換算）；</p>
        <p className='zifujg'> 4、單次捐贈上限金額：銷毀基金池50%BNB等價SBL。</p>

        </div>

      <span>点击任意地方离开</span>
    </Modal>
    </>
  )
}
export default DonateRule
