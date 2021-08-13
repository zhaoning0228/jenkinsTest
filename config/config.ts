// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
import routes from './routes';
import { theme } from '@lnpm/lamp-utils';

const { REACT_APP_ENV } = process.env;

export default defineConfig({
  hash: false,
  publicPath: '/jenkinsTest/',
  antd: {},
  dva: {
    hmr: true,
  },
  define: {
    appEnv: REACT_APP_ENV,
    // 自行更换xcloud应用版本
    legoVersion: REACT_APP_ENV != 'dev' ? '{{legoVersion}}' : '1.0.0',
    // 自行更换xcloud应用key
    legoKey: REACT_APP_ENV != 'dev' ? '{{legoKey}}' : 'xc-public-3CKgIeqw8',
  },
  qiankun: {
    slave: {
      shouldNotModifyDefaultBase: true,
    },
  },
  layout: {
    name: 'jenkinsTest',
    locale: false,
    ...defaultSettings,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: false,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes,
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme,
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
	},
  presets: ['@lnpm/lamp-ui/lib/index.js'],
  // 优化构建时间
  nodeModulesTransform: {
    type: 'none',
  }
});
