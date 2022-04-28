/*
 * @Author: cos
 * @Date: 2022-04-28 19:30:38
 * @LastEditTime: 2022-04-28 20:59:54
 * @LastEditors: cos
 * @Description:
 * @FilePath: \easy-mooc-maker\src\pages\worker\caption\OperationPane\index.tsx
 */
import React from 'react';
import './index.less';
import { Card, Table } from 'antd';
import { CopyOutlined, DeleteOutlined, FormOutlined, ToTopOutlined } from '@ant-design/icons';
const Toobar = () => {
  return (
    <div className="toolbar">
      <FormOutlined />
      <CopyOutlined />
      <ToTopOutlined />
      <DeleteOutlined />
    </div>
  );
};
const dataSource = [
  {
    key: 1,
    id: 1,
    time: '00:12-00:14',
    content: '同学们大家好',
    operations: <Toobar />,
  },
  {
    key: 2,
    id: 2,
    time: '00:14-00:18',
    content: '今天我们来学习操作系统',
    operations: <Toobar />,
  },
  {
    key: 3,
    id: 3,
    time: '00:18-00:23',
    content: '随着计算机技术的不断发展',
    operations: <Toobar />,
  },
  {
    key: 4,
    id: 4,
    time: '00:23-00:28',
    content: '个人计算机走进了千家万户',
    operations: <Toobar />,
  },
  {
    key: 5,
    id: 5,
    time: '00:28-00:32',
    content: '我们都知道每台计算机',
    operations: <Toobar />,
  },
  {
    key: 7,
    id: 7,
    time: '00:32-00:35',
    content: '都需要安装操作系统',
    operations: <Toobar />,
  },
  {
    key: 8,
    id: 8,
    time: '00:37-00:41',
    content: '我们日常生活中的智能手机',
    operations: <Toobar />,
  },
];

const columns = [
  {
    title: '序号',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '时间轴',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: '字幕内容',
    dataIndex: 'content',
    key: 'content',
  },
  {
    title: '操作',
    dataIndex: 'operations',
    key: 'operations',
  },
];
const OperationPane: React.FC = () => {
  return (
    <Card>
      <Table dataSource={dataSource} columns={columns} />
    </Card>
  );
};
export default OperationPane;
