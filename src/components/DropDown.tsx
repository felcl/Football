import React from 'react'
import { Menu, Dropdown } from 'antd';
import dropDownIcon from '../assets/image/dropDownIcon.png'
import '../assets/style/componentsStyle/DropDown.scss'
function DropDown() {
    function Change(value:number|string){

    }
    let Map=[
        {
          key:'全部',
          value:-1
        },
        {
          key:'NFT',
          value:2
        },
        {
          key:'盲盒',
          value:1
        }
    ]
    const menu = (
        <Menu>
        {
            Map.map((item,index)=><Menu.Item key={index} onClick={()=>{Change(item.value)}}>
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
            全部等級
            <img src={dropDownIcon} alt="" />
        </div>
    </Dropdown>
  )
}
export default React.memo(DropDown)