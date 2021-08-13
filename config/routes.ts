const routes = [
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: '管理员页面',
    icon: 'crown',
    // access: 'canAdmin',
    // component: './Admin',
    routes: [
      {
        path: '/admin/subpage',
        name: '二级自定义页面',
        icon: 'smile',
        component: './Admin',
      },
    ],
  },
  {
    name: '表格列表',
    icon: 'table',
    path: '/list',
    component: './ListTableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    name: '高级表单',
    icon: 'smile',
    path: '/formadvancedform',
    component: './FormAdvancedForm',
  },
  {
    name: '动态表单页面',
    icon: 'smile',
    path: '/formily',
    component: './Formily',
  },
  {
    name: '乐高页面',
    icon: 'smile',
    path: '/lego',
    component: './Lego',
  },
  {
    component: './404',
  },
];

export default routes;