// 取消挂卖
import React from 'react'
import { Modal} from 'antd';
import '../assets/style/componentsStyle/CancelPurchase.scss'
interface CancelPurchasePropsType{
  isShow:boolean,
  close:Function,
  CancelSuccess:Function
}
 function CancelPurchase(props:CancelPurchasePropsType) {
  function CancelFun(){
    /* 取消成功后回调 */
    props.CancelSuccess()
  }
  return (
    <>
    <Modal title="Basic Modal" visible={props.isShow} 
      className='CancelPurchase'
      onCancel={()=>props.close()}
      centered
      width={'449px'}
      closable={ false }
      footer={null}
      >
          <p className='title'>取消挂卖</p>
          <p className='zifujg'>确认取消挂卖？</p>
        <span>点击任意地方离开</span>
        <button className='btm' onClick={CancelFun}>确认</button>
      </Modal></>
  )
}
export default CancelPurchase