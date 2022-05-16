import React, { useState } from 'react';
import {CardInfoType} from './Card'
import { Modal} from 'antd';

interface CardDetailPropsType{
  isShow:boolean,
  close:Function,
  type:string,
  CardInfo:CardInfoType
}
/* type:Swap 交易场详情 CreateOrder 挂单详情 NFT 背包卡牌详情 */
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
      onCancel={()=>props.close()}
      className='Card'
      centered
      width={'449px'}
      closable={ false }
      footer={null}
      >
          <p className='title'>卡牌详情</p>
          <div className='hzimg'>
              <img src={props.CardInfo.imageUrl} alt=""></img>
          </div>
          <p className='kpdetails'>卡牌名称:{props.CardInfo.cardName}</p>
          <p className='kpdetails'>卡牌ID:{props.CardInfo.id}</p>
          <p className='kpdetails'>卡牌等级:1星</p>
          <p className='kpdetails'>卡牌类型:无</p>
          <p className='kpdetails'>卡牌介绍:{props.CardInfo.introduce}</p>
          {
            props.type === "NFT" && <div className='butm'>
                <button className='gm'><div>挂卖</div></button>
                <button className='hc'>合成</button>
                <button className='zy'>质押</button>
            </div>
          }
          <span>点击任意地方离开</span>
        </Modal>
    </>
  )
}
export default CardDetails