import React from 'react'
import '../assets/style/componentsStyle/CardItem.scss'
import {Contracts} from '../web3'
import {useWeb3React} from '@web3-react/core'
import {openBox} from '../API'
import {BoxInfo} from '../view/NFT'
import {addMessage,showLoding} from '../utils/tool'
interface BlindBoxPropsType{
  BoxInfo:BoxInfo,
  openSuccess:Function
}
function BlindBox(props:BlindBoxPropsType) {
  const web3React = useWeb3React()
  function open(){
    if(!web3React.account){
      return addMessage("请链接钱包")
    }
    showLoding(true)
    openBox({id:props.BoxInfo.id,userAddress:web3React.account}).then((res:any)=>{
      console.log(res,"盲盒开启")
      if(res.data && res.code ===200){
        Contracts.example.OpenBox(web3React.account as string,res.data.sign).then(()=>{
          return props.openSuccess(res.data.cardUser)
        }).finally(()=>{
          showLoding(false)
        })
      }else{
        addMessage(res.msg)
        showLoding(false)
      }
    },()=>{
      showLoding(false)
    })
  }
  return (
    <div className="CardItemLinearBorder">
        <div className="CardItem">
            <div className="CardImg">
              <img src={props.BoxInfo.image} alt="" />
            </div>
            <div className="openBtn  linear-gradient" onClick={open}>開啟</div>
        </div>
    </div>
  )
}
export default React.memo(BlindBox)