/*
 * @Author: cos
 * @Date: 2022-04-28 17:44:10
 * @LastEditTime: 2022-05-17 22:08:24
 * @LastEditors: cos
 * @Description: 微课制作页面
 * @FilePath: \easy-mooc-maker\src\pages\worker\upload\index.tsx
 */
import React, { useState } from 'react';
import { history } from 'umi';
import Title from '@/components/Title';
import './index.less';
import { InboxOutlined, LeftOutlined, PlaySquareOutlined } from '@ant-design/icons';
import {
  Card,
  Space,
  message,
  Upload,
  Form,
  Button,
  Select,
  Switch,
  Breadcrumb,
  Modal,
} from 'antd';
import DirectoryTree from 'antd/lib/tree/DirectoryTree';

const { Dragger } = Upload;
const { Option } = Select;
const treeData = [
  {
    title: '试用微课',
    key: 'test',
    children: [
      { title: '示例微课1', key: 'test-1', isLeaf: true, icon: <PlaySquareOutlined /> },
      { title: '示例微课2', key: 'test-2', isLeaf: true, icon: <PlaySquareOutlined /> },
    ],
  },
  {
    title: '我的微课',
    key: 'mycourse',
    children: [
      { title: 'CS-1901', key: 'CS-1901', isLeaf: true, icon: <PlaySquareOutlined /> },
      { title: 'CS-1902', key: 'CS-1902', isLeaf: true, icon: <PlaySquareOutlined /> },
    ],
  },
];
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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const onSelect = (keys: React.Key[], info: any) => {
    console.log('Trigger Select', keys, info);
  };

  const onExpand = () => {
    console.log('Trigger Expand');
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = async (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const configFormList = [
    {
      key: 'language',
      name: 'language',
      label: '是否开启字幕识别',
      rules: [{ required: true, message: '请选择字幕语言' }],
      childNode: (
        <Select defaultValue="cn">
          <Option value="cn">中文</Option>
          <Option value="en">英文</Option>
          <Option value="both">双语</Option>
        </Select>
      ),
    },
    {
      key: 'ocrOpen',
      name: 'ocrOpen',
      label: '是否开启字幕识别',
      rules: [{ required: true, message: '是否开启字幕识别' }],
      childNode: <Switch defaultChecked />,
    },
    {
      key: 'saveURL',
      name: 'saveURL',
      label: '保存设置',
      rules: [{ required: false }],
      childNode: (
        <Space>
          <Breadcrumb separator=">">
            <Breadcrumb.Item key="全部微课">全部微课</Breadcrumb.Item>
            <Breadcrumb.Item key="试用微课">试用微课</Breadcrumb.Item>
          </Breadcrumb>
          <Button type="primary" onClick={() => showModal()}>
            选择路径
          </Button>
        </Space>
      ),
    },
  ];
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
        <Form
          name="grainRecord"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="form"
          layout="inline"
        >
          {configFormList.map((item) => (
            <Form.Item key={item.key} label={item.label} name={item.name} rules={item.rules}>
              {item.childNode}
            </Form.Item>
          ))}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              生成字幕
            </Button>
          </Form.Item>
        </Form>
        <Modal
          title="请选择保存路径"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="link" href="https://google.com" type="primary">
              新建文件夹
            </Button>,
            <Button key="back" onClick={() => handleCancel()}>
              取消
            </Button>,
            <Button key="submit" type="primary" onClick={() => handleOk()}>
              确定
            </Button>,
          ]}
        >
          <DirectoryTree
            multiple
            defaultExpandAll
            onSelect={onSelect}
            onExpand={onExpand}
            treeData={treeData}
          />
        </Modal>
      </Card>
    </div>
  );
};
export default ViewUpload;
