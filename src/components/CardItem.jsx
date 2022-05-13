import React from 'react'
import '../assets/style/componentsStyle/CardItem.scss'
function CardItem() {
  return (
    <div className="CardItemLinearBorder">
        <div className="CardItem">
            <div className="CardImg">

            </div>
            <div className="price flexCenter">價格：1 SBL <div className="decorate"></div></div>
            <div className="buyBtn linear-gradient">購買</div>
        </div>
    </div>
  )
}
export default React.memo(CardItem)