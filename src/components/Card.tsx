import React from 'react'
import '../assets/style/componentsStyle/CardItem.scss'
function Card() {
  return (
    <div className="CardItemLinearBorder">
        <div className="CardItem">
            <div className="CardImg">

            </div>
            <div className="cardId">ID：456978</div>
        </div>
    </div>
  )
}
export default React.memo(Card)