/*
 * @Author: cos
 * @Date: 2022-04-28 13:08:07
 * @LastEditTime: 2022-04-28 22:11:00
 * @LastEditors: cos
 * @Description: 素材共享界面
 * @FilePath: \easy-mooc-maker\src\pages\shared\index.tsx
 */
import { getPPTList } from '@/services/ant-design-pro/api';
import { EyeOutlined } from '@ant-design/icons';
import { Input, Pagination } from 'antd';
const { Search } = Input;
import React, { useState } from 'react';
import styles from './index.less';
import Menus from './Menus';
const menuItems = [
  {
    label: 'PPT模板',
    key: 'ppt-template',
  },
  {
    label: 'PPT图表',
    key: 'ppt-table',
  },
  {
    label: 'PPT素材',
    key: 'ppt-source',
  },
  {
    label: '微课模板',
    key: 'course-template',
  },
  {
    label: '字幕样式',
    key: 'caption-style',
  },
];
const list = await getPPTList();
const Shared: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pptList] = useState(list);
  const onSearch = (value: string) => console.log(value);
  const onChange = (pageNumber: number) => {
    console.log('Page: ', pageNumber);
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Menus defaultSelectedKeys="ppt-template" items={menuItems} />
        <Search
          size="large"
          placeholder="input search text"
          allowClear
          onSearch={onSearch}
          style={{ width: 400 }}
        />{' '}
      </div>
      <div className={styles.content}>
        {pptList.map((item: any) => {
          console.log(item);
          return (
            <div key={item.title} className={styles.item}>
              <img src={item.imgURL} alt={item.title} />
              <div className={styles.bar}>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.desc}>
                  <EyeOutlined style={{ fontSize: '20px' }} />
                  {item.visits}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.footer}>
        <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
      </div>
    </div>
  );
};

export default Shared;
