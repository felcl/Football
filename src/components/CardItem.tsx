import React from 'react'
import '../assets/style/componentsStyle/CardItem.scss'
interface CardInfo{
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

            </div>
            {
              props.type ==="commodity" && <>
                <div className="price flexCenter">價格：1 SBL <div className="decorate"></div></div>
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