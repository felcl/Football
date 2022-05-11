import './App.css';
import {useSelector} from "react-redux";
import styled from 'styled-components';
import Routers from './router'
// import web3 from 'web3';
import {stateType} from './store/reducer'
// import {createAddMessageAction,createLoginSuccessAction} from './store/actions'
// import {Login} from './API'
import { useConnectWallet } from './web3'
import Loding from './components/loding'
// import { useNavigate } from "react-router-dom";
// import Home from './view/Home';

const Message=styled.span`
  color: #fff;
  text-align: center;
  background:#B8B8B8;
  padding: 5px 12px;
  border-radius: 5px;
`
const MessageRow=styled.div`
  height: 50px;
`
const MessageBox = styled.div`
  width: 100%;
  position:fixed;
  z-index: 999;
  top: 50px;
  text-align: center;
  
`
// function GetQueryString(name:string): string | null{
//   var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
//   var r = window.location.search.substr(1).match(reg);
//   if(r!=null)return  unescape(r[2]); return null;
// }
function App() {
  // const navigate = useNavigate();
  // useEffect(()=>{
  //   console.log('初始地址')
  //   navigate('/Layout')
  // },[])
  // const dispatch = useDispatch();
  let state = useSelector<stateType,stateType>(state => state);
  // useEffect(()=>{
  //   let address = GetQueryString('address')
  //   if(address!=null){
  //     window.localStorage.setItem('address', address);
  //   }
  // },[])
  useConnectWallet()
  // function addMessage (){
  //   dispatch(createAddMessageAction({ 
  //     message:'添加提醒',
  //     index:state.message.length
  //   }))
  // }
  // function LoginFun(){
  //   dispatch(createLoginSuccessAction('token','0x1B91dEf0997Ce8998898EC1f953da860fFaA346a'))
  //   Login({
  //     password:"123",
  //     refereeUserAddress:'',
  //     userAddress:'0x1B91dEf0997Ce8998898EC1f953da860fFaA346a',
  //     userPower:0
  //   }).then(res=>{
  //     console.log(res,'登录结果');
  //   })
  // }
  return (
    <div className="App">
      {/* {state.address}
      <button onClick={addMessage}>添加提示</button>
      <button onClick={LoginFun}>登录接口调试</button>
      {
        state.message.map((item,index)=><Message key={index}>{item.message}</Message>)
      }
      {state.address}
      {state.token} */}
      
      <MessageBox>
        {
          state.message.map((item,index)=><MessageRow key={index}><Message>{item.message}</Message></MessageRow>)
        }
      </MessageBox>
      <Routers></Routers>
      { state.showLoding && <Loding></Loding>}
    </div>
  );
}

export default App;
