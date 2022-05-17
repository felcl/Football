import React,{useState , useEffect} from "react"
import orderRecord from '../assets/image/orderRecord.png'
import nodata from '../assets/image/nodata.png'
import {useSelector , useDispatch} from "react-redux";
import {stateType} from '../store/reducer'
import CardDetails from '../components/CardDetails'
import {useWeb3React} from '@web3-react/core'
import Tips from '../components/Tips'
import {getOrderList} from '../API'

import DropDown from '../components/DropDown'
import CardItem from '../components/CardItem'
import Puchased from '../components/Puchased'
import CancelPurchase from '../components/CancelPurchase'
import CancelSucceed from '../components/CancelSucceed'
import MyDealRecord from '../components/MyDealRecord'
import { Pagination } from 'antd';

import '../assets/style/Swap.scss'
import MarketDealing from '../components/MarketDealing'

const LevelMap = [
    {
      key:'全部等级',
      value:0
    },
    {
      key:'普通',
      value:1
    },
    {
      key:'良好',
      value:2
    },
    {
      key:'优秀',
      value:3
    },
    {
      key:'稀有',
      value:4
    },
    {
      key:'良品',
      value:5
    },
    {
      key:'史诗',
      value:6
    }
  ]
  const typeMap = [
    {
      key:'全部类型',
      value:0
    },
    {
      key:'类型1',
      value:1
    },
    {
      key:'类型2',
      value:2
    },
    {
      key:'类型3',
      value:3
    },
    {
      key:'类型4',
      value:4
    }
  ]
  const sortMap = [
    {
      key:'最新上架',
      value:1
    },
    {
      key:'价格从底到高',
      value:2
    },
    {
      key:'价格从高到低',
      value:3
    }
  ]
  export interface orderInfoType{
    id:number,
    price:number,
    chainOrderId:string
  }
