import React,{useState} from "react"
import CardDetails from '../components/CardDetails'
import '../assets/style/componentsStyle/carddetails.scss'
import '../assets/style/componentsStyle/MarketDealing.scss'
import '../assets/style/componentsStyle/Puchased.scss'
import '../assets/style/componentsStyle/CancelPurchase.scss'
import '../assets/style/componentsStyle/CancelSucceed.scss'



import DropDown from '../components/DropDown'
import CardItem from '../components/CardItem'
import Puchased from '../components/Puchased'
import CancelPurchase from '../components/CancelPurchase'
import CancelSucceed from '../components/CancelSucceed'



import '../assets/style/Swap.scss'
import MarketDealing from '../components/MarketDealing'

function Swap() {
    let [TabIndex,SetTabIndex] = useState(0)
    let [showCardDetail,setShowCardDetail] = useState(false)
    const isShowCardDetail=()=>setShowCardDetail(!showCardDetail)
  return (
    <div>
      <div className="Edition-Center">  
        交易场
        {/* 取消挂卖成功 */}
        <CancelSucceed></CancelSucceed>
        {/* 取消挂卖 */}
        <CancelPurchase></CancelPurchase>
        {/* 购买成功 */}
        <Puchased></Puchased>
        {/*确认购买  */}
        <MarketDealing></MarketDealing>
        {/* 卡牌详情 */}
        <CardDetails isShow={showCardDetail}  
        ></CardDetails>
        <div className="SwapTitle">
        交易市場
        </div>
        <div className="screen">
            <div className="Tabs">
                <div className={TabIndex === 0 ? 'activeTab linear-gradient':'invalidTab'} onClick={() =>{SetTabIndex(0)}}>所有</div>
                <div className={TabIndex === 1 ? 'activeTab linear-gradient':'invalidTab'} onClick={() =>{SetTabIndex(1)}}>我的</div>
            </div>
            <div className="DropDownGroup">
                <DropDown></DropDown>
                <DropDown></DropDown>
                <DropDown></DropDown>
            </div>
        </div>
        <div className="CardList">
            <CardItem></CardItem>
        </div>
      </div>
    </div>
  )
}
export default React.memo(Swap)