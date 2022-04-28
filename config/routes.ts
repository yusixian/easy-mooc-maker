export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { path: '/user', routes: [{ name: '登录', path: '/user/login', component: './user/Login' }] },
      { component: './404' },
    ],
  },
  { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },

  { path: '/worker', name: '工作台', component: './worker' },
  { path: '/manage', name: '微课管理', component: './manage' },
  { path: '/shared', name: '素材共享', component: './shared' },
  //   {
  //     path: '/admin',
  //     name: '管理页',
  //     icon: 'crown',
  //     access: 'canAdmin',
  //     component: './Admin',
  //     routes: [
  //       { path: '/admin/sub-page', name: '二级管理页', icon: 'smile', component: './Welcome' },
  //       { component: './404' },
  //     ],
  //   },
  //   { name: '查询表格', icon: 'table', path: '/list', component: './TableList' },

  { path: '/', redirect: '/welcome' },
  { component: './404' },
];
