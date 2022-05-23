import React, { useEffect ,useState } from 'react';
import {getCardCompoundList , compoundCard} from '../API'
import {Contracts} from '../web3'
import {useWeb3React} from '@web3-react/core'
import {useSelector} from "react-redux";
import {stateType} from '../store/reducer'
import {CardInfoType} from './Card'
import {contractAddress} from '../config'
import { Modal, Pagination } from 'antd';
import {addMessage,showLoding} from '../utils/tool'
import RuleImg from '../assets/image/CardSynthesis.png'
import AddImg from '../assets/image/Union.png'
import DropDown from '../components/DropDown'
import Tips from '../components/Tips'
// 卡牌合成规则
import CardComRule from '../components/CardComRule'
import BigNumber from 'big.js'
interface CardSynthesisPropsType {
    CardInfo:CardInfoType,
    isShow: boolean,
    close:Function
    mergeSuccess:Function
}
interface SelCardType{
    list:CardInfoType [],
    price:number,
    size:number
}
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
function CardSynthesis(props: CardSynthesisPropsType) {
    const web3React = useWeb3React()
    let state = useSelector<stateType,stateType>(state => state);
    const [ToBeSelect,setToBeSelect] = useState<SelCardType | null>(null)
    const [isApproved,setIsApproved] = useState(false)
    const [SelCard,setSelCard] = useState<CardInfoType | null>(null)
    /* 确认合成弹窗控制 */
    let [showEnterMerge,setShowEnterMerge] = useState(false)
    /* 合成规则弹窗控制 */
    let [showMergeRule,setShowMergeRule] = useState(false)
    /* 类型筛选 */
    let [type,SetType] = useState(0)
    /* 分页 */
    let [page,SetPage] = useState(1)
    /* 总条数 */
    let [total,SetTotal] = useState(0)
    useEffect(()=>{
        if(web3React.account && state.token && props.isShow){
            setSelCard(null)
            getCardCompoundList({
                currentPage:page,
                level:props.CardInfo.cardLevel,
                type:type,
                pageSize:12,
                userAddress:web3React.account as string
            }).then(res=>{
                res.data.list = res.data.list.filter((item:CardInfoType)=>{
                    return item.tokenId !== props.CardInfo.tokenId
                })
                setToBeSelect(res.data)
                console.log(res,"获取可用卡牌")
                SetTotal(res.data.size)
            })
            Contracts.example.isApprovedForAll(web3React.account, contractAddress.Merge).then((res:boolean)=>{
                setIsApproved(res)
            })
        }
    },[web3React.account,state.token,type,props.isShow,page])
    function Approval(){
        if(!web3React.account){
          console.log("请链接钱包")
        }
        showLoding(true)
        /* 判断卡牌等级 */
        Contracts.example.setApprovalForAll(web3React.account as string,contractAddress.Merge,true).then(()=>{
          console.log("授权成功")
          setIsApproved(true)
        }).finally(()=>{
            showLoding(false)
        })
    }
    /* 合成 */
    async function mager(){
        setShowEnterMerge(false)
        if(!web3React.account){
            return addMessage("请链接钱包")
        }
        if(!SelCard){
            return addMessage("请选择要合成的卡牌")
        }
        let Balance = await Contracts.example.getBalance(web3React.account as string)
        Balance = new BigNumber(Balance).div(10 ** 18).toString()
        if(new BigNumber(Balance).lt(ToBeSelect?.price as number)){
        return addMessage("余额不足")
        }
        showLoding(true)
        compoundCard({
            cardId:props.CardInfo.id, 
            choiceCardId:SelCard.id
        }).then(resSign=>{
            console.log(resSign,"合成加密数据")
            Contracts.example.toSynthesis(web3React.account as string, resSign.data.sign,ToBeSelect?.price as number).then((res:any)=>{
                console.log(res,"合成结果")
                props.mergeSuccess(resSign.data.cardUser)
            }).finally(()=>{
                showLoding(false)
            })
        },()=>{
            showLoding(false)
        })
    }
    function changePage(pageNum:number){
        SetPage(pageNum)
    }
    return (
        <>
            {/* 确认合成 */}
            <Tips isShow={showEnterMerge} title="合成消耗" subTitle={"此次合成將消耗"+ToBeSelect?.price+"BNB"} enterFun={mager} close={()=>setShowEnterMerge(false)}></Tips>
            <CardComRule isShow={showMergeRule} close={()=>setShowMergeRule(false)}></CardComRule>
            <Modal visible={props.isShow}
                className='CardSynthesis'
                onCancel={()=>props.close()}
                centered
                maskClosable
                width={'1119px'}
                closable={false}
                footer={null}
            >
                <div className='Title'>卡牌合成</div>
                <div className='Handle'>
                    <div className="SynthesisHandle">
                        <div className="SynthesisItems">
                            <div className="CardItems">
                                {/* 三个150px水平排列 */}
                                <div className="CardItemsLeft"><img src={props.CardInfo && props.CardInfo.imageUrl} alt="" ></img>
                                </div>
                                <div className="Add"><img src={AddImg} alt="" /></div>
                                {
                                    SelCard ? <>
                                    <div className="CardItemsRight"><div className="CardImg"><img src={SelCard.imageUrl} alt="" /></div></div>
                                    </> : <>
                                    <div className="CardItemsRight"><div className="CardImg"></div></div>
                                    </>
                                }
                                
                            </div>
                            <div className="CardItem">
                                <div className="CardImg">
                                </div>
                                <div className="Decorate">
                                    <div className="Price">需要消耗：</div><div className='Number'>{ToBeSelect?.price}BNB</div>
                                </div>
                                {
                                    isApproved ? <button onClick={()=>{setShowEnterMerge(true)}}>開始合成</button> : <button onClick={Approval}>授权</button>
                                }

                                <div className='Tip'><div className='TipContent' onClick={()=>{setShowMergeRule(true)}}>卡牌合成規則</div><div className='TipImg'><img src={RuleImg} alt="" /></div></div>
                            </div>
                        </div>
                    </div>
                    <div className='SynthesisList'>
                        <div className="Category">
                        <DropDown Map={typeMap} change={SetType}></DropDown>
                            {/* 三个水平排列（保证布局一致） */}
                            <div className="Page">
                                <Pagination simple defaultCurrent={page} total={total} defaultPageSize={12} onChange={changePage} />
                            </div>
                        </div>
                        <div className="CardListBox">
                            {
                                ToBeSelect?.list.map((item,index)=><div className="SynthesisCardList" key={item.id} onClick={()=>{setSelCard(item)}}>
                                    <div className="Img">
                                        <img src={item.imageUrl} alt="" />
                                    </div>
                                    <div className="Id">ID：{item.tokenId}</div>
                                </div>)
                            }
                            
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}
export default CardSynthesis