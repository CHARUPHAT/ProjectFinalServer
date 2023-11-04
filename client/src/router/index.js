import Vue from "vue";
import Router from "vue-router";
// @ = เริ่มที่ src
// ใช้componentไหนอย่าลืม!! import
import HelloWorld from "@/components/HelloWorld";
import Test from "@/components/Test";

import UserIndex from "@/components/User/Index";
import UserCreate from "@/components/User/CreateUser";
import UserEdit from "@/components/User/EditUser";
import UserShow from "@/components/User/ShowUser";
import Login from "@/components/Login";

import OvenIndex from "@/components/Oven/Index";
import OvenCreate from "@/components/Oven/CreateOven";
import OvenEdit from "@/components/Oven/EditOven";
import OvenShow from "@/components/Oven/ShowOven";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/users",
      name: "users",
      component: UserIndex
    },
    {
      path: "/user/create",
      name: "/user-create",
      component: UserCreate
    },
    {
      path: "/user/edit/:userId",
      name: "/user-edit",
      component: UserEdit
    },
    {
      path: "/user/:userId",
      name: "/user",
      component: UserShow
    },
    /////////////////////////////////oven//

    {
      path: "/ovens",
      name: "ovens",
      component: OvenIndex
    },
    {
      path: "/oven/create",
      name: "/oven-create",
      component: OvenCreate
    },
    {
      path: "/oven/edit/:ovenId",
      name: "/oven-edit",
      component: OvenEdit
    },
    {
      path: "/oven/:ovenId",
      name: "/oven",
      component: OvenShow
    },
    
  ]
});
