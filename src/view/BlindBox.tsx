import React, { useState } from "react"
import RaceBoxModal from "../components/RaceBoxModal"
import Tips from "../components/Tips"
// import CardSynthesis from "../components/CardSynthesis"
import BlindBoxImg from '../assets/image/BlindBoxImg.png'
import '../assets/style/BlindBox.scss'
import '../assets/style/RaceBoxModal.scss'
import '../assets/style/PurchaseBox.scss'
function BlindBox() {
  const [showRaceBoxModal, setShowRaceBoxModal] = useState(false)
  const [showPurchaseBox, setShowPurchaseBox] = useState(false)
  const [showCardSynthesis, setshowCardSynthesis] = useState(true)
  /* 购买成功回调 */
  function buySuccess(){
    setShowRaceBoxModal(false)
    setShowPurchaseBox(true)
  }
  return (
    <div>
      <div className="Edition-Center">
        寶箱
        {/* 购买确认弹窗 */}
        <RaceBoxModal isShow={showRaceBoxModal} close={()=>{setShowRaceBoxModal(false)}} buySuccess={buySuccess}></RaceBoxModal>
        {/* 购买成功弹窗 */}
        <Tips isShow={showPurchaseBox} title="購買成功!" subTitle="確認購買該盲盒？此次購買消耗0.5BNB" close={()=>{setShowPurchaseBox(false)}}></Tips>
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
            <div className="BuyRow">
              <div className="buyInfo">
                <div className="BuyName">IGO</div>
                <div className="price">價格：0.5 BNB/個</div>
              </div>
              <div className="BuyBtn linear-gradient pointer" onClick={()=>{setShowRaceBoxModal(true)}}>立即購買</div>
            </div>
            <div className="BuyRow">
              <div className="buyInfo">
                <div className="BuyName">售賣</div>
                <div className="price">價格：？ SBL/個</div>
              </div>
              <div className="BuyBtn invalid pointer">立即購買</div>
            </div>
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