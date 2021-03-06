import React from 'react'
import '../assets/style/componentsStyle/CardItem.scss'
import {orderInfoType} from '../view/Swap'
interface CardInfo{
  orderInfo?:orderInfoType
  type:string
  showCardDetail:Function,
  buy?:Function,
  CancelOrder?:Function
}
function CardItem(props:CardInfo) {
  return (
    <div className="CardItemLinearBorder">
        <div className="CardItem">
            <div className="CardImg" onClick={()=>props.showCardDetail()}>
              <img src={props.orderInfo?.image} alt="" />
            </div>
            {
              props.type ==="commodity" && <>
                <div className="price flexCenter">價格：{props.orderInfo?.price} {props.orderInfo?.coinName}  <div className="decorate"></div></div>
                <div className="buyBtn linear-gradient" onClick={()=>{props.buy!()}}>購買</div>
              </>
            }
            {
              props.type ==="goods" && <>
                <div className="price flexCenter">挂单中</div>
                <div className="buyBtn linear-gradient" onClick={()=>props.CancelOrder!()}>取消</div>
              </>
            }
        </div>
    </div>
  )
}
export default React.memo(CardItem)