//推荐 收益记录
import React, { useEffect , useState} from "react";
import {useSelector} from "react-redux";
import {stateType} from '../store/reducer'
import { Modal, Table } from "antd";
import {getUserAccountDetail} from '../API'
import "../assets/style/componentsStyle/GainRecording.scss";
const { Column } = Table;
interface propsType{
  isShow:boolean,
  type:number,
  close:Function
}
const type = ['' , '推荐购买' , '合成卡牌' , '收益领取']
function GainRecording(props:propsType) {
  let state = useSelector<stateType,stateType>(state => state);
  let [recordData,setrecordData] = useState([])
  useEffect(()=>{
    if(state.token && props.type){
      getUserAccountDetail(props.type).then(res=>{
        setrecordData(res.data)
        console.log(res,"奖励收益记录")
      })
    }
  },[state.token,props.type])

  return (
    <>
      <Modal
        visible={props.isShow}
        className="GainRecording"
        onCancel={()=>props.close()}
        centered
        width={"525px"}
        closable={false}
        footer={null}
      >
        <p className="title"> 收益記錄 </p>
        <Table
          dataSource={recordData}
          pagination={false}
          rowKey="id"
          scroll={{ y: 260 ,x:'max-content'}}
        >
          <Column
            title="时间"
            // width={140}
            render={(item) => (
              <>
                <div className="nowrap">{item.createTime}</div>
              </>
            )}
          />
          <Column
            title="金額 SBL"
            width={80}
            render={(item) => (
              <>
                <div className="nowrap">{item.amount}</div>
              </>
            )}
          />
          <Column
            title="類型"
            render={(item) => (
              <>
                <div className="nowrap">{type[item.type]}</div>
              </>
            )}
          />
        </Table>
        <span>点击任意地方离开</span>
      </Modal>
    </>
  );
}
export default GainRecording;
