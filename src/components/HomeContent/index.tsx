import React from 'react';
import Icon, {
  AudioOutlined,
  CloudUploadOutlined,
  FundProjectionScreenOutlined,
  SplitCellsOutlined,
  StarFilled,
  VideoCameraFilled,
} from '@ant-design/icons';

import classNames from 'classnames';
import styles from './index.less';

export type ListItemProps = {
  icon: any;
  title: string;
  description: string;
};
const ListItem: React.FC<ListItemProps> = ({ icon, title, description }) => (
  <div className={styles.content}>
    <div className={styles.iconBox}>
      <Icon component={icon} style={{ fontSize: '78px', color: '#1890ff' }} />
    </div>
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  </div>
);
const HomeContent: React.FC = () => {
  const list = [
    {
      icon: AudioOutlined,
      title: '智能语音识别技术',
      description: '精准识别视频中的人声',
    },
    {
      icon: SplitCellsOutlined,
      title: '人工修正字幕匹配',
      description: '自动为视频匹配字幕',
    },
    {
      icon: StarFilled,
      title: '画面优化',
      description: '智能改善画面质量和特效',
    },
    {
      icon: FundProjectionScreenOutlined,
      title: 'PPT自动匹配视频',
      description: '视频播放时PPT自动翻页',
    },
    {
      icon: VideoCameraFilled,
      title: '视频抠像',
      description: '—键抠像·完美融合人像和课程视频',
    },
    {
      icon: CloudUploadOutlined,
      title: '云端素材共享',
      description: '多种共享资源，助您快速制作自己的课程',
    },
  ];
  return (
    <div className={classNames(styles.homeContent)}>
      <h1 className={styles.title}>产品优势</h1>
      <div className={styles.container}>
        {list.map((item) => (
          <ListItem
            key={item.title}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};
export default HomeContent;

// 智能语音识别技术
// 精准识别视频中的人声
// <AudioOutlined />

// 人工修正字幕匹配
// 自动为视频匹配字幕
// <SplitCellsOutlined />

// 画面优化
// 智能改善画面质量和特效
// <StarFilled />

// PPT自动匹配视频
// 视频播放时PPT自动翻页
// <FundProjectionScreenOutlined />

// 视频抠像
// —键抠像·完美融合人像和课程视频
// <VideoCameraFilled />

// 云端素材共享
// 多种共享资源，助您快速制作自己的课程
// <CloudUploadOutlined />
