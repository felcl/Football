import Token from './ABI/ERC20Token.json';
import BlindBox from './ABI/BlindBox.json';
// import IDO from './ABI/IDO.json';
import EXChangeNFT from './ABI/EXChangeNFT.json';
import Merge from './ABI/Merge.json';
import NFT from './ABI/NFT.json';
export let baseUrl:string = 'http://192.168.2.115:10000';
interface abiObjType {
    [propName: string]: any;
}
interface contractAddressType {
    [propName: string]: string;
}
export const abiObj :abiObjType = { 
    "Token": Token,
    // "IDO": IDO,
    "BlindBox": BlindBox,
    "NFT": NFT,
    "Merge": Merge,
    "EXChangeNFT": EXChangeNFT,
}
export const contractAddress :contractAddressType = {
    //正式
    // "Token": "0x55d398326f99059fF775485246999027B3197955",
    // "IDO":"0x08c8A0B32eE3EB7285aF9766F048d962B33daA04",
    //测试
    "Token": "0xdB8001f7133F5a317AAf43CAB0dD3EEDa2e275ca",
    "BlindBox": "0xE583dD3A525d8541C71963f6e48EA88BE1214701",
    "EXChangeNFT": "0x3d81D122A568CCde84dF3E65f9a6a4c158bb9e16",
    "NFT": "0x1B57103eD624bA5aBeA0E8Eeb02f616372C8AAbf",
    "Merge": "0x12f2C18b79bcB9309CDC65567907C4CbD39E1cA9"
  }