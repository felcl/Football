import React,{useState} from "react"
import orderRecord from '../assets/image/orderRecord.png'
import CardDetails from '../components/CardDetails'
import Tips from '../components/Tips'
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
import { Pagination } from 'antd';

import '../assets/style/Swap.scss'
import MarketDealing from '../components/MarketDealing'

function Swap() {
    let [TabIndex,SetTabIndex] = useState(0)
    /* 卡牌详情弹窗控制 */
    let [showCardDetail,setShowCardDetail] = useState(false)
    /* 确认购买弹窗控制 */
    let [showEnterBuy,setShowEnterBuy] = useState(false)
    /* 购买成功弹窗控制 */
    let [showBuySuccess,setShowBuySuccess] = useState(false)
    /* 取消订单弹窗控制 */
    let [showCancelOrder,setShowCancelOrder] = useState(false)
    /* 取消订单成功弹窗控制 */
    let [showCancelSuccess,setShowCancelSuccess] = useState(false)
    function onChange(pageNumber:number) {
        console.log('Page: ', pageNumber);
    }
    function buy(){
        setShowEnterBuy(true)
    }
    function CancelSuccess(){
        setShowCancelOrder(false)
        setShowCancelSuccess(true)
    }
  return (
    <div>
      <div className="Edition-Center">
        {/* 卡牌详情 */}
        <CardDetails isShow={showCardDetail} close={()=>setShowCardDetail(false)} type="Swap"></CardDetails>
        {/* 取消挂卖成功 */}
        <Tips isShow={showCancelSuccess} title="取消成功" subTitle="该挂卖以成功取消" close={()=>setShowCancelSuccess(false)}></Tips>
        {/* 取消挂卖 */}
        <CancelPurchase isShow={showCancelOrder} close={()=>setShowCancelOrder(false)} CancelSuccess={CancelSuccess}></CancelPurchase>
        {/* 购买成功 */}
        <Tips isShow={showBuySuccess} title="购买成功" subTitle="购买成功以放置宝箱" close={()=>setShowBuySuccess(false)}></Tips>
        {/*确认购买  */}
        <MarketDealing isShow={showEnterBuy} close={()=>{setShowEnterBuy(false)}} buySuccess={()=>setShowBuySuccess(true)}></MarketDealing>
        {/* 卡牌详情 */}
        <div className="SwapTitle">
        交易市場
        </div>
        <div className="screen">
            <div className="Tabs">
                <div className={TabIndex === 0 ? 'activeTab linear-gradient':'invalidTab'} onClick={() =>{SetTabIndex(0)}}>所有</div>
                <div className={TabIndex === 1 ? 'activeTab linear-gradient':'invalidTab'} onClick={() =>{SetTabIndex(1)}}>我的</div>
            </div>
            {
                TabIndex === 0 &&  <div className="DropDownGroup">
                    <DropDown></DropDown>
                    <DropDown></DropDown>
                    <DropDown></DropDown>
                </div>
            }
            {
                TabIndex === 1 &&  <div className="DropDownGroup">
                    <img src={orderRecord} alt="" />
                    <DropDown></DropDown>
                    <DropDown></DropDown>
                </div>
            }
        </div>
        {
            TabIndex === 0 && <>
            {/* 交易场订单列表 */}
            <div className="CardList">
                <CardItem type="commodity" showCardDetail={()=>{setShowCardDetail(true)}} buy={buy}></CardItem>
                <CardItem type="commodity" showCardDetail={()=>{setShowCardDetail(true)}} buy={buy}></CardItem>
                <CardItem type="commodity" showCardDetail={()=>{setShowCardDetail(true)}} buy={buy}></CardItem>
            </div>
            </>
        }
        {
            TabIndex === 1 && <>
            {/* 交易场订单列表 */}
            <div className="CardList">
                <CardItem type="goods" showCardDetail={()=>{setShowCardDetail(true)}} CancelOrder={()=>setShowCancelOrder(true)}></CardItem>
            </div>
            </>
        }
        <div className="Pagination">
            <Pagination style={{margin:"auto"}} showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
        </div>
      </div>
    </div>
  )
}
export default React.memo(Swap)