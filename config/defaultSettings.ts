import { Settings as LayoutSettings } from '@ant-design/pro-layout';

export default {
  navTheme: 'light',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  menu: {
    locale: false,
  },
  title: 'jenkinsTest',
  pwa: false,
  logo: 'https://lamp-carrier-ci.oss-cn-hzfinance.aliyuncs.com/cic-public/logo.png',
  iconfontUrl: '',
} as LayoutSettings & {
  pwa: boolean;
};
