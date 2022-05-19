import React, { useEffect, useState } from 'react'
import {useSelector} from "react-redux";
import {stateType} from '../store/reducer'
import {useWeb3React} from '@web3-react/core'
import {getUserAccountList , userDrawAward} from '../API'
import {Contracts} from '../web3'
import AwardMechanism from './AwardMechanism'
import GainRecording from './GainRecording'
import BNBIcon from '../assets/image/BNBIcon.png'
import SBLToken from '../assets/image/SBLToken.png'
import Refresh from '../assets/image/Refresh.png'
import mechanism from '../assets/image/mechanism.png'
import record from '../assets/image/record.png'
import '../assets/style/componentsStyle/Reward.scss'
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
export default function Reward() {
    const web3React = useWeb3React()
    let state = useSelector<stateType,stateType>(state => state);
    let [rewardData,setRewardData] = useState<rewardDataType | null>(null)
    /* 邀请奖励机制弹窗控制 */
    let [ShowInvitationrewardMech,setShowInvitationrewardMech] = useState(false)
    /* 邀请奖励机制弹窗控制 */
    let [ShowRevenueRecord,setShowRevenueRecord] = useState(false)
    /* 奖励弹窗类型 */
    let [RevenueType,setRevenueType] = useState(0)
    useEffect(()=>{
        if(state.token){
            getUserAccountList().then(res=>{
                setRewardData(res.data)
                console.log(res,"用户奖励信息")
            })
        }
    },[state.token])
    function ShowRevenueRecordFun(type:number){
        console.log(type)
        setRevenueType(type)
        setShowRevenueRecord(true)
    }
    function Receive(type:number,id:number){
        if(!web3React.account){
            return console.log("请连接钱包")
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
                        <div className="receiveBtn linear-gradient flexCenter" onClick={()=>Receive(1,item.id)}>
                        領取
                        </div>
                    </div>)
                }
            <div className="RewardExplain">我的獎勵等級：享有3代獎勵 <img src={Refresh} alt="" /></div>
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
                    <div className="receiveBtn linear-gradient flexCenter">
                    領取
                    </div>
                </div>)
                }
                <div className="RewardExplain">我的獎勵等級：享有3代獎勵 <img src={Refresh} alt="" /></div>
                <span className="mechanism">獎勵機制 <img src={mechanism} alt="" /></span>
                <span className="record" onClick={()=>ShowRevenueRecordFun(2)}>收益記錄 <img src={mechanism} alt="" /></span>
            </div>
        }
        {/* 推荐奖励机制 */}
        <AwardMechanism isShow={ShowInvitationrewardMech} close={()=>setShowInvitationrewardMech(false)}></AwardMechanism>
        {/* 奖励记录 */}
        <GainRecording isShow={ShowRevenueRecord} type={RevenueType} close={()=>setShowRevenueRecord(false)}></GainRecording>
    </div>
  )
}
