// 市场交易卡牌详情和NFT卡牌详情下面3个button按钮的差别
import React, { useState } from 'react';
import { Modal} from 'antd';

interface CardDetailPropsType{
  isShow:boolean
}
 function CardDetails(props:CardDetailPropsType) {
    // const [isModalVisible, setIsModalVisible] = useState(true);


  
    // const handleOk = () => {
    //   setIsModalVisible(false);
    // };
  
    // const handleCancel = () => {
    //   setIsModalVisible(false);
    // };
  return (
    <>
    {/* <div className='box'>11111</div> */}
      <Modal title="Basic Modal" visible={props.isShow} 
      className='Card'
      centered
      width={'449px'}
      closable={ false }
      footer={null}
      >
          <p className='title'>卡牌详情</p>
          <div className='hzimg'>
              <img src=''></img>
          </div>
          <p className='kpdetails'>卡牌名称:名称</p>
          <p className='kpdetails'>卡牌ID:111</p>
          <p className='kpdetails'>卡牌等级:1星</p>
          <p className='kpdetails'>卡牌类型:无</p>
          <p className='kpdetails'>卡牌介绍:</p>
        <div className='butm'>
            <button className='gm'><div>挂卖</div></button>
            <button className='hc'>合成</button>
            <button className='zy'>质押</button>

        </div>
        <span>点击任意地方离开</span>
      </Modal>
    </>
  )
}
export default CardDetails