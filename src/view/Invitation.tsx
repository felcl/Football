import React, { useEffect } from 'react'
import {getUserReferee} from '../API'
import {useSelector , useDispatch} from "react-redux";
import {stateType} from '../store/reducer'
import {useWeb3React} from '@web3-react/core'
import {addMessage,AddrHandle} from '../utils/tool'
import copyIcon from '../assets/image/copyIcon.png'
import copy from 'copy-to-clipboard'; 
import '../assets/style/Invitation.scss'

export default function Invitation() {
    let state = useSelector<stateType,stateType>(state => state);
    const web3React = useWeb3React()
    useEffect(()=>{
        if(state.token){
            getUserReferee().then(res=>{
                console.log(res,"用户邀请列表")
            })
        }
    },[state.token])
    function invitation(){
        if(!web3React.account){
            return addMessage('请链接钱包')
        }else{
            copy(window.location.origin+window.location.pathname+'?address='+web3React.account)
            addMessage('复制成功')
        }
    }
  return (
    <div className="Edition-Center">
        <div className="SwapTitle">
        邀請
        </div>
        <div className="TabRow">
            <div className="TabItem linear-gradient">
            邀請
            </div>
            <div className="TabItem">
            家族土地
            </div>
        </div>
        <div className="InvitationLabel">
        發送您的邀請鏈接
        </div>
        <div className="InvitationRule">
        複製併使用此鏈接，邀請您的朋友加入Space Ball ，一起探索無限精彩的元宇宙世界。建立自己的Space Ball家族！
        </div>
        <div className="BoxBorder" style={{marginTop:10}}>
            <div className="InvitationAddr">
            <div className="boxLabel">推薦</div>
            <div className="userAddr">
                <div className="linkLabel">推薦鏈接</div>
                {
                    web3React.account && <div className="link">
                        <div className="linkAddr">{window.location.origin+window.location.pathname+'?address='+AddrHandle(web3React.account)}</div>
                        <div className="division"></div>
                        <img src={copyIcon} onClick={invitation} alt="" />
                    </div>
                }
                
            </div>
            </div>
        </div>
        <div className="BoxBorder" style={{marginTop:20}}>
            <div className="InvitationAddr">
                <div className="boxLabel">推薦 <div className="InvitationNum flexCenter">已邀請：20人</div></div>
                <ul className="InvitationList">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
        
    </div>
  )
}
