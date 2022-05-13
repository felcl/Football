import React from 'react'
import BNBIcon from '../assets/image/BNBIcon.png'
import Refresh from '../assets/image/Refresh.png'
import mechanism from '../assets/image/mechanism.png'
import record from '../assets/image/record.png'
import '../assets/style/componentsStyle/Reward.scss'

export default function Reward() {
  return (
    <div>
        <div className="RewardLabel">
        推薦獎勵
        </div>
        <div className="RewardItem">
            <div className="RewardRow">
                <div className="RewardNum">
                    54.1455
                    <div className="TokenInfo">
                        <img src={BNBIcon} alt="" />
                        BNB
                    </div>
                </div>  
                <div className="receiveBtn linear-gradient">
                領取
                </div>
            </div>
            <div className="RewardRow">
                <div className="RewardNum">
                    54.1455
                    <div className="TokenInfo">
                        <img src={BNBIcon} alt="" />
                        BNB
                    </div>
                </div>  
                <div className="receiveBtn linear-gradient">
                領取
                </div>
            </div>
            <div className="RewardExplain">我的獎勵等級：享有3代獎勵 <img src={Refresh} alt="" /></div>
            <span className="mechanism">獎勵機制 <img src={mechanism} alt="" /></span>
            <span className="record">獎勵機制 <img src={record} alt="" /></span>
        </div>
        <div className="RewardLabel">
        團隊獎勵
        </div>
        <div className="RewardItem">
            <div className="RewardRow">
                <div className="RewardNum">
                    54.1455
                    <div className="TokenInfo">
                        <img src={BNBIcon} alt="" />
                        BNB
                    </div>
                </div>  
                <div className="receiveBtn linear-gradient">
                領取
                </div>
            </div>
            <div className="RewardRow">
                <div className="RewardNum">
                    54.1455
                    <div className="TokenInfo">
                        <img src={BNBIcon} alt="" />
                        BNB
                    </div>
                </div>  
                <div className="receiveBtn linear-gradient">
                領取
                </div>
            </div>
            <div className="RewardExplain">我的獎勵等級：享有3代獎勵 <img src={Refresh} alt="" /></div>
            <span className="mechanism">獎勵機制 <img src={mechanism} alt="" /></span>
            <span className="record">獎勵機制 <img src={mechanism} alt="" /></span>
        </div>
        
    </div>
  )
}
