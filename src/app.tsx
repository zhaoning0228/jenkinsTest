import React from 'react';
import { BasicLayoutProps, Settings as LayoutSettings } from '@ant-design/pro-layout';
import { notification, message } from 'antd';
import { initRequest } from '@lnpm/lamp-utils';

import RightContent from '@/components/RightContent';

export const request = initRequest(notification, message);

export { getInitialState } from '../config/initialState';

/**
 * layout运行时配置
 */
export const layout = ({
  initialState,
}: {
  initialState: { settings?: LayoutSettings; };
}): BasicLayoutProps => {
  return {
    // headerRender: false,
    rightContentRender: () => <RightContent />,
    disableContentMargin: true,
    menuHeaderRender: undefined,
    ...initialState?.settings,
  };
};

/**
 * qiankun微应用生命周期
 */
export const qiankun = {
  // 应用加载之前
  async bootstrap(props: any) {
    console.log('subapp bootstrap', props);
  },
  // 应用 render 之前触发
  async mount(props: any) {
    console.log('subapp mount', props);
  },
  // 应用卸载之后触发
  async unmount(props: any) {
    console.log('subapp unmount', props);
  },
};
