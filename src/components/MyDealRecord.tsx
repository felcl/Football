// SBL/我的交易记录
import React,{useEffect , useState} from "react";
import { Modal, Table } from "antd";
import {getOrderStateList} from '../API'
import {useSelector} from "react-redux";
import {stateType} from '../store/reducer'
import "../assets/style/componentsStyle/MyDealRecord.scss";
const status=['上架','撤销','已售出']
const { Column } = Table;
interface propsType{
  isShow: boolean,
  close:Function
}
function MyDealRecord(props:propsType) {
  let state = useSelector<stateType,stateType>(state => state);
  let [tableData,setTableData] = useState([])
  useEffect(()=>{
    if(state.token && props.isShow){
      getOrderStateList().then(res=>{
        setTableData(res.data)
        console.log(res,"用户订单记录")
      })
    }
  },[state.token,props.isShow])
  
  return (
    <>
      <Modal
        visible={props.isShow}
        className="MyDealRecord"
        onCancel={()=>props.close()}
        centered
        width={"886px"}
        closable={false}
        footer={null}
      >
        <p className="title"> 交易記錄 </p>
        {/* <Table
          columns={columns}
          dataSource={data}
          scroll={{ y: 240 }}
        /> */}
        <Table
          dataSource={tableData}
          pagination={false}
          rowKey="id"
          scroll={{ y: 260 }}
        >
          <Column
            title="时间"
            width={140}
            render={(item) => (
              <>
                <div>{item.createTime}</div>
              </>
            )}
          />
          <Column
            title="ID"
            render={(item) => (
              <>
                <div>{item.orderId}</div>
              </>
            )}
          />
          <Column
            title="等級"
            render={(item) => (
              <>
                <div>{item.denji}</div>
              </>
            )}
          />
          <Column
            title="類型"
            render={(item) => (
              <>
                <div>{item.leixin}</div>
              </>
            )}
          />
          <Column
            title="類别"
            render={(item) => (
              <>
                <div>{item.leibie}</div>
              </>
            )}
          />
          <Column
            title="金額"
            width={140}
            render={(item) => (
              <>
                <div>{item.orderPrice}</div>
              </>
            )}
          />
          <Column
            align="center"
            title="状态"
            width={100}
            render={(item) => (
              <>
                <div>{status[item.status]}</div>
              </>
            )}
          />
        </Table>
        <span>点击任意地方离开</span>
      </Modal>
    </>
  );
}
export default MyDealRecord;
