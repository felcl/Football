// SBL/我的交易记录
import React from "react";
import { Modal, Table } from "antd";
import "../assets/style/componentsStyle/MyDealRecord.scss";
const { Column } = Table;
function MyDealRecord() {
  const columns = [
    {
      title: "时间",
      dataIndex: "name",
      width: 180,
    },
    {
      title: "ID",
      dataIndex: "ID",
      // width: 90,
    },
    {
      title: "等级",
      dataIndex: "denji",
      // width: 90,
    },
    {
      title: "类型",
      dataIndex: "leixin",
      // width: 80,
    },
    {
      title: "类别",
      dataIndex: "leibie",
      // width: 80,
    },
    {
      title: "金额",
      dataIndex: "jiner",
      width: 180,
    },
    {
      title: "状态",
      dataIndex: "zhuangtai",
      // width: 80,
    },
  ];
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `2022/05/06 11:40`,
      ID: "456987",
      denji: "良品",
      leixin: "类型A",
      leibie: "出售",
      jiner: "2,352445,4756",
      zhuangtai: `成功`,
    });
  }
  return (
    <>
      <Modal
        visible={true}
        className="MyDealRecord"
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
          dataSource={data}
          pagination={false}
          rowKey="id"
          scroll={{ y: 260 }}
        >
          <Column
            title="时间"
            width={140}
            render={(item) => (
              <>
                <div>{item.name}</div>
              </>
            )}
          />
          <Column
            title="ID"
            render={(item) => (
              <>
                <div>{item.ID}</div>
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
                <div>{item.jiner}</div>
              </>
            )}
          />
          <Column
            align="center"
            title="状态"
            width={100}
            render={(item) => (
              <>
                <div>{item.zhuangtai}</div>
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
