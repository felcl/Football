//金币节点 收益记录
import React , {useEffect , useState} from "react";
import { Modal, Table } from "antd";
import {useSelector} from "react-redux";
import {stateType} from '../store/reducer'
import {getNodeEarnRecord} from '../API'
import "../assets/style/componentsStyle/GlodJdSy.scss";
const { Column } = Table;
interface propsType{
  isShow:boolean,
  id:number,
  close:Function
}
const type = ['' , '奖励领取' , '奖励发放' , '节点返还']
function GlodJdSy(props:propsType) {
  let state = useSelector<stateType,stateType>(state => state);
  let [tableData , setTableData] = useState([])
  useEffect(()=>{
    if(state.token && props.id!==-1){
      getNodeEarnRecord(props.id).then(res=>{
        setTableData(res.data)
        console.log(res,"奖励记录");
      })
    }
  },[state.token,props.id])

  return (
    <>
      <Modal
        visible={props.isShow}
        className="GlodJdSy"
        centered
        onCancel={()=>props.close()}
        width={"525px"}
        closable={false}
        footer={null}
      >
        <p className="title"> 收益記錄 </p>
        <Table
          dataSource={tableData}
          pagination={false}
          rowKey="id"
          scroll={{ y: 260 }}
        >
          <Column
            title="時間"
            width={140}
            render={(item) => (
              <>
                <div>{item.createTime}</div>
              </>
            )}
          />
          <Column
            title="金額"
            render={(item) => (
              <>
                <div>{item.amount}</div>
              </>
            )}
          />
          <Column
            title="類型"
            render={(item) => (
              <>
                <div>{type[item.type]}</div>
              </>
            )}
          />
        </Table>
        <span>点击任意地方离开</span>
      </Modal>
    </>
  );
}
export default GlodJdSy;
