import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { ExpandableConfig } from "antd/lib/table/interface";
import React, { useState } from "react";
import { LinkButton } from "../../components";
import { ITimePoint } from "../../components/Timeline";

const defaultTimePoints: ITimePoint[] = [
  {
    title: "作者在网页上直接使用 ES 模块",
    subTitle: "作者在网页上直接使用 ES 模块",
    description:
      "作者在网页上直接使用 ES 模块，不经过任何打包工具，谈了自己的使用感受。最大的好处就是，用户运行的代码跟原始代码是一致的，省去了编译步骤，使得调试非常容易。",
    done: true,
  },
  {
    title: "作者在网页上直接使用 ES 模块",
    subTitle: "作者在网页上直接使用 ES 模块",
    description:
      "作者在网页上直接使用 ES 模块，不经过任何打包工具，谈了自己的使用感受。最大的好处就是，用户运行的代码跟原始代码是一致的，省去了编译步骤，使得调试非常容易。",
    done: false,
  },
  {
    title: "作者在网页上直接使用 ES 模块",
    subTitle: "作者在网页上直接使用 ES 模块",
    description:
      "作者在网页上直接使用 ES 模块，不经过任何打包工具，谈了自己的使用感受。最大的好处就是，用户运行的代码跟原始代码是一致的，省去了编译步骤，使得调试非常容易。",
    done: false,
  },
];

export default function Page2() {
  const [keys, setKeys] = useState<string[]>([]);

  const expandableObj: ExpandableConfig<IData> = {
    expandedRowKeys: keys,
    onExpand: (_expand: boolean, record: IData) => {
      console.log(record);

      if (keys.includes(record.name)) {
        const idx = keys.findIndex((v) => v === record.name);
        keys.splice(idx, 1);
        setKeys([...keys]);
      } else {
        setKeys([...keys, record.name]);
      }
    },
    expandedRowRender: (
      record: IData,
      idx: number,
      _: number,
      expand: boolean
    ) => {
      return <div>{expand ? "Fuck" : "You"}</div>;
    },
  };

  return (
    <div style={{ height: 800 }}>
      Page2
      <LinkButton to="/page1">Page1</LinkButton>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Span label="销售额" value={10000000000000000000} />
        <Span label="销售额" value={1000000} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Span label="销售额" value={1000000} />
        <Span label="销售额" value={10000000000000000000} />
      </div>
      <Table
        dataSource={mockData(100)}
        columns={getColumns()}
        rowKey="name"
        expandable={expandableObj}
      />
    </div>
  );
}

function mockData(count: number): IData[] {
  const res = [];
  for (let index = 0; index < count; index++) {
    res.push({
      name: `Jack No.${index}`,
      age: index + 20,
      height: `${index + 60 * 3}cm`,
      weight: `${index + 20 * 3}kg`,
    } as IData);
  }
  return res;
}

interface IData {
  name: string;
  age: number;
  height: string;
  weight: string;
}

function getColumns(): ColumnsType<IData> {
  return [
    { title: "姓名", dataIndex: "name" },
    { title: "年龄", dataIndex: "age" },
    { title: "身高", dataIndex: "height" },
    { title: "体重", dataIndex: "weight" },
  ];
}

interface ISpanProps {
  label: string;
  value: any;
}

function Span({ label, value }: ISpanProps) {
  return (
    <div style={{ padding: 16, border: "1px solid red", textAlign: "left" }}>
      <span style={{ color: "gray", border: "1px solid blue" }}>{label}:</span>
      <span
        style={{ color: "#000", marginLeft: 14, border: "1px solid yellow" }}
      >
        {value}
      </span>
    </div>
  );
}
