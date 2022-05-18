//金币节点 申请记录
import React , {useEffect , useState} from "react";
import { Modal, Table } from "antd";
import {getNodeUserBuyRecord} from '../API'
import {useSelector} from "react-redux";
import {stateType} from '../store/reducer'
import '../assets/style/componentsStyle/GoldRecord.scss'

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
  useEffect(()=>{
    if(state.token && props.isShow){
      getNodeUserBuyRecord().then(res=>{
        console.log(res,"获取用户申请记录")
      })
    }
  },[state.token , props.isShow])
  const columns = [
    {
      title: "时间",
      dataIndex: "name",
    },
    {
      title: "申請金額BNB",
      dataIndex: "age",
    },
    {
      title: "獎勵金額SBL",
      dataIndex: "address",
    },
  ];
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `2022/05/06 11:40`,
      age: "2,352445,4756",
      address: `推荐购买`,
    });
  }
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
        <p className="title">申请记录</p>
        <Table
          columns={columns}
          dataSource={data}
          //   bordered={false}
          //   pagination={{ pageSize: 50 }}
          scroll={{ y: 240 }}
        />
        <span>点击任意地方离开</span>
      </Modal>
    </>
  );
}
export default GoldRecord;
