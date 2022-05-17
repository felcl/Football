import React, { useState } from 'react';
import { Modal } from 'antd';
import '../assets/style/PurchaseBox.scss'
interface PurchasePropsType {
    isShow: boolean,
    close:Function
}
function PurchaseBox(props: PurchasePropsType) {
    return (
        <>
            <Modal visible={props.isShow}
                className='PurchaseModal'
                centered
                onCancel={()=>props.close()}
                maskClosable
                width={'449px'}
                closable={false}
                footer={null}
            >
                <div className='Title'>購買成功!</div>
                <div className='Tip'>您可選擇立即開啓或放入NFT-庫存中。</div>
                <div className='Handle'>
                    <div className='Button'>   
                        <button className='Open' onClick={()=>props.close()}>放入庫存</button>
                    </div> 
                </div>
            </Modal>
        </>
    )
}
export default PurchaseBox
