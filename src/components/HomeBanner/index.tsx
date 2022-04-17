import React from 'react';

import classNames from 'classnames';
import styles from './index.less';
import Holder from './Holder';

export type HomeBannerProps = {
  className?: string;
};
const HomeBanner: React.FC<HomeBannerProps> = (props) => {
  const title = '易幕课';
  const descList = ['精准匹配字幕', '自动生成微课视频', '提供海量PPT素材模板'];
  const { className } = props;
  return (
    <div className={classNames(className, styles.homeBanner)}>
      <Holder title={title} descList={descList} />
    </div>
  );
};
export default HomeBanner;
//   易幕课
// 精准匹配字幕
// 自动生成微课视频
// 提供海量PPT素材模板
