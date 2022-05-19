import axois from '../utils/axiosExport'
interface LoginData{
    password:string;
    refereeUserAddress:string;
    userAddress:string;
    userPower:number;
}

export function Login(data:LoginData){
    return axois.request({
        url:'/user/uUser/loginByPass',
        method:'post',
        data:{
            ...data,
            Encrypt:true
        }
    })
}
/* 获取盲盒基本配置 */
export function getBoxBase(){
    return axois.request({
        url:'/user/bBoxBase/getBoxBase',
        method:'get'
    })
}
interface buyBoxType{
    id:number
    userAddress:string
}
/* 购买盲盒加密 */
export function buyBox(data:buyBoxType){
    return axois.request({
        url:'/user/bBoxBase/buyBox',
        method:'post',
        data
    })
}
/* 开启盲盒 */
export function openBox(data:buyBoxType){
    return axois.request({
        url:'/user/bBoxUser/openBox',
        method:'post',
        data
    })
}
/* 获取用户盲盒信息 */
export function getBoxUserInfo(pageNumber:number,pageSize:number){
    return axois.request({
        url:`/user/bBoxUser/getBoxUserInfo/${pageNumber}/${pageSize}`,
        method:'get'
    })
}
interface getUserCardType{
    currentPage:number,
    level:number,
    pageSize:number,
    type?:number,
    userAddress:string
}
/* 获取用户卡牌信息 */
export function getUserCard(data:getUserCardType){
    return axois.request({
        url:`/user/cCardUser/getCardUserInfo`,
        method:'post',
        data
    })
}
interface compoundCardType{
    cardId:number,
    choiceCardId:number
}
/* 合成 */
export function compoundCard(data:compoundCardType){
    return axois.request({
        url:`/user/cCardUser/compoundCard`,
        method:'post',
        data
    })
}
/* 获取可合成卡牌 */
export function getCardCompoundList(data:getUserCardType){
    return axois.request({
        url:`/user/cCardUser/getCardCompoundList`,
        method:'post',
        data
    })
}
interface getUserOrderType{
    currentPage:number,
    level:number,
    pageSize:number,
    type?:number,
    userAddress?:string
}
/* 获取交易场列表 */
export function getOrderList(data:getUserOrderType){
    return axois.request({
        url:`/user/cCardOrder/getOrderList`,
        method:'post',
        data
    })
}
/* 获取用户邀请列表 */
export function getUserReferee(){
    return axois.request({
        url:`/user/uUser/getUserReferee`,
        method:'get',
    })
}
/* 获取用户订单记录 */
export function getOrderStateList(){
    return axois.request({
        url:`/user/cCardOrder/getOrderStateList`,
        method:'get',
    })
}
/* 获取节点配置 */
export function getNodeBase(){
    return axois.request({
        url:`/user/dNodeBase/getNodeBase`,
        method:'get',
    })
}
/* 购买节点加密数据 */
export function buyNodeBase(data:buyBoxType){
    return axois.request({
        url:`/user/dNodeBase/buyNodeBase`,
        method:'post',
        data:{
            ...data,
            Encrypt:true
        }
    })
}
/* 获取节点奖励记录 */
export function getNodeUserList(){
    return axois.request({
        url:`/user/dNodeBase/getNodeUserList`,
        method:'get'
    })
}
/* 获取用户最高等级 */
export function getCardUserMaxLevelInfo(){
    return axois.request({
        url:`/user/cCardUser/getCardUserMaxLevelInfo`,
        method:'get'
    })
}
/* 获取用户节点申请记录 */
export function getNodeUserBuyRecord(){
    return axois.request({
        url:`/user/dNodeBase/getNodeUserBuyRecord`,
        method:'get'
    })
}
/* 获取用户 */
export function getUserAccountList(){
    return axois.request({
        url:`/user/uUserAccount/getUserAccountList`,
        method:'get'
    })
}
/* 获取用户节点收益记录 */
export function getNodeEarnRecord(id: number){
    return axois.request({
        url:`/user/dNodeBase/getNodeEarnRecord/${id}`,
        method:'get'
    })
}
/* 获取收益记录 type:1推荐 2 团队 */
export function getUserAccountDetail(type: number){
    return axois.request({
        url:`/user/uUserAccount/getUserAccountDetail/${type}`,
        method:'get'
    })
}
interface DrawAwardType{
    type:number,
    id:number,
}
/* 用户领取收益 */
export function userDrawAward(data:DrawAwardType){
    console.log(data)
    return axois.request({
        url:`/user/uUserAccount/userDrawAward`,
        method:'post',
        data:{
            ...data,
            Encrypt:true
        }
    })
}