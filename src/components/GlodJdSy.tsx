//金币节点 收益记录
import React from "react";
import { Modal, Table } from "antd";
import '../assets/style/componentsStyle/GlodJdSy.scss'

function GlodJdSy() {
  const columns = [
    {
      title: "时间",
      dataIndex: "name",
      width: 180,
    },
    {
      title: "金额SBL",
      dataIndex: "age",
      width: 160,
    },
    {
      title: "类型",
      dataIndex: "address",
      while: 160,
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
        visible={false}
        className="GlodJdSy"
        centered
        width={"525px"}
        closable={false}
        footer={null}
      >
        <p className="title">收益记录</p>
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
export default GlodJdSy;
