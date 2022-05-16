// 市场交易取消挂卖成功
import React from 'react'
import '../assets/style/componentsStyle/CancelSucceed.scss'
import { Modal} from 'antd';
interface CancelSucceedPropsType{
  isShow:boolean,
  close:Function
}
 function CancelSucceed(props:CancelSucceedPropsType) {
  return (
    <>
    <Modal title="Basic Modal" visible={props.isShow} 
      className='CancelSucceed'
      onCancel={()=>props.close()}
      centered
      width={'449px'}
      closable={ false }
      footer={null}
      >
          <p className='title'>取消成功</p>
          <p className='zifujg'>该挂卖以成功取消</p>
        <span>点击任意地方离开</span>
        <button className='btm' onClick={()=>props.close()}>确认</button>
      </Modal></>
  )
}
export default CancelSucceed