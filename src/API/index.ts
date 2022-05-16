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
    type:number,
    userAddress:string
}
/* 获取用户盲盒信息 */
export function getUserCard(data:getUserCardType){
    return axois.request({
        url:`/user/cCardUser/getCardUserInfo`,
        method:'post',
        data
    })
}