function Swap() {
    let state = useSelector<stateType,stateType>(state => state);
    const web3React = useWeb3React()
    /* 分页总条数 */
    let [totalNum,SetTotalNum] = useState(0)
    /* 分页页数 */
    let [page,SetPage] = useState(1)
    /* 筛选排序 */
    let [sort,SetSort] = useState(0)
    /* 类型筛选 */
    let [type,SetType] = useState(0)
    /* 等级筛选 */
    let [level,SetLevel] = useState(0)
    /* 用户订单类型筛选 */
    let [usertype,SetUsertype] = useState(0)
    /* 用户订单等级筛选 */
    let [userlevel,SetUserlevel] = useState(0)
    /* tab */
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
    /* 购买订单信息 */
    let [orderInfo,setOrderInfo] = useState<orderInfoType | null>(null)
    /* 订单列表 */
    let [orderList,setOrderList] = useState<orderInfoType []>([])
    /* 用户订单列表 */
    let [userOrderList,setUserOrderList] = useState<orderInfoType []>([])

    useEffect(()=>{
        if(TabIndex === 0 && state.token && web3React.account){
            getOrderList({
                currentPage:page,
                level:level,
                pageSize:10,
                type:type
            }).then(res=>{
                setOrderList(res.data.list)
                SetTotalNum(res.data.size)
                console.log(res,"获取交易场订单列表")
            })
        }
    },[page,sort,type,level,TabIndex,state.token,web3React.account])
    useEffect(()=>{
        if(TabIndex === 1 && state.token && web3React.account){
            getOrderList({
                currentPage:page,
                level:userlevel,
                pageSize:10,
                type:usertype
            }).then(res=>{
                setUserOrderList(res.data.list)
                SetTotalNum(res.data.size)
                console.log(res,"获取交易场订单列表")
            })
        }
    },[page,sort,usertype,userlevel,TabIndex,state.token,web3React.account])
    function onChange(pageNumber:number) {
        SetPage(pageNumber)
        console.log('Page: ', pageNumber);
    }
    function buy(index:number){
        setOrderInfo(orderList[index])
        setShowEnterBuy(true)
    }
    function Cancel(index:number){
        setOrderInfo(userOrderList[index])
        setShowCancelOrder(true)
    }
    function CancelSuccess(){
        setShowCancelOrder(false)
        setShowCancelSuccess(true)
    }
    function changeTab(tab:number){
        SetTabIndex(tab)
    }
  return (
    <div>
      <div className="Edition-Center">
        {/* 我的交易记录 */}
        {/* <MyDealRecord></MyDealRecord> */}
        {/* 卡牌详情 */}
        {/* <CardDetails isShow={showCardDetail} close={()=>setShowCardDetail(false)} type="Swap"></CardDetails> */}
        {/* 取消挂卖成功 */}
        <Tips isShow={showCancelSuccess} title="取消成功" subTitle="该挂卖以成功取消" close={()=>setShowCancelSuccess(false)}></Tips>
        {/* 取消挂卖 */}
        {
            orderInfo && <CancelPurchase isShow={showCancelOrder} buyInfo={orderInfo} close={()=>setShowCancelOrder(false)} CancelSuccess={CancelSuccess}></CancelPurchase>
        }
        {/* 购买成功 */}
        <Tips isShow={showBuySuccess} title="购买成功" subTitle="购买成功以放置宝箱" close={()=>setShowBuySuccess(false)}></Tips>
        {/*确认购买  */}
        {
            orderInfo && <MarketDealing isShow={showEnterBuy} buyInfo={orderInfo} close={()=>{setShowEnterBuy(false)}} buySuccess={()=>setShowBuySuccess(true)}></MarketDealing>
        }
        {/* 卡牌详情 */}
        <div className="SwapTitle">
        交易市場
        </div>
        <div className="screen">
            <div className="Tabs">
                <div className={TabIndex === 0 ? 'activeTab linear-gradient':'invalidTab'} onClick={() =>{changeTab(0)}}>所有</div>
                <div className={TabIndex === 1 ? 'activeTab linear-gradient':'invalidTab'} onClick={() =>{changeTab(1)}}>我的</div>
            </div>
            {
                TabIndex === 0 &&  <div className="DropDownGroup">
                    <DropDown Map={LevelMap} change={SetLevel}></DropDown>
                    <DropDown Map={typeMap} change={SetType}></DropDown>
                    <DropDown Map={sortMap} change={SetSort}></DropDown>
                </div>
            }
            {
                TabIndex === 1 &&  <div className="DropDownGroup">
                    <img src={orderRecord} alt="" />
                    <DropDown Map={LevelMap} change={SetUserlevel} ></DropDown>
                    <DropDown Map={typeMap} change={SetUsertype}></DropDown>
                </div>
            }
        </div>
        {
            TabIndex === 0 && <>
            {/* 交易场订单列表 */}
            <div className="CardList">
                {
                    orderList.length !==0 ? <>
                    {
                        orderList.map((item,index) =><CardItem key={item.id} type="commodity" orderInfo={item} showCardDetail={()=>{setShowCardDetail(true)}} buy={()=>buy(index)}></CardItem>)
                    }
                    </>:<>
                    {/* <img src={nodata} alt="" /> */}
                    </>
                }
                
            </div>
            </>
        }
        {
            TabIndex === 1 && <>
            {/* 交易场个人订单列表 */}
            <div className="CardList">
                {
                    userOrderList.map((item,index) =><CardItem type="goods" key={item.id} showCardDetail={()=>{setShowCardDetail(true)}} CancelOrder={()=>Cancel(index)}></CardItem>)
                }
            </div>
            </>
        }
        {/* 交易场数据合个人交易场数据共用一个分页器 */}
        <div className="Pagination">
            <Pagination style={{margin:"auto"}} showQuickJumper defaultCurrent={page} showSizeChanger={false} total={totalNum} onChange={onChange} />
        </div>
        
      </div>
    </div>
  )
}
export default React.memo(Swap)