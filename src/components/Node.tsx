import React , {useState , useEffect} from 'react'
import {Contracts} from '../web3'
import {useWeb3React} from '@web3-react/core'
import {addMessage,showLoding} from '../utils/tool'
import {useSelector} from "react-redux";
import {stateType} from '../store/reducer'
import {getNodeBase , buyNodeBase , getNodeUserList , getCardUserMaxLevelInfo} from '../API'
import GoldRecord from '../components/GoldRecord'
import GlodJdSy from '../components/GlodJdSy'
import record from '../assets/image/record.png'
import Refresh from '../assets/image/Refresh.png'
import SBLToken from '../assets/image/SBLToken.png'
import '../assets/style/componentsStyle/Node.scss'
import { contractAddress } from '../config'
import BigNumber from 'big.js'

interface NodeBase{
    id:number
    price:number,
    buyCoinName:string,
    awardNum:number,
    alreadyBuyNum:number,
    systemBuyNum:number,
    isBuy:number,
}
interface NodeInfoType{
    currentNodeBase:NodeBase,
    downNodeBase:NodeBase
}
interface NodeRecordType{
    id:number,
    backDay:number,
    totalAwardNum:number,
    stayAwardNum:number,
    stayDrawNum:number,
    currentDay:number,
    coinName:string,
    isReturn:number
}
interface ApplyRecordType{
    id:number,
}
const nodeAccelerate = ['未達標獎勵標準','享有一星级10%推荐奖励','享有二星级6%推荐奖励','新增业绩3%，同级收入3%','新增业绩:6%，同级收入5%','新增业绩:9%，同级收入10%','新增业绩:12%，同级收入15%','新增业绩:15%，同级收入25%']
export default function Node() {
    const web3React = useWeb3React()
    let state = useSelector<stateType,stateType>(state => state);
    let [NodeBase,setNodeBase] = useState<NodeInfoType | null>(null)
    let [NodeRecord,setNodeRecord] = useState<NodeRecordType []>([])
    /* 铸币节点申请记录弹窗 */
    let [showApplyRecord,setshowApplyRecord] = useState(false)
    /* 铸币节点奖励记录弹窗 */
    let [showProfit,setShowProfit] = useState(false)
    /* 用户最高等级 */
    let [MaxLevel,setMaxLevel] = useState(0)
    /* 铸币节点奖励记录id */
    let [ProfitId,setProfitId] = useState(-1)
    /* 加载状态 */
    let [heavyLoad,setHeavyLoad] = useState(false)
    useEffect(()=>{
        getNodeBase().then(res=>{
            setNodeBase(res.data)
            console.log(res,"节点配置")
        })
    },[])
    useEffect(()=>{
        if(state.token){
            getNodeUserList().then(res=>{
                setNodeRecord(res.data)
                console.log(res,"节点奖励记录")
            })
            getCardUserMaxLevelInfo().then(res=>{
                setMaxLevel(res.data)
            })
        }
    },[state.token])
    function approve(){
        if(web3React.account){
            Contracts.example.approve(web3React.account, contractAddress.Node).then(()=>{
                
            })
        }
    }
    async function buyNode(){
        if(web3React.account && NodeBase){
            if(NodeBase.currentNodeBase.isBuy === 0){
                return addMessage("节点释放中，请释放完成后购买")
            }
            let balanceOf = await Contracts.example.balanceOf(web3React.account)
            if(new BigNumber(balanceOf).div(10 ** 18).lt(NodeBase.currentNodeBase.price)){
                return addMessage("余额不足")
            }
            buyNodeBase({
                id:NodeBase.currentNodeBase.id,
                userAddress:web3React.account
            }).then(res=>{
                console.log(res,"购买节点加密")
                if(res.data){
                    Contracts.example.buyNode(web3React.account as string,res.data,NodeBase!.currentNodeBase.price).then(()=>{
                    
                    })
                }else{

                }
            })
        }
    }
    /* 显示节点奖励记录弹窗 */
    function ShowProfitFun(id:number){
        console.log(id)
        setProfitId(id)
        setShowProfit(true)
    }
    function getMaxLevel(){
        setHeavyLoad(true)
        setTimeout(()=>{
            setHeavyLoad(false)
        },1000)
       getCardUserMaxLevelInfo().then(res=>{
           setMaxLevel(res.data)
           console.log(res,'用户卡牌最高等级')
       })
    }
  return (
    <div>
        <div className="RewardLabel">
        節點申請
        </div>
        <div className="row">
            {
                NodeBase && <div className="RewardItem">
                <div className="NodeTips">
                    當前節點申請：<br />
                    支付 {NodeBase.currentNodeBase.price} BNB 獲得 {NodeBase.currentNodeBase.awardNum} SBL
                </div>
                <div className="progressRow">
                    <div className="progressLabel">
                    進程：
                    </div>
                    <div className="progress">
                        <div className="progressValue" style={{width:NodeBase.currentNodeBase.alreadyBuyNum + NodeBase.currentNodeBase.systemBuyNum >99 ? '99%' :NodeBase.currentNodeBase.alreadyBuyNum + NodeBase.currentNodeBase.systemBuyNum+'%'}}></div>
                    </div>
                </div>
                <div className={NodeBase.currentNodeBase.isBuy ? "applyBtn flexCenter" :"applyBtn invalid flexCenter"} onClick={buyNode}>申請節點</div>
                <div className="NodeTips">
                    下期節點申請：<br />
                    支付 <span className="important">{NodeBase.downNodeBase.price} BNB</span>  獲得 <span className="important">{NodeBase.downNodeBase.awardNum} SBL</span> 
                </div>
                <span className="record" onClick={()=>{setshowApplyRecord(true)}}>申請記錄 <img src={record} alt="" /></span>
            </div>
            }
            
        </div>
        {
            NodeRecord.length >0 && <div className="RewardLabel">
            節點獎勵
            </div>
        }
        
        <div className="row">
            {
                NodeRecord.map((item)=><div className="RewardItem" key={item.id}>
                    <div className="NodeTips">
                        獎勵總金額：<span className="important">{item.totalAwardNum} {item.coinName}</span>
                    </div>
                    <div className="NodeTips">
                        待加速金額：<span className="important">{item.stayAwardNum} {item.coinName}</span>
                    </div>
                    <div className="progressRow">
                        <div className="progressLabel">
                        進程：
                        </div>
                        <div className="progress">
                            <div className="progressValue" style={{width:item.currentDay / item.backDay * 100 +'%'}}></div>
                        </div>
                        <div className="progressInrt">（{item.backDay}D）</div>
                    </div>
                    <div className="rewardNumRow">
                        <div className="rewardNum">{item.stayDrawNum}</div>
                        <div className="TokenInfo"><img src={SBLToken} alt="" />{item.coinName}</div>
                    </div>
                    {
                        item.isReturn === 1 ? <>
                            <div className="BtnRow">
                                <div className="receiveNodeBtn flexCenter">領取</div>
                                <div className="returnBtn flexCenter">退还</div>
                            </div>
                        </>:<>
                            <div className="applyBtn flexCenter">領取</div>
                        </>
                    }
                   
                    <div className="NodeTips">
                        我的加速等級：{nodeAccelerate[MaxLevel]} <img  className={heavyLoad ? "imgRotate" :""} onClick={getMaxLevel} src={Refresh} alt="" />
                    </div>
                    <span className="record">獎勵機制 <img src={record} alt="" /></span>
                    <span className="record" onClick={()=>{ShowProfitFun(item.id)}}>收益記錄 <img src={record} alt="" /></span>
                </div>
                )
            }
        </div>
        {/* 铸币节点申请记录 */}
        <GoldRecord isShow={showApplyRecord} close={()=>{setshowApplyRecord(false)}}></GoldRecord>
        {/* 铸币节点收益记录 */}
        <GlodJdSy isShow={showProfit} id={ProfitId} close={()=>{setShowProfit(false)}}></GlodJdSy>
    </div>
  )
}
