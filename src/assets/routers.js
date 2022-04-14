export default [
  {
    name: "demo1",
    title: "财务管理",
    path: "/demo1",
    component: "Demo1",
    icon: "iconshouye1",
  },
  {
    name: "demo2",
    title: "产品管理",
    path: "/demo2",
    component: "Demo2",
    icon: "iconshouye1",
    children: [
      { name: "demo2", title: "产品管理", path: "/demo2", component: "Demo2" },
    ],
  },
  {
    name: "demo3",
    title: "企业管理",
    path: "/demo3",
    component: "Demo3",
    icon: "iconshouye1",
  },
  {
    name: "demo4",
    title: "订单管理",
    path: "/demo4",
    component: "Demo4",
    icon: "iconshouye1",
  },
];
