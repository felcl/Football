import React from 'react'
import record from '../assets/image/record.png'
import Refresh from '../assets/image/Refresh.png'
import SBLToken from '../assets/image/SBLToken.png'
import '../assets/style/componentsStyle/Node.scss'

export default function Node() {
  return (
    <div>
        <div className="RewardLabel">
        節點申請
        </div>
        <div className="RewardItem">
            <div className="NodeTips">
                當前節點申請：<br />
                支付 5 BNB 獲得 12,564,458 SBL
            </div>
            <div className="progressRow">
                <div className="progressLabel">
                進程：
                </div>
                <div className="progress">
                    <div className="progressValue"></div>
                </div>
            </div>
            <div className="applyBtn flexCenter">申請節點</div>
            <div className="NodeTips">
                下期節點申請：<br />
                支付 <span className="important">5 BNB</span>  獲得 <span className="important">12,564,458 SBL</span> 
            </div>
            <span className="record">獎勵機制 <img src={record} alt="" /></span>
        </div>
        <div className="RewardLabel">
        節點獎勵
        </div>
        <div className="RewardItem">
            <div className="NodeTips">
                獎勵總金額：<span className="important">563.4568 SBL</span>
            </div>
            <div className="NodeTips">
                待加速金額：<span className="important">0 SBL</span>
            </div>
            <div className="progressRow">
                <div className="progressLabel">
                進程：
                </div>
                <div className="progress">
                    <div className="progressValue"></div>
                </div>
                <div className="progressInrt">（97D）</div>
            </div>
            <div className="rewardNumRow">
                <div className="rewardNum">454,554.1234</div>
                <div className="TokenInfo"><img src={SBLToken} alt="" />SBL</div>
            </div>
            <div className="applyBtn flexCenter">申請節點</div>
            <div className="NodeTips">
                我的加速等級：享有一星級12%推薦獎勵<img src={Refresh} alt="" />
            </div>
            <span className="record">獎勵機制 <img src={record} alt="" /></span>
        </div>
    </div>
  )
}
