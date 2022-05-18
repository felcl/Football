// 捐赠奖励，收益记录
import React from "react";
import { Modal, Table } from "antd";
import "../assets/style/componentsStyle/DonationRecord.scss";
const { Column } = Table;
function DonationRecord() {
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
  ];
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `2022/05/06 11:40`,
      ID: "456987",
      denji: "10.4156",
    });
  }
  return (
    <>
      <Modal
        visible={false}
        className="DonationRecord"
        centered
        width={"525px"}
        closable={false}
        footer={null}
      >
        <p className="title"> 收益記錄 </p>
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
        </Table>
        <span>点击任意地方离开</span>
      </Modal>
    </>
  );
}
export default DonationRecord;
