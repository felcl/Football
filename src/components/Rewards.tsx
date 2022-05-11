import { useEffect ,useState} from 'react';
import styled from 'styled-components';
import {useSelector,useDispatch} from "react-redux";
import {stateType} from '../store/reducer'
import {createSetLodingAction , createAddMessageAction} from '../store/actions'
import {Contracts} from '../web3'
import { useWeb3React } from '@web3-react/core'
import BigNumber from 'big.js'
BigNumber.NE = -18
BigNumber.PE = 18
function AddrHandle(addr:string,start=4,end=4){
    if(!addr){return}
    let r = new RegExp('(.{'+start+'}).*(.{'+end+'})');
    let addrArr =addr.match(r)
    return addrArr![1]+'...'+addrArr![2]
}
const RewardsMode = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background:rgba(0,0,0,0.6);
`
const RewardsContainer = styled.div`
    background: #FFFFFF;
    border-radius: 29px;
    width: 708px;
    max-width:95%;
    height: 610px;
    position: relative;
    display: flex;
    flex-direction: column;
    @media (max-width: 376px) {
        max-width: 85%;
        height: 500px;
    }
`
const LabelRow = styled.div`
    display: flex;
    justify-content:space-between;
    margin: 20px 30px 0 43px;
    & span{
        font-size: 22px;
        line-height: 33px;
        color: #000000;
    }
`
const RewardsRow = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
    border-bottom: 2px solid #F0F0F0;
    height: 75px;
    margin: 0 30px 0 43px;
    line-height: 39px;
    color: #000000;
    & span{
        font-size: 26px;
    }
    @media (max-width: 376px) {
        & span{
            font-size: 18px;
        }
    }

`
const RewardsTitle = styled.div`
    font-size: 36px;
    line-height: 54px;
    color: #000000;
    margin-top: 20px;
    text-align: center;
    @media (max-width: 600px) {
        font-size: 26px;
        line-height: 30px;
    }
`
const Award =styled.div`
    padding: 0 34px 20px 43px;
    width:100%;
    display: flex;
    height: 70px;
    position: absolute;
    bottom:0;
    box-sizing: border-box;
    @media (max-width: 600px) {
        padding: 0px 10px 20px 10px;
        flex-direction: column;
        height: 115px;
    }
`
const AwardTotal =styled.div`
    background: #FFFFFF;
    border: 2px solid #5B7AF4;
    box-sizing: border-box;
    border-radius: 10px;
    margin-right: 34px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content:center;
    @media (max-width: 600px) {
        margin: 0 0 12px 0;
    }
`
const AwardLable = styled.div`
    font-size: 26px;
    line-height: 39px;
    color: #000000;
    @media (max-width: 600px) {
        font-size: 16px;
    }
`
const AwardNum = styled.div`
    display: flex;
    font-size: 20px;
    line-height: 39px;
    color: #5B7AF4;
    
`
const Company = styled.div`
    line-height: 1.2;
    font-size: 12px;
    color: #5B7AF4;
    align-self:flex-end;
    margin-bottom: 6px;
    margin-left: 10px;
    @media (max-width: 600px) {
        margin-bottom: 10px;
    }
`
const Harvest = styled.div`
    flex: 1;
    background: #5B7AF4;
    border-radius: 10px;
    font-size: 22px;
    line-height: 33px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    @media (max-width: 600px) {
        font-size: 20px;
    }
`
const NoData = styled.div`
    text-align: center;
    font-size: 18px;
    @media (max-width: 600px) {
        font-size: 14px;
    }
`
const ContainerList = styled.div`
    flex: 1;
    margin-bottom:115px;
    overflow-y: auto;
`
interface RewardsProps{
    close:Function;
}
export default  function Rewards(props: RewardsProps) {
    const web3React = useWeb3React()
    const dispatch = useDispatch();
    let state = useSelector<stateType,stateType>(state => state);
    let [rewardsArr , setRewardsArr] = useState([])
    let [totalRewards , setTotalRewards] = useState('0')
    let [isReceive , setIsReceive] = useState(false)
    useEffect(()=>{
        // let totalRewards:BigNumber = new BigNumber('0')
        Contracts.example.getUserRefereeByAddress(web3React.account as string).then((res: any)=>{
            setRewardsArr(res.map((item:any)=>{
                let tokenReward = new BigNumber(item.tokenReward).div(10 ** 18).toString()
                // totalRewards = totalRewards.plus(tokenReward)
                return {
                    ...item,
                    tokenReward
                }
            }))
            // setTotalRewards(totalRewards.toString())
          })
          Contracts.example.refereeTotalMapping(web3React.account as string).then((res: any)=>{
            setTotalRewards(new BigNumber(res).div(10 ** 18).toString())
            // console.log(res,"查询可领取收益")
          })
          Contracts.example.refereeOpenDraw(web3React.account as string).then((res: any)=>{
            setIsReceive(res)
            // console.log(res,"是否可领取推荐收益")
          })
          
    // eslint-disable-next-line 
    },[web3React.account])
    async function HarvestFun(){
        if(!isReceive){
            let isOpen = await Contracts.example.refereeOpenDraw(web3React.account as string)
            setIsReceive(isOpen)
            if(!isOpen){
                return addMessage('Open block not reached')
            }
        }
        if(new BigNumber(totalRewards).lte(0)){
            return addMessage('No collectable quantity')
        }
        dispatch(createSetLodingAction(true))
        Contracts.example.userDrawRefereeToken(web3React.account as string).then((res: any)=>{
            // props.close()
            Contracts.example.refereeTotalMapping(web3React.account as string).then((res: any)=>{
                setTotalRewards(new BigNumber(res).div(10 ** 18).toString())
            })
            addMessage("Received successfully")
          }).finally(()=>{
            dispatch(createSetLodingAction(false))
          })
    }
    function addMessage (message:string){
        dispatch(createAddMessageAction({ 
          message,
          index:state.message.length
        }))
      }
  return (
    <RewardsMode onClick={()=>{props.close()}}>
        <RewardsContainer  onClick={e=>e.stopPropagation()}>
            <RewardsTitle>Rewards</RewardsTitle>
            <LabelRow>
                <span>ID</span>
                <span>Result</span>
            </LabelRow>
            <ContainerList>
                {
                    rewardsArr.map((item,index)=>(
                        <RewardsRow key={index}>
                            <span>{AddrHandle(item['userAddress'])}</span>
                            <span>{item['tokenReward']}</span>
                        </RewardsRow> 
                    ))
                }
                {
                    rewardsArr.length ===0 && <NoData>
                        No invitation data
                    </NoData>
                }
            </ContainerList>
            <Award>
                <AwardTotal>
                    <AwardLable>Award：</AwardLable>
                    <AwardNum>{totalRewards}<Company>MAIL</Company></AwardNum>
                </AwardTotal>
                <Harvest onClick={HarvestFun}>Harvest</Harvest>
            </Award>
        </RewardsContainer>
    </RewardsMode>
  )
}
