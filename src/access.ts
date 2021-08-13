import routes from '../config/routes';

export default function access(initialState: { currentMenuTree?: any[] | undefined }) {
  const { currentMenuTree } = initialState || {};

  // 菜单树使用权限码来配置access
  const menuAccess = {};
  if (currentMenuTree && currentMenuTree.length > 0) {
    currentMenuTree.forEach((v: any) => {
      menuAccess[v.cd] = true;
    });
  }

  // 对全量的routes进行遍历对比
  const excludesMenuAccess = {};
  const compare = (rs: any[], menus: any) => {
    if (rs.length > 0) {
      rs.forEach((r: any) => {
        // 当菜单的access配置不存在与权限码中时，当前access应设置为false
        if (r.access && !menus[r.access]) {
          excludesMenuAccess[r.access] = false;
        }
        // 存在子菜单时继续向下遍历
        if (r.routes && r.routes.length > 0) {
          compare(r.routes, menus);
        }
      });
    }
  };
  compare(routes, menuAccess);

  // 输出全量的菜单按钮权限
  return {
    ...menuAccess,
    ...excludesMenuAccess,
  };
}
