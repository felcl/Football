import React,{useState , useEffect} from "react"
import '../assets/style/componentsStyle/carddetails.scss'
import {useSelector , useDispatch} from "react-redux";
import {stateType} from '../store/reducer'
import {useWeb3React} from '@web3-react/core'
import CardDetails from '../components/CardDetails'
import {getBoxUserInfo , getUserCard} from '../API'
import DropDown from '../components/DropDown'
import Card,{CardInfoType} from '../components/Card'
import BlindBox from '../components/BlindBox'
import '../assets/style/Swap.scss'
import AddFlow from '../components/AddFlow'
import { Pagination } from 'antd';

export interface BoxInfo{
  id:number,
}
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
function NFT() {
    let state = useSelector<stateType,stateType>(state => state);
    const web3React = useWeb3React()
    let [TabIndex,SetTabIndex] = useState(0)
    /* 类型筛选 */
    let [type,SetType] = useState(0)
    /* 等级筛选 */
    let [level,SetLevel] = useState(0)
    /* 分页总条数 */
    let [totalNum,SetTotalNum] = useState(0)
    let [page,SetPage] = useState(1)
    let [cardDetialIndex,setCardDetialIndex] = useState(0)
    let [userBox,setuserBox] = useState<BoxInfo []>([])
    let [userCard,setuserCard] = useState<CardInfoType []>([])
    /* 卡牌详情弹窗控制 */
    let [showCardDetail,setShowCardDetail] = useState(false)
    function showDetial(index:number) {
      setCardDetialIndex(index)
      setShowCardDetail(true)
    }
    function onChange(pageNumber:number) {
      SetPage(pageNumber)
      console.log('Page: ', pageNumber);
    }
    /* 初始化数据 */
    useEffect(()=>{
      if(state.token && web3React.account){
        getBoxUserInfo(1,10).then(res=>{
          setuserBox(res.data)
          console.log(res,"用户盲盒信息")
        })
      }
    },[state.token,web3React.account])
    useEffect(()=>{
      if(state.token && web3React.account){
        getUserCard({
          currentPage:page,
          level:level,
          pageSize:10,
          type:type,
          userAddress:web3React.account
        }).then(res=>{
          setuserCard(res.data.list)
          SetTotalNum(res.data.size)
          console.log(res,"获取用户所有卡牌")
        })
      }
    },[state.token,web3React.account,type,level,page])
  return (
    <div>
      <AddFlow></AddFlow>
      {
        userCard.length >0 && <CardDetails isShow={showCardDetail} CardInfo={userCard[cardDetialIndex]} close={()=>setShowCardDetail(false)} type="NFT"></CardDetails>
      }
      
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
                <DropDown Map={LevelMap} change={SetLevel}></DropDown>
                 <DropDown Map={typeMap} change={SetType}></DropDown>
            </div>
        </div>
        {
            TabIndex === 0 ? <>
            {/* 卡牌 */}
            <div className="CardList">
              {
                userCard.map((item,index)=><Card key={item.id} Index={index} cardInfo={item} showDetia={showDetial}></Card>)
              }
            </div>
            <div className="Pagination">
                <Pagination style={{margin:"auto"}} showQuickJumper defaultCurrent={page} showSizeChanger={false} total={totalNum} onChange={onChange} />
            </div>
            </>:<>
            {/* 盲盒 */}
            <div className="CardList">
              {
                userBox.map((item)=><BlindBox key={item.id} BoxInfo={item}></BlindBox>)
              }
            </div>
            </>
        }
      </div>
    </div>
  )
}
export default React.memo(NFT)