/*
 * @Author: cos
 * @Date: 2022-04-28 17:45:01
 * @LastEditTime: 2022-04-28 22:00:41
 * @LastEditors: cos
 * @Description:
 * @FilePath: \easy-mooc-maker\src\pages\worker\caption\index.tsx
 */
import React from 'react';
import { history } from 'umi';
import Title from '@/components/Title';
import './index.less';
import { LeftOutlined } from '@ant-design/icons';
import { Space, Layout } from 'antd';
import OperationPane from './OperationPane';
import ViewPane from './ViewPane';
import TimelinePane from './TimelinePane';
const { Sider, Content } = Layout;

const Caption: React.FC = () => {
  return (
    <div className="container">
      <Space>
        <LeftOutlined style={{ fontSize: '24px' }} onClick={() => history.goBack()} />
        <Title text="字幕添加" />
      </Space>
      <Layout>
        <Content>
          <OperationPane />
        </Content>
        <Sider width={500}>
          <ViewPane />
        </Sider>
      </Layout>
      <TimelinePane />
    </div>
  );
};
export default Caption;
