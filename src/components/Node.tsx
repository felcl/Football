import React , {useState , useEffect} from 'react'
import {Contracts} from '../web3'
import {useWeb3React} from '@web3-react/core'
import {useSelector} from "react-redux";
import {stateType} from '../store/reducer'
import {getNodeBase , buyNodeBase , getNodeUserList , getCardUserMaxLevelInfo} from '../API'
import GoldRecord from '../components/GoldRecord'
import record from '../assets/image/record.png'
import Refresh from '../assets/image/Refresh.png'
import SBLToken from '../assets/image/SBLToken.png'
import '../assets/style/componentsStyle/Node.scss'
import { contractAddress } from '../config'

interface NodeBase{
    id:number
    price:number,
    buyCoinName:string,
    awardNum:number,
    alreadyBuyNum:number,
    systemBuyNum:number,
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
    currentDay:number
    coinName:string
}
interface ApplyRecordType{
    id:number,
}
export default function Node() {
    const web3React = useWeb3React()
    let state = useSelector<stateType,stateType>(state => state);
    let [NodeBase,setNodeBase] = useState<NodeInfoType | null>(null)
    let [NodeRecord,setNodeRecord] = useState<NodeRecordType []>([])
    /* 铸币节点申请记录弹窗 */
    let [showApplyRecord,setshowApplyRecord] = useState(false)
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
                console.log(res,"用户最高等级卡牌")
            })
        }
    },[state.token])
    function approve(){
        if(web3React.account){
            Contracts.example.approve(web3React.account, contractAddress.Node).then(()=>{
                
            })
        }
    }
    function buyNode(){
        if(web3React.account && NodeBase){
            buyNodeBase({
                id:NodeBase.currentNodeBase.id,
                userAddress:web3React.account
            }).then(res=>{
                console.log(res,"购买节点加密")
                Contracts.example.buyNode(web3React.account as string,res.data,NodeBase!.currentNodeBase.price).then(()=>{
                
                })
            })
        }
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
                <div className="applyBtn flexCenter" onClick={buyNode}>申請節點</div>
                <div className="NodeTips">
                    下期節點申請：<br />
                    支付 <span className="important">{NodeBase.downNodeBase.price} BNB</span>  獲得 <span className="important">{NodeBase.downNodeBase.awardNum} SBL</span> 
                </div>
                <span className="record" onClick={()=>{setshowApplyRecord(true)}}>申請記錄 <img src={record} alt="" /></span>
            </div>
            }
            
        </div>
        <div className="RewardLabel">
        節點獎勵
        </div>
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
                    <div className="applyBtn flexCenter">領取</div>
                    <div className="NodeTips">
                        我的加速等級：享有一星級12%推薦獎勵<img src={Refresh} alt="" />
                    </div>
                    <span className="record">獎勵機制 <img src={record} alt="" /></span>
                </div>
                )
            }
        </div>
        {/* 铸币节点申请记录 */}
        <GoldRecord isShow={showApplyRecord}></GoldRecord>
    </div>
  )
}
