import React from 'react'
import { Modal } from 'antd';
import AddImg from '../assets/image/Union.png'
import BNBImg from '../assets/image/Frame.png'
import SBLImg from '../assets/image/SBL.png'
interface AddFlowPropsType {
  isShow: boolean
}
function AddFlow(props: AddFlowPropsType) {
  return (
    <>  <Modal visible={props.isShow}
      className='AddFlow'
      centered
      width={'528px'}
      closable={false}
      footer={null}
    >
      <div className='Title'>添加流動性</div>
      <div className="BNBBox">
        <div className="BNBNum">
          <div className="Balance">餘額：1,457.485</div>
          <div className="ChangeToBnB">
            <div className="ContentNum">0.5</div>
            <div className="ContentType"><img src={BNBImg}/>BNB</div>
          </div>
        </div>
        <div className="ApproveBOX">
        <div className="ApproveBNB">已批准</div>
        </div>
      </div>
      <div className="Add"><img src={AddImg} /></div>
      <div className="SBLBox">
        <div className="SBLNum">
          <div className="Balance">餘額：1,457.485</div>
          <div className="ChangeToSBL">
            <div className="ContentNum">54.1455</div>
            <div className="ContentType"><img src={SBLImg}/>SBL</div>
          </div>
        </div>
        <div className="ApproveBOX">
        <div className="ApproveSBL"><div className="ApproveGrad">批准 SBL</div></div>
      </div>
      </div>
      <button className='Btn1'>供應</button>
      <span>點擊任意地方關閉</span>
      <button className='Btn2'>供應</button>
    </Modal></>
  )
}
export default AddFlow