import React, { useEffect , useState} from 'react';
import {Contracts} from '../web3'
import {useWeb3React} from '@web3-react/core'
import {CardInfoType} from './Card'
import {orderInfoType} from '../view/Swap'
import {addMessage,showLoding} from '../utils/tool'
import { Modal} from 'antd';
import {contractAddress} from '../config'
import BigNumber from 'big.js'
import '../assets/style/componentsStyle/carddetails.scss'

interface CardDetailPropsType{
  isShow:boolean,
  close:Function,
  type:string,
  CardInfo:CardInfoType,
  showCreateOrder?:Function
  showMerge?:Function
}
const cardClass=['','A','B','C','D']
/* type:Swap 交易场详情 CreateOrder 挂单详情 NFT 背包卡牌详情 */
 function CardDetails(props:CardDetailPropsType) {
  const web3React = useWeb3React()
  let [isApproved,setIsApproved] = useState(false)
  let [putPrice,setPutPrice] = useState('')
   function createOrder(){
     if(!web3React.account){
      addMessage("请链接钱包")
     }
     if(putPrice.length === 0){
        return addMessage('请输入正确价格')
     }
     let numSplit = putPrice.toString().split(".")
        if(numSplit.length === 2 && numSplit[1].length>4){
          return addMessage("请输入正确的精度")
        }
     if(new BigNumber(putPrice).lte(0)){
      return addMessage('请输入正确价格')
     }
     showLoding(true)
    Contracts.example.createOrder(web3React.account as string,props.CardInfo.tokenId,putPrice,'0x0000000000000000000000000000000000000000',contractAddress.NFT).then((res:any)=>{
      addMessage("创建订单成功")
      props.close()
    }).finally(()=>{
      showLoding(false)
    })
   }
   useEffect(()=>{
     if(web3React.account && props.type === "CreateOrder"){
      setPutPrice('')
       console.log("获取授权状态")
      Contracts.example.isApprovedForAll(web3React.account,contractAddress.EXChangeNFT).then((res:any)=>{
        setIsApproved(res)
        console.log(res,"授权状态")
      })
     }
   },[web3React.account,props.type])
   function Approval(){
    if(!web3React.account){
      addMessage("请链接钱包")
    }
    /* 判断卡牌等级 */
    Contracts.example.setApprovalForAll(web3React.account as string,contractAddress.EXChangeNFT,true).then(()=>{
      setIsApproved(true)
      addMessage("授权成功")
    })
   }
   function putNum(e:React.ChangeEvent<HTMLInputElement>){
    setPutPrice(e.target.value.replace(/[^\d.]/g, ""))
   }
  return (
    <>
    {/* <div className='box'>11111</div> */}
      <Modal title="Basic Modal" visible={props.isShow} 
      destroyOnClose
      onCancel={()=>props.close()}
      className='Card'
      centered
      width={'449px'}
      closable={ false }
      footer={null}
      >
          <p className='title'>卡牌详情</p>
          <div className='hzimg'>
              <img src={props.CardInfo.imageUrl} alt=""></img>
          </div>
          <p className='kpdetails'>卡牌名称:{props.CardInfo.cardName}</p>
          <p className='kpdetails'>卡牌ID:{props.CardInfo.tokenId}</p>
          <p className='kpdetails'>卡牌等级:{props.CardInfo.cardLevel}星</p>
          <p className='kpdetails'>卡牌类型:{cardClass[props.CardInfo.cardType]}</p>
          <p className='kpdetails'>卡牌介绍:{props.CardInfo.introduce}</p>
          {
            props.type === "CreateOrder" &&<p className='kpdetails'>请输入价格:<input type='text' value={putPrice} onChange={putNum}/>BNB</p>
          }
          {
            props.type === "NFT" && <div className='butm'>
                <button className='gm'><div onClick={()=>{props.showCreateOrder && props.showCreateOrder()}}>挂卖</div></button>
                <button className='hc' onClick={()=>{props.showMerge && props.showMerge()}}>合成</button>
                <button className='zy'>质押</button>
            </div>
          }
          {
            props.type === "CreateOrder" && <div className='butm'>
              {
                isApproved ? <>
                <button className='hc' onClick={createOrder}>确认</button>
                </>:<>
                <button className='hc' onClick={Approval}>授权</button>
                </>
              }
                
                
            </div>
          }
          <span>点击任意地方离开</span>
        </Modal>
    </>
  )
}
export default CardDetails