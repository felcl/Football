import dayjs from 'dayjs'
import store from "../store";
import {createAddMessageAction,createSetLodingAction} from '../store/actions'
import relativeTime from 'dayjs/plugin/relativeTime'
import BigNumber from 'big.js'
export function toThousands(num: string) {
    let numArr = num.split('.')
    if(numArr.length>1){
        return parseFloat(numArr[0]).toLocaleString()+'.'+numArr[1]
    }else{
        return parseFloat(numArr[0]).toLocaleString() 
    }
}
//用户地址处理方法
export function AddrHandle(addr:string,start=4,end=4) :string | undefined{
    if(!addr){return}
    let r = new RegExp('(.{'+start+'}).*(.{'+end+'})');
    let addrArr:RegExpMatchArray | null =addr.match(r)
    return addrArr![1]+'...'+addrArr![2]
}
export function HowLongAgo(time:number){
    dayjs.extend(relativeTime)
    var a = dayjs()
    return a.to(new Date(time))
}
export function GetQueryString(name:string){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}
export function JudgmentNumber(number:string){
    let numArr = number.split(".")
    if(numArr.length>1){
        return numArr[1].length>18
    }
    return false
}
export function NumSplic(val:string,len:number) {
    var f = parseFloat(val);
    if (isNaN(f)) {
        return false;
    }
    var s=val.toString();
    if(s.indexOf(".")>0){
        let f = s.split(".")[1].substring(0,len)
        s=s.split(".")[0]+"."+f
    }
    var rs = s.indexOf('.');
    if (rs < 0) {
        rs = s.length;
        s += '.';
    }
    while (s.length <= rs + len) {
        s += '0';
    }
    return s;
}
export function numberDivision(){
    
}
export function showLoding(isShow:boolean){
    store.dispatch(createSetLodingAction(isShow))
}
export function addMessage (msg:string){
    store.dispatch(createAddMessageAction({
        message:msg,
        index:store.getState().message.length
    }))
}
export function isApprove(price:number|string,Approve:string){
    return new BigNumber(Approve).gte(price)
}
// export function debounce(tarFun:Function, delay:number, immed:boolean) {
// 	let timer:number|null = null
// 	let immeBool = immed
// 	return function () {
//         let Arguments=arguments
// 		const _that = this
// 		if (timer) {
// 			clearTimeout(timer)
// 		}
// 		if (immeBool) {
// 			immeBool = false
// 			tarFun.apply(_that, arguments)
// 		} else {
// 			timer = window.setTimeout(() => {
// 				timer = null
// 				tarFun.apply(_that, Arguments)
// 			}, delay)
// 		}
// 	}
// }