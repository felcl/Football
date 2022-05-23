import React, {useEffect, useState } from "react"
import RaceBoxModal from "../components/RaceBoxModal"
import {useWeb3React} from '@web3-react/core'
import {getBoxBase} from '../API'
import {Contracts} from '../web3'
// import Tips from "../components/Tips"
import { useTranslation } from 'react-i18next'
import {isApprove,addMessage,showLoding} from '../utils/tool'
import PurchaseBox from "../components/PurchaseBox"
import BlindBoxImg from '../assets/image/BlindBoxImg.png'
import '../assets/style/BlindBox.scss'
import '../assets/style/RaceBoxModal.scss'
import '../assets/style/PurchaseBox.scss'
import { contractAddress } from "../config"
import BigNumber from 'big.js'

export interface BoxBaseType{
  id:number
  status:number
  coinName:string
  price:number
}

function BlindBox() {
  const web3React = useWeb3React()
  let { t ,i18n} = useTranslation()
  const [showRaceBoxModal, setShowRaceBoxModal] = useState(false)
  const [showPurchaseBox, setShowPurchaseBox] = useState(false)
  /* 盲盒基本配置 */
  const [BoxBase,setBoxBase] = useState<BoxBaseType[]>([])
  const [buyBoxIndex,setBuyBoxIndex] = useState(0)
  /* 授权额度 */
  const [approveValue,setApproveValue] = useState('0')
  // const [showCardSynthesis, setshowCardSynthesis] = useState(true)
  /* 购买成功回调 */
  function buySuccess(){
    setShowRaceBoxModal(false)
    setShowPurchaseBox(true)
  }
  function buyBox(index:number){
    setBuyBoxIndex(index)
    setShowRaceBoxModal(true)
  }
  function approveFun(){
    if(!web3React.account){
      return console.log("请连接钱包")
    }
    showLoding(true)
    Contracts.example.approve(web3React.account,contractAddress.BlindBox).then(()=>{
      Contracts.example.Tokenapprove(web3React.account as string,contractAddress.BlindBox).then((res:any)=>{
        setApproveValue(new BigNumber(res).div(10 ** 18).toString())
      }).finally(()=>{
        showLoding(false)
      })
    })
  }
  useEffect(()=>{
    /* 查询盲盒基本配置 */
    getBoxBase().then(res=>{
      setBoxBase(res.data)
      console.log(res,"盲盒基本配置")
    })
  },[])
  useEffect(()=>{
    if(web3React.account){
      /* 查询用户授权 */
      Contracts.example.Tokenapprove(web3React.account,contractAddress.BlindBox).then((res:any)=>{
        setApproveValue(new BigNumber(res).div(10 ** 18).toString())
        console.log(new BigNumber(res).div(10 ** 18).toString(),"授权额度")
      })
    }
  },[web3React.account])
  return (
    <div>
      <div className="Edition-Center">
        {/* 购买确认弹窗 */}
        { 
          BoxBase[buyBoxIndex] && <RaceBoxModal isShow={showRaceBoxModal} BoxInfo={BoxBase[buyBoxIndex]} close={()=>{setShowRaceBoxModal(false)}} buySuccess={buySuccess}></RaceBoxModal>
        }
        
        {/* 购买成功弹窗 */}
        <PurchaseBox isShow={showPurchaseBox} close={()=>{setShowPurchaseBox(false)}}></PurchaseBox>
        <div className="BlindBoxTitle">
          盲盒寶箱
        </div>
        <div className="BlindBoxInfo">
          <div className="Info">
            <div className="intr">
              寶箱介紹
            </div>
            <div className="intrContent">
              寶箱可以隨機開出普通、良好、優秀三種屬性的NFT。
              Spall Ball玩家通過質押NFT來獲得SBL獎勵，根據NFT的稀有度和星級來決定SBL獎勵。 NFT可在Space Ball生態內的交易市場交易，也支持在第三方交易平台交易。
            </div>
            {
              BoxBase.map((item,index)=><div key={item.id} className="BuyRow">
              <div className="buyInfo">
                <div className="BuyName">{index === 0 ? 'IGO':'售卖'}</div>
                <div className="price">價格：{item.price} {item.coinName}/個</div>
              </div>
              {
                /* 判断状态 */
                item.status === 1 ?<>
                  {
                    /* 判断币种：如果是BNB直接购买 ，如果不是需要判断授权*/
                    item.coinName === 'BNB' ? <>
                    <div className="BuyBtn linear-gradient pointer" onClick={()=>{buyBox(index)}}>立即購買</div>
                    </>:<>
                      {
                        isApprove(item.price,approveValue) ? <>
                        <div className="BuyBtn linear-gradient pointer" onClick={()=>{buyBox(index)}}>立即購買</div>
                        </> : <>
                        <div className="BuyBtn linear-gradient pointer" onClick={approveFun}>授权</div>
                        </>
                      }
                    </>
                  }
                </>:<>
                  <div className="BuyBtn invalid pointer">暂未开启</div>
                </>
              }
            </div>)
            }
            {/* <div className="BuyRow">
              <div className="buyInfo">
                <div className="BuyName">售賣</div>
                <div className="price">價格：？ SBL/個</div>
              </div>
              <div className="BuyBtn invalid pointer">立即購買</div>
            </div> */}
          </div>
          <div className="Img">
            <img src={BlindBoxImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default React.memo(BlindBox)