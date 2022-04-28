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

  { path: '/worker/upload', name: '微课制作', component: './worker/upload', hideInMenu: true },
  { path: '/worker/caption', name: '字幕添加', component: './worker/caption', hideInMenu: true },

  { path: '/', redirect: '/welcome' },
  { component: './404' },
];
