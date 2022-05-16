import React,{useState} from "react"
import CardDetails from '../components/CardDetails'



import DropDown from '../components/DropDown'
import CardItem from '../components/CardItem'
import Puchased from '../components/Puchased'
import CancelPurchase from '../components/CancelPurchase'
import CancelSucceed from '../components/CancelSucceed'



import '../assets/style/Swap.scss'
import MarketDealing from '../components/MarketDealing'

function Swap() {
    let [showCardDetail,setShowCardDetail] = useState(true)
    const isShowCardDetail=()=>setShowCardDetail(!showCardDetail)
  return (
    <div>
      <div className="Edition-Center">  
        交易场
        <CardDetails isShow={showCardDetail}></CardDetails>
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
                <div className="activeTab linear-gradient">所有</div>
                <div className="invalidTab">我的</div>
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