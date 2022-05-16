// 市场交易确认购买
import React from 'react'
import { Modal} from 'antd';
import '../assets/style/componentsStyle/Puchased.scss'

interface PuchasedPropsType{
  isShow:boolean,
  close:Function
}

 function Puchased(props:PuchasedPropsType) {
  return (
    <>
    <Modal title="Basic Modal" visible={props.isShow} 
      className='Puchased'
      onCancel={()=>props.close()}
      centered
      width={'449px'}
      closable={ false }
      footer={null}
      >
          <p className='title'>购买成功</p>
          <p className='zifujg'>购买成功以放置宝箱</p>
        <span>点击任意地方离开</span>
        <button className='btm' onClick={()=>props.close()}>确认</button>
      </Modal></>
  )
}
export default Puchased