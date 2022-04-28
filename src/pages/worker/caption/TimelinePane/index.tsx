/*
 * @Author: cos
 * @Date: 2022-04-28 21:26:34
 * @LastEditTime: 2022-04-28 21:51:26
 * @LastEditors: cos
 * @Description: 时间轴操纵面板
 * @FilePath: \easy-mooc-maker\src\pages\worker\caption\TimelinePane\index.tsx
 */
import React from 'react';
import './index.less';
import { Card, Slider } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_3366874_8ipzpdncpgu.js',
});
const TimelinePane: React.FC = () => {
  return (
    <Card className="card">
      <div className="toolbar">
        <IconFont type="icon-chexiao" />
        <IconFont type="icon-zhongzuo" />
        <IconFont type="icon-suoxiao" />
        <div className="slider">
          <Slider defaultValue={6} />
        </div>
        <IconFont type="icon-fangda" />
      </div>
      <img src="https://cdn.jsdelivr.net/gh/yusixian/imgBed/img/easy-mooc-maker/20220428img-2.png" />
    </Card>
  );
};
export default TimelinePane;
