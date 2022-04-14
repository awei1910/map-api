

import routers from '@/assets/routers'
const routes =  [
  {
    path: "/",
    // component: ()=>import("@/components/demo1"),
    redirect:'/demo1'
  }
];
routers.forEach(item=>{
  routes.push({
    path:item.path,
    name:item.name,
    component:()=>import("@/components/"+item.name)
  })
})

export default routes