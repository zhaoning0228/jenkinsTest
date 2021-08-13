import { Settings as LayoutSettings } from '@ant-design/pro-layout';
import { request } from 'umi';
import { Dict, User, CurrentUser } from '@lnpm/lamp-utils';
import defaultSettings from './defaultSettings';

export async function getInitialState(): Promise<{
  settings?: LayoutSettings;
  currentUser?: CurrentUser;
  currentMenuTree?: any[];
  dict?: Dict;
}> {
  try {
    // 初始化用户类User
    // const user = new User(request);
    // // 初始化获取用户信息
    // const userInfo = await user.getUserInfo();
    // const currentUser = userInfo.data || null;
    // console.log(currentUser);

    // // 初始化获取菜单权限树
    // const apps = [16]; // 运营支撑域
    // const menuTree = await user.getMenuTree(apps);
    // const currentMenuTree = menuTree.data || null;
    // console.log(currentMenuTree);

    // 获取全局字典，忽略认证
    const dictTypes = [
      'domain',
    ];
    const dict = new Dict(request);
    await dict.getDictByType(dictTypes);

    return {
      dict,
      // currentUser,
      // currentMenuTree,
      settings: defaultSettings,
    };
  } catch (e) {
    console.error(e);

    return {
      settings: defaultSettings,
    };
  }
}
