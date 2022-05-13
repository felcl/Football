import React,{useState} from "react"
import CardDetails from '../components/CardDetails'
import '../assets/style/carddetails.scss'
import DropDown from '../components/DropDown'
import CardItem from '../components/CardItem'
import '../assets/style/Swap.scss'

function Swap() {
    let [showCardDetail,setShowCardDetail] = useState(true)
    const isShowCardDetail=()=>setShowCardDetail(!showCardDetail)
  return (
    <div>
      <div className="Edition-Center">  
        交易场
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