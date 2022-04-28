/*
 * @Author: cos
 * @Date: 2022-04-28 13:45:13
 * @LastEditTime: 2022-04-28 17:37:25
 * @LastEditors: cos
 * @Description: 工作台界面
 * @FilePath: \easy-mooc-maker\src\pages\worker\index.tsx
 */

import React from 'react';
import Title from '@/components/Title';
import './index.less';
import { Card, Empty } from 'antd';
const OpList = [
  {
    title: '上传人像视频+PPT制作微课视频',
    desc: '上传绿幕人像视频和教学用ppt，系统将人像自动抠图并与ppt和微课模板合成微课。',
    path: '/upload/both',
  },
  {
    title: '自动识别添加字幕',
    desc: '已有完整微课视频，需要添加字幕',
    path: '/upload/dcaption',
  },
];
const Worker: React.FC = () => {
  return (
    <div className="container">
      <Title text="工作台界面" />
      {OpList.map((op) => (
        <Card
          key={op.title}
          className="card"
          style={{
            cursor: 'pointer',
          }}
        >
          <div className="title">{op.title}</div>
          <div className="desc">{op.desc}</div>
        </Card>
      ))}

      <Title text="创作管理" />
      <Card className="card">
        <Empty
          image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
          imageStyle={{
            height: 130,
          }}
          description={
            <span>
              这里空空如也哦，<a href="#API">快去制作微课吧</a>
            </span>
          }
        />
      </Card>
      <Title text="成品微课" />
      <Card className="card">
        <Empty
          image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
          imageStyle={{
            height: 110,
          }}
          description={
            <span>
              这里空空如也哦，<a href="#API">快去制作微课吧</a>
            </span>
          }
        />
      </Card>
    </div>
  );
};

export default Worker;
