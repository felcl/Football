import React from 'react'
import { Modal} from 'antd';
import '../assets/style/componentsStyle/Puchased.scss'
interface TipsPropsType{
    title:string,
    subTitle:string,
    isShow:boolean,
    enterFun:Function,
    close:Function
}

 function Tips(props:TipsPropsType) {
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
          <p className='title'>{props.title}</p>
          <p className='zifujg'>{props.subTitle}</p>
        <span>点击任意地方离开</span>
        <button className='btm' onClick={()=>props.enterFun()}>确认</button>
      </Modal></>
  )
}
export default React.memo(Tips)