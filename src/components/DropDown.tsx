import React from 'react'
import dropDownIcon from '../assets/image/dropDownIcon.png'
import '../assets/style/componentsStyle/DropDown.scss'

function DropDown() {
  return (
    <div className="dropDown">
        全部等級
        <img src={dropDownIcon} alt="" />
    </div>
  )
}
export default React.memo(DropDown)