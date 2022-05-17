import React, { useState } from "react"
import '../assets/style/componentsStyle/carddetails.scss'
import DropDown from '../components/DropDown'
import Card from '../components/Card'
import BlindBox from '../components/BlindBox'
import CardSynthesis from "../components/CardSynthesis"
import '../assets/style/Swap.scss'
import '../assets/style/componentsStyle/CardSynthesis.scss'
import AddFlow from '../components/AddFlow'
import '../assets/style/componentsStyle/AddFlow.scss'
import AddFluidOk from "../components/AddFluidOk"
import '../assets/style/componentsStyle/AddFluidOk.scss'
// 挂卖详情
import PutParticulars from '../components/PutParticulars'
// 合成成功
import ComSucceed from '../components/ComSucceed'
// 卡牌合成规则
import CardComRule from '../components/CardComRule'
// 盲盒开启
import BoxOpen from '../components/BoxOpen'



function NFT() {
  let [TabIndex, SetTabIndex] = useState(0)
  const [showCardSynthesis, setshowCardSynthesis] = useState(false)
  const [showAddFlow, setshowAddFlow] = useState(true)
  const [showAddFluidOk, setshowAddFluidOk] = useState(false)

  return (
    <div>

      <div className="Edition-Center">
        {/* 添加流动性 */}
        <AddFluidOk isShow={showAddFluidOk}></AddFluidOk>
        <AddFlow isShow={showAddFlow}></AddFlow>
        <CardSynthesis isShow={showCardSynthesis}></CardSynthesis>
        <div className="SwapTitle">
          NFT - 庫存
        </div>
        {/* 盲盒开启 */}
        <BoxOpen></BoxOpen>
        {/* 卡牌合成规则 */}
        <CardComRule></CardComRule>
        {/* 挂卖详情 */}
        <PutParticulars></PutParticulars>
        {/* 合成成功 */}
        <ComSucceed></ComSucceed>
        <div className="screen">
          <div className="Tabs">
            <div className={TabIndex === 0 ? 'activeTab linear-gradient' : 'invalidTab'} onClick={() => { SetTabIndex(0) }}>卡牌</div>
            <div className={TabIndex === 1 ? 'activeTab linear-gradient' : 'invalidTab'} onClick={() => { SetTabIndex(1) }}>盲盒</div>
          </div>
          <div className="DropDownGroup">
            <DropDown></DropDown>
            <DropDown></DropDown>
            <DropDown></DropDown>
          </div>
        </div>
        {
          TabIndex === 0 ? <>
            {/* 卡牌 */}
            <div className="CardList">
              <Card></Card>
            </div>
          </> : <>
            {/* 盲盒 */}
            <div className="CardList">
              <BlindBox></BlindBox>
            </div>
          </>
        }


      </div>
    </div>
  )
}
export default React.memo(NFT)