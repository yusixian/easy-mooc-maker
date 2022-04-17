import React from 'react';
import styles from './index.less';

export type HolderProps = {
  title: string;
  descList: string[];
};
const Holder: React.FC<HolderProps> = (props) => {
  const { title, descList } = props;
  return (
    <div className={styles.holder}>
      <h1>{title}</h1>
      {descList.map((desc, index) => (
        <p key={index}>{desc}</p>
      ))}
    </div>
  );
};
export default Holder;
//   易幕课
// 精准匹配字幕
// 自动生成微课视频
// 提供海量PPT素材模板
