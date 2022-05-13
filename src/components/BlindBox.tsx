import React from 'react'
import '../assets/style/componentsStyle/CardItem.scss'
function BlindBox() {
  return (
    <div className="CardItemLinearBorder">
        <div className="CardItem">
            <div className="CardImg">

            </div>
            <div className="openBtn  linear-gradient">開啟</div>
        </div>
    </div>
  )
}
export default React.memo(BlindBox)