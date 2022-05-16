import React, { useState } from 'react'
import { Menu, Dropdown } from 'antd';
import dropDownIcon from '../assets/image/dropDownIcon.png'
import '../assets/style/componentsStyle/DropDown.scss'
interface DropDownPropsType{
  Map:{
    key:string,
    value:number,
  } [],
  change:Function
}
function DropDown(props : DropDownPropsType) {
  let [Index,setIndex] = useState(0)
    const {Map} = props
    function change(value:number,index:number){
      setIndex(index)
      props.change(value)
    }
    const menu = (
        <Menu>
        {
            Map.map((item,index)=><Menu.Item key={index} onClick={()=>{change(item.value,index)}}>
                {item.key}
            </Menu.Item>)
        }
        </Menu>
      );
    function getparent(triggerNode:any){
        return triggerNode.parentNode
    }
  return (
    <Dropdown overlay={menu} overlayClassName="DropDown" getPopupContainer={getparent} trigger={['click']}>
        <div className="dropDown" >
            {Map[Index].key}
            <img src={dropDownIcon} alt="" />
        </div>
    </Dropdown>
  )
}
export default React.memo(DropDown)