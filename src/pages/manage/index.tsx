/*
 * @Author: cos
 * @Date: 2022-04-28 13:44:46
 * @LastEditTime: 2022-05-17 23:14:23
 * @LastEditors: cos
 * @Description:
 * @FilePath: \easy-mooc-maker\src\pages\manage\index.tsx
 */
import Title from '@/components/Title';
import { DeleteOutlined, FormOutlined, StarOutlined } from '@ant-design/icons';
import { Button, Card, Empty, Image, Space } from 'antd';
import React, { useState } from 'react';
import styles from './index.less';
const list = [
  {
    title: '示例微课1',
    imgURL: 'http://cdn.cosine.ren/img/ppt-5.png',
  },
  {
    title: '示例微课2',
    imgURL: 'http://cdn.cosine.ren/img/ppt-2.png',
  },
];
const Manage: React.FC = () => {
  const [courseList] = useState(list);
  return (
    <div className={styles.container}>
      <Title text="创作管理" />
      <Card className="card">
        <Button type="primary" size="large">
          新建微课项目
        </Button>
        <Button
          type="link"
          size="large"
          style={{
            float: 'right',
          }}
        >
          查看全部微课
        </Button>
        <div className={styles.content}>
          {courseList.map((item: any) => {
            console.log(item);
            return (
              <div key={item.title} className={styles.item}>
                <Image width={300} src={item.imgURL} alt={item.title} />
                <div className={styles.bar}>
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.desc}>
                    <Space>
                      <FormOutlined />
                      <StarOutlined />
                      <DeleteOutlined />
                    </Space>
                  </div>
                </div>
              </div>
            );
          })}
          {courseList.length === 0 && (
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
          )}
        </div>
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

export default Manage;
