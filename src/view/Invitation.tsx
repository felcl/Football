import React from 'react'
import copyIcon from '../assets/image/copyIcon.png'
import '../assets/style/Invitation.scss'

export default function Invitation() {
  return (
    <div className="Edition-Center">
        <div className="SwapTitle">
        邀請
        </div>
        <div className="TabRow">
            <div className="TabItem linear-gradient">
            邀請
            </div>
            <div className="invalid linear-gradient">
            邀請
            </div>
        </div>
        <div className="InvitationLabel">
        發送您的邀請鏈接
        </div>
        <div className="InvitationRule">
        複製併使用此鏈接，邀請您的朋友加入Space Ball ，一起探索無限精彩的元宇宙世界。建立自己的Space Ball家族！
        </div>
        <div className="BoxBorder">
            <div className="InvitationAddr">
            <div className="boxLabel">推薦</div>
            <div className="userAddr">
                <div className="linkLabel">推薦鏈接</div>
                <div className="link">
                    <div className="linkAddr">https://bnb...c7****70</div>
                    <div className="division"></div>
                    <img src={copyIcon} alt="" />
                </div>
            </div>
            </div>
        </div>
        <div className="BoxBorder">
            <div className="InvitationAddr">
                <div className="boxLabel">推薦 <div className="InvitationNum flexCenter">已邀請：20人</div></div>
                <ul className="InvitationList">
                    <li></li>
                </ul>
            </div>
        </div>
        
    </div>
  )
}
