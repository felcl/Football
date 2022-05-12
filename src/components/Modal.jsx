import React,{useState} from 'react'
import { Modal, Button } from 'antd';
export default ()=> {
    const [isModalVisible, setIsModalVisible] = useState(false);
  return (<>
    <Button type="primary" onClick={()=>setIsModalVisible(true)}>
      Open Modal
    </Button>
    <Modal className='raceBoxMedal' width={646} style={{width:'646px',height:'393px',borderRadius:'19px'}} title="Basic Modal" visible={isModalVisible} onCancel={() => setIsModalVisible(false)}
     footer={[
      <Button style={{ background: 'linear-gradient(90deg, #4EADF5 0%, #DB2DCF 100%)',borderRadius:'6px' }} onClick={()=>setIsModalVisible(false)}>
        确认
      </Button>,
    ]}
    >
      
    </Modal>
  </>
  )
}
