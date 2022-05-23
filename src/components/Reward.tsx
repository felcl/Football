import React, { useEffect, useState } from 'react'
import {useSelector} from "react-redux";
import {stateType} from '../store/reducer'
import {useWeb3React} from '@web3-react/core'
import {getUserAccountList , userDrawAward , getCardUserMaxLevelInfo} from '../API'
import {Contracts} from '../web3'
import AwardMechanism from './AwardMechanism'
import GainRecording from './GainRecording'
import TeamMachine from '../components/TeamMachine'
import BNBIcon from '../assets/image/BNBIcon.png'
import SBLToken from '../assets/image/SBLToken.png'
import Refresh from '../assets/image/Refresh.png'
import mechanism from '../assets/image/mechanism.png'
import record from '../assets/image/record.png'
import '../assets/style/componentsStyle/Reward.scss'
import {addMessage,showLoding} from '../utils/tool'
import BigNumber from 'big.js'
interface refereeData{
    id: number,
    amount:number,
    coinName:string
}
interface rewardDataType{
    refereeList:refereeData[]
    teamList:refereeData[]
}
const tokenIcon:{[key:string]:string} = {
    SBL:SBLToken,
    BNB:BNBIcon
}
const recommend=['未達標獎勵標準','享有一星级10%推荐奖励','享有二星级6%推荐奖励']
const teamreward=['未達標獎勵標準','未達標獎勵標準','未達標獎勵標準','新增业绩3%，同级收入3%','新增业绩:6%，同级收入5%','新增业绩:9%，同级收入10%','新增业绩:12%，同级收入15%','新增业绩:15%，同级收入25%','新增业绩:15%，同级收入25%']
export default function Reward() {
    const web3React = useWeb3React()
    let state = useSelector<stateType,stateType>(state => state);
    let [rewardData,setRewardData] = useState<rewardDataType | null>(null)
    /* 邀请奖励机制弹窗控制 */
    let [ShowInvitationrewardMech,setShowInvitationrewardMech] = useState(false)
    /* 团队奖励机制弹窗控制 */
    let [showTeamMachine,setShowTeamMachine] = useState(false)
    /* 邀请奖励机制弹窗控制 */
    let [ShowRevenueRecord,setShowRevenueRecord] = useState(false)
    /* 奖励弹窗类型 */
    let [RevenueType,setRevenueType] = useState(0)
    /* 用户最高等级 */
    let [MaxLevel,setMaxLevel] = useState(0)
    let [heavyLoad,setHeavyLoad] = useState(false)
    let [teamHeavyLoad,setteamHeavyLoad] = useState(false)
    useEffect(()=>{
        if(state.token){
            getUserAccountList().then(res=>{
                setRewardData(res.data)
                console.log(res,"用户奖励信息")
            })
            getCardUserMaxLevelInfo().then(res=>{
                setMaxLevel(res.data)
            })
        }
    },[state.token])
    function ShowRevenueRecordFun(type:number){
        console.log(type)
        setRevenueType(type)
        setShowRevenueRecord(true)
    }
     function getMaxLevel(type:number){
         if(type === 0){
             setHeavyLoad(true)
             setTimeout(()=>{
                setHeavyLoad(false)
             },1000)
         }
         if(type === 1){
            setteamHeavyLoad(true)
            setTimeout(()=>{
                setteamHeavyLoad(false)
            },1000)
        }
         setTimeout(()=>{
            setHeavyLoad(false)
         },1000)
        getCardUserMaxLevelInfo().then(res=>{
            setMaxLevel(res.data)
            console.log(res,'用户卡牌最高等级')
        })
     }
    function Receive(type:number,id:number,amount:number){
        if(!web3React.account){
            return console.log("请连接钱包")
        }
        if(new BigNumber(amount).lte(0)){
            return addMessage("暂无可领取量")
        }
        userDrawAward({
            type,id
        }).then(res=>{
            Contracts.example.getAward(web3React.account as string,res.data,type).then((res:any)=>{
                console.log(res,"领取成功")
            })
            console.log("领取加密",res)
        })
    }
  return (
    <div>
        <div className="RewardLabel">
        推薦獎勵
        </div>
        {
            rewardData && <div className="RewardItem">
                {
                    rewardData.refereeList.map((item)=><div key={item.id} className="RewardRow">
                        <div className="RewardNum">
                            {item.amount}
                            <div className="TokenInfo">
                                <img src={tokenIcon[item.coinName]} alt="" />
                                {item.coinName}
                            </div>
                        </div>  
                        <div className="receiveBtn linear-gradient flexCenter" onClick={()=>Receive(1,item.id,item.amount)}>
                        領取
                        </div>
                    </div>)
                }
            <div className="RewardExplain">我的獎勵等級：{MaxLevel >=2 ? recommend[2]:recommend[MaxLevel]} <img src={Refresh} className={heavyLoad ? "imgRotate" :""} onClick={()=>{getMaxLevel(0)}} alt="" /></div>
            <span className="mechanism" onClick={()=>{setShowInvitationrewardMech(true)}}>獎勵機制 <img src={mechanism} alt="" /></span>
            <span className="record" onClick={()=>ShowRevenueRecordFun(1)}>收益記錄 <img src={record} alt="" /></span>
        </div>
        }
        
        <div className="RewardLabel">
        團隊獎勵
        </div>
        {
            rewardData && <div className="RewardItem">
                {
                    rewardData.teamList.map((item)=><div key={item.id} className="RewardRow">
                    <div className="RewardNum">
                        {item.amount}
                        <div className="TokenInfo">
                            <img src={tokenIcon[item.coinName]} alt="" />
                            {item.coinName}
                        </div>
                    </div>  
                    <div className="receiveBtn linear-gradient flexCenter"  onClick={()=>Receive(2,item.id,item.amount)}>
                    領取
                    </div>
                </div>)
                }
                <div className="RewardExplain">我的獎勵等級：{teamreward[MaxLevel]} <img src={Refresh} className={teamHeavyLoad ? "imgRotate" :""} onClick={()=>{getMaxLevel(1)}} alt="" /></div>
                <span className="mechanism" onClick={()=>{setShowTeamMachine(true)}}>獎勵機制 <img src={mechanism} alt="" /></span>
                <span className="record" onClick={()=>ShowRevenueRecordFun(2)}>收益記錄 <img src={mechanism} alt="" /></span>
            </div>
        }
        {/* 推荐奖励机制 */}
        <AwardMechanism isShow={ShowInvitationrewardMech} close={()=>setShowInvitationrewardMech(false)}></AwardMechanism>
              {/* 团队奖励机制 */}
        <TeamMachine isShow={showTeamMachine} close={()=>setShowTeamMachine(false)}></TeamMachine>
        {/* 奖励记录 */}
        <GainRecording isShow={ShowRevenueRecord} type={RevenueType} close={()=>setShowRevenueRecord(false)}></GainRecording>
    </div>
  )
}
