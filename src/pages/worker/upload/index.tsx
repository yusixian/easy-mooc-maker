/*
 * @Author: cos
 * @Date: 2022-04-28 17:44:10
 * @LastEditTime: 2022-04-28 19:17:20
 * @LastEditors: cos
 * @Description: 微课制作页面
 * @FilePath: \easy-mooc-maker\src\pages\worker\upload\index.tsx
 */
import React from 'react';
import { history } from 'umi';
import Title from '@/components/Title';
import './index.less';
import { InboxOutlined, LeftOutlined } from '@ant-design/icons';
import { Card, Space, message, Upload } from 'antd';

const { Dragger } = Upload;

const props: any = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info: any) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e: any) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const ViewUpload: React.FC = () => {
  return (
    <div className="container">
      <Space>
        <LeftOutlined style={{ fontSize: '24px' }} onClick={() => history.goBack()} />
        <Title text="微课制作" />
      </Space>
      <Card className="card">
        <div className="_title">上传文件</div>
        <div className="_desc">
          支持mp4、mov、3gp、mp3、wav、m4a、avi格式，单个文件不超过2GB，时长不超过6小时
        </div>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">点击或拖拽文件到此区域进行上传</p>
          <p className="ant-upload-hint">
            支持mp4、mov、3gp、mp3、wav、m4a、avi格式，单个文件不超过2GB，时长不超过6小时
          </p>
        </Dragger>
      </Card>
    </div>
  );
};
export default ViewUpload;
