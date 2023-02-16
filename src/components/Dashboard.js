//import React, { useState } from "react";
import { Table} from "antd";

const columns = [
  {
    title: "Account Type",
    dataIndex: "type",
    key: "type"
  },
  {
    title: "Balance",
    dataIndex: "balance",
    key: "balance"
  }
];

const data = [
  {
    key: "1",
    type: "Checking",
    balance: "$1000"
  },
  {
    key: "2",
    type: "Savings",
    balance: "$5000"
  }
];

function Dashboard() {

  return (
    <Table
      dataSource={data}
      columns={columns.map((col) => {
        if (!col.editable) {
          return col;
        }
      })}
    />
  );
}

export default Dashboard;
