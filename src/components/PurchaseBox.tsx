import React, { useState } from 'react';
import { Modal } from 'antd';
interface PurchasePropsType {
    isShow: boolean
}
function PurchaseBox(props: PurchasePropsType) {
    return (
        <>
            <Modal visible={props.isShow}
                className='PurchaseModal'
                centered
                maskClosable
                width={'449px'}
                closable={false}
                footer={null}
            >
                <div className='Title'>購買成功!</div>
                <div className='Tip'>確認購買該盲盒？此次購買消耗0.5BNB</div>
                <div className='Handle'>
                    <div className="Button">
                        <button className='Save'>放入庫存</button>
                    </div>
                    <div className='Button'>   
                        <button className='Open'>立即開啓</button></div> 
                </div>
            </Modal>
        </>
    )
}
export default PurchaseBox
