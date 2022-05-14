import React from 'react'
import '../assets/style/componentsStyle/CardItem.scss'
interface CardPropsType{
    showDetia:Function
}
function Card(props:CardPropsType) {
  return (
    <div className="CardItemLinearBorder" onClick={()=>{props.showDetia()}}>
        <div className="CardItem">
            <div className="CardImg">

            </div>
            <div className="cardId">ID：456978</div>
        </div>
    </div>
  )
}
export default React.memo(Card)