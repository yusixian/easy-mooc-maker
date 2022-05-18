/*
 * @Author: cos
 * @Date: 2022-05-17 21:54:28
 * @LastEditTime: 2022-05-18 00:48:48
 * @LastEditors: cos
 * @Description:
 * @FilePath: \easy-mooc-maker\src\pages\mine\center\index.tsx
 */
// import access from '@/access';
import Title from '@/components/Title';
import { Avatar, Button, Card, Col, Descriptions, Row, Space } from 'antd';
import React from 'react';
import { useModel } from 'umi';
import styles from './index.less';
const Center: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState ?? {};
  console.log(currentUser);
  console.log(initialState);
  const {
    avatar,
    name,
    access,
    address,
    country,
    email,
    geographic,
    group,
    signature,
    phone,
  }: API.CurrentUser = currentUser ?? {};

  return (
    <div className={styles.container}>
      <Title text="个人中心" />
      <Card className="card" style={{ textAlign: 'center' }}>
        <Row align="middle" justify="center" gutter={24}>
          <Col span={5}>
            <Space direction="vertical" size={16}>
              <Avatar src={avatar} size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} />
              <div style={{ fontSize: 24 }}>{name}</div>
            </Space>
          </Col>
          <Col span={16}>
            <Descriptions bordered title="账户信息" extra={<Button type="primary">Edit</Button>}>
              <Descriptions.Item label="权限">{access}</Descriptions.Item>
              <Descriptions.Item label="地址">{address}</Descriptions.Item>
              <Descriptions.Item label="国籍">{country}</Descriptions.Item>
              <Descriptions.Item label="邮箱">{email}</Descriptions.Item>
              <Descriptions.Item label="省份">{geographic?.province?.label}</Descriptions.Item>
              <Descriptions.Item label="城市">{geographic?.city?.label}</Descriptions.Item>
              <Descriptions.Item label="所属组织">{group}</Descriptions.Item>
              <Descriptions.Item label="手机号">{phone}</Descriptions.Item>
              <Descriptions.Item label="个人签名">{signature}</Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Center;
