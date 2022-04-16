import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

const Footer: React.FC = () => {
  const defaultMessage = 'HAUT yusixian';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'easy-mooc-maker',
          title: '易慕课',
          href: 'https://github.com/yusixian/easy-mooc-maker',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/yusixian/easy-mooc-maker',
          blankTarget: true,
        },
        {
          key: 'Ant Design Pro',
          title: '使用 Ant Design Pro 进行搭建',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
