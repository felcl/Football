import axois from '../utils/axiosExport'
interface LoginData{
    password:string;
    refereeUserAddress:string;
    userAddress:string;
    userPower:number;
}
export function Login(data:LoginData){
    return axois.request({
        url:'/eEggBase/openArmsCard',
        method:'post',
        data
    })
}