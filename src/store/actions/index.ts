export const SETADDRESS = "SETADDRESS"


export const LOGINSUCCESS = "LOGINSUCCESS"
//登录成功接口
export interface loginSuccess {
    type:typeof LOGINSUCCESS
    value: {
        address:string;
        token: string;
    }
}
//创建登录成功Action
export const createLoginSuccessAction = (token:string,address:string): loginSuccess => ({
    type: LOGINSUCCESS,
    value:{
        address,
        token
    }
})

//添加全局提醒
export const ADDMESSAGE = "ADDMESSAGE"
export const BEFOREADDMESSAGE = "BEFOREADDMESSAGE"

export interface message {
    message:string,
    index:number
}
export interface beforeAddMessage {
    type:typeof BEFOREADDMESSAGE
    value: message
}
export interface addMessage {
    type:typeof ADDMESSAGE
    value: message
}
//创建全局提醒Action
export const createAddMessageAction = (message:message): beforeAddMessage => ({
    type: BEFOREADDMESSAGE,
    value:message
})

//删除全局提醒
export const DELMESSAGE = "DELMESSAGE"
export interface delMessage {
    type:typeof DELMESSAGE
    value: number
}
//创建删除全局提醒Action
export const createDelMessageAction = (index:number): delMessage => ({
    type: DELMESSAGE,
    value: index
})
//是否显示LODING
export const SETLODING = "SETLODING"
export interface setLodingAction {
    type:typeof SETLODING
    value: Boolean
}
//创建删除全局提醒Action
export const createSetLodingAction = (showLoding:Boolean): setLodingAction => ({
    type: SETLODING,
    value: showLoding
})
//reducer参数汇总
export type reducerParameterType = loginSuccess | beforeAddMessage | addMessage | delMessage | setLodingAction
