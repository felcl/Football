import Token from './ABI/ERC20Token.json';
import IDO from './ABI/IDO.json';
export let baseUrl:string = 'http://120.25.153.148:8280';
interface abiObjType {
    [propName: string]: any;
}
interface contractAddressType {
    [propName: string]: string;
}
export const abiObj :abiObjType = { 
    "Token": Token,
    "IDO": IDO,
}
export const contractAddress :contractAddressType = {
    //正式
    // "Token": "0x55d398326f99059fF775485246999027B3197955",
    // "IDO":"0x08c8A0B32eE3EB7285aF9766F048d962B33daA04",
    //测试
    "Token": "0xdB8001f7133F5a317AAf43CAB0dD3EEDa2e275ca",
    "IDO":"0x27D4561C8474d288c637360bb017080F60840136",
  }