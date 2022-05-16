// 确认购买
import React from 'react'
import { Modal} from 'antd';
import '../assets/style/componentsStyle/MarketDealing.scss'

interface MarketDealingPropsType{
  isShow:boolean,
  close:Function,
  buySuccess:Function,
}
 function MarketDealing(props:MarketDealingPropsType) {
   /* 确认购买 */
   function buyFun(){
     /* 购买成功关闭弹窗 */
     props.close()
     /* 购买成功回调 */
    props.buySuccess()
   }
  return (
    <>
    <Modal title="Basic Modal" visible={props.isShow} 
      className='Market'
      onCancel={()=>props.close()}
      centered
      width={'449px'}
      closable={ false }
      footer={null}
      >
          <p className='title'>确认购买</p>
          <p className='zifujg'>购买此卡片需要支付1SBL</p>
        <span>点击任意地方离开</span>
        <button className='btm' onClick={buyFun}>确认</button>
      </Modal></>
  )
}
export default MarketDealing