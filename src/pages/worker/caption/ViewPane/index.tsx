/*
 * @Author: cos
 * @Date: 2022-04-28 20:05:40
 * @LastEditTime: 2022-04-28 21:51:51
 * @LastEditors: cos
 * @Description:
 * @FilePath: \easy-mooc-maker\src\pages\worker\caption\ViewPane\index.tsx
 */
import React from 'react';
import './index.less';
import { Card, Slider } from 'antd';
import {
  BackwardOutlined,
  FastBackwardOutlined,
  FastForwardOutlined,
  ForwardOutlined,
  FullscreenOutlined,
  PauseOutlined,
  SoundOutlined,
} from '@ant-design/icons';
import { Segmented } from 'antd';

const ViewPane: React.FC = () => {
  return (
    <Card className="card">
      <img src="https://cdn.jsdelivr.net/gh/yusixian/imgBed/img/easy-mooc-maker/20220428img-1.png" />
      <Slider defaultValue={6} />
      <div className="toolbar">
        <div style={{ fontSize: '16px' }}>00:03- 00:50</div>
        <FastBackwardOutlined />
        <BackwardOutlined />
        <PauseOutlined />
        <ForwardOutlined />
        <FastForwardOutlined />
        <SoundOutlined />
        <FullscreenOutlined />
        <Segmented options={['1倍速', '2倍速', '3倍速']} />
      </div>
    </Card>
  );
};
export default ViewPane;
