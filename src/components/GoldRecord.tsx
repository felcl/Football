//金币节点 申请记录
import React , {useEffect , useState} from "react";
import { Modal, Table } from "antd";
import {getNodeUserBuyRecord} from '../API'
import {useSelector} from "react-redux";
import {stateType} from '../store/reducer'
import '../assets/style/componentsStyle/GoldRecord.scss'

  
const { Column } = Table;
interface propsType{
  isShow:boolean
}
interface applyRecord{
  createTime:number,
  applyPrice:number,
  coinName:string
}
function GoldRecord(props:propsType) {
  let state = useSelector<stateType,stateType>(state => state);
  let [BuyRecord,setBuyRecord] = useState([])
  useEffect(()=>{
    if(state.token && props.isShow){
      getNodeUserBuyRecord().then(res=>{
        setBuyRecord(res.data)
        console.log(res,"获取用户申请记录")
      })
    }
  },[state.token , props.isShow])
  return (
    <>
      <Modal
        visible={props.isShow}
        className="GoldRecord"
        centered
        width={"525px"}
        closable={false}
        footer={null}
      >
        <p className="title"> 申請記錄 </p>
        <Table
          dataSource={BuyRecord}
          pagination={false}
          rowKey="id"
          // style={{overflowY:'auto',maxHeight:260}}
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
            title="申請金額BNB"
            render={(item) => (
              <>
                <div>{item.applyPrice}</div>
              </>
            )}
          />
          <Column
            title="獎勵金額SBL"
            render={(item) => (
              <>
                <div>{item.awardNum}</div>
              </>
            )}
          />
        </Table>
        <span>点击任意地方离开</span>
      </Modal>
    </>
  );
}
export default GoldRecord;
