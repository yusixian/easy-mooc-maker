import { Settings as LayoutSettings } from '@ant-design/pro-layout';
const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
    navTheme: "light",
    primaryColor: "#1890ff",
    layout: "top",
    contentWidth: "Fixed",
    fixedHeader: false,
    fixSiderbar: true,
    pwa: false,
    logo: "https://cdn.jsdelivr.net/gh/yusixian/imgBed/img/icon-128x128.png",
    title: '易幕课',
    headerHeight: 48,
    splitMenus: false,
};

export default Settings;
