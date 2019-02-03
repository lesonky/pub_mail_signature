export default [
  {
    path: '/',
    name: 'Root',
    component: () =>
      import(/* webpackChunkName: "routes" */
      /* webpackMode: "lazy" */
      '@/App.vue'),
    redirect: {
      path: '/generator'
    },
    children: [
      {
        path: 'generator',
        name: 'generator',
        component: () =>
          import(/* webpackChunkName: "routes" */
          /* webpackMode: "lazy" */
          '@/pages/Generator.vue')
      },
      {
        path: 'code',
        name: 'code',
        component: () =>
          import(/* webpackChunkName: "routes" */
          /* webpackMode: "lazy" */
          '@/pages/Code.vue')
      }
    ]
  }
];
