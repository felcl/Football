import React,{useState} from "react"
import '../assets/style/componentsStyle/carddetails.scss'
import CardDetails from '../components/CardDetails'
import DropDown from '../components/DropDown'
import Card from '../components/Card'
import BlindBox from '../components/BlindBox'
import '../assets/style/Swap.scss'
import AddFlow from '../components/AddFlow'

function NFT() {
    let [TabIndex,SetTabIndex] = useState(0)
    /* 卡牌详情弹窗控制 */
    let [showCardDetail,setShowCardDetail] = useState(false)
    function showDetial(){
        setShowCardDetail(true)
    }
  return (
    <div>
      <AddFlow></AddFlow>
      <CardDetails isShow={showCardDetail} close={()=>setShowCardDetail(false)} type="NFT"></CardDetails>
      <div className="Edition-Center">
        <div className="SwapTitle">
        NFT - 庫存
        </div>
        <div className="screen">
            <div className="Tabs">
                <div className={TabIndex === 0 ? 'activeTab linear-gradient':'invalidTab'} onClick={() =>{SetTabIndex(0)}}>卡牌</div>
                <div className={TabIndex === 1 ? 'activeTab linear-gradient':'invalidTab'} onClick={() =>{SetTabIndex(1)}}>盲盒</div>
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
                <Card showDetia={showDetial}></Card>
            </div>
            </>:<>
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