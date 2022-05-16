import React from 'react'
import '../assets/style/componentsStyle/CardItem.scss'
import {Contracts} from '../web3'
import {useWeb3React} from '@web3-react/core'
import {openBox} from '../API'
import {BoxInfo} from '../view/NFT'
interface BlindBoxPropsType{
  BoxInfo:BoxInfo
}
function BlindBox(props:BlindBoxPropsType) {
  const web3React = useWeb3React()
  function open(){
    if(!web3React.account){
      return console.log("请链接钱包")
    }
    openBox({id:props.BoxInfo.id,userAddress:web3React.account}).then(res=>{
      console.log(res,"开启盲盒加密")
      Contracts.example.OpenBox(web3React.account as string,res.data.sign).then((res:any)=>{

      })
    })
  }
  return (
    <div className="CardItemLinearBorder">
        <div className="CardItem">
            <div className="CardImg">

            </div>
            <div className="openBtn  linear-gradient" onClick={open}>開啟</div>
        </div>
    </div>
  )
}
export default React.memo(BlindBox)