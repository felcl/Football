import React, {useEffect, useState } from "react"
import RaceBoxModal from "../components/RaceBoxModal"
import {getBoxBase} from '../API'
// import {Contracts} from '../web3'
import Tips from "../components/Tips"
import PurchaseBox from "../components/PurchaseBox"
import BlindBoxImg from '../assets/image/BlindBoxImg.png'
import '../assets/style/BlindBox.scss'
import '../assets/style/RaceBoxModal.scss'
import '../assets/style/PurchaseBox.scss'

export interface BoxBaseType{
  id:number
  status:number
  coinName:string
  price:number
}

function BlindBox() {
  const [showRaceBoxModal, setShowRaceBoxModal] = useState(false)
  const [showPurchaseBox, setShowPurchaseBox] = useState(false)
  /* 盲盒基本配置 */
  const [BoxBase,setBoxBase] = useState<BoxBaseType[]>([])
  const [buyBoxIndex,setBuyBoxIndex] = useState(0)
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
  useEffect(()=>{
    getBoxBase().then(res=>{
      setBoxBase(res.data)
      console.log(res,"盲盒基本配置")
    })
  },[])
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
                <div className="BuyName">IGO</div>
                <div className="price">價格：{item.price} {item.coinName}/個</div>
              </div>
              {
                item.status === 1 ?<>
                  <div className="BuyBtn linear-gradient pointer" onClick={()=>{buyBox(index)}}>立即購買</div>
                </>:<>
                  <div className="BuyBtn invalid pointer">立即購買</div>
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