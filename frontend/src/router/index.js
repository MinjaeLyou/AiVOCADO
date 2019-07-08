import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import IndexPage from "@/components/IndexPage";
import ShowPage from "@/components/showPage";
import RegisterPage from "@/components/Register";
import StartPage from "@/components/Scene_start";
import sub from "@/components/sub";
import "expose-loader?$!expose-loader?jQuery!jquery";
import Category from "@/components/Category";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/index",
      name: "index",
      component: IndexPage
    },
    {
      path: "/show/:id",
      name: "show",
      component: ShowPage
    },
    {
      path: "/reg",
      name: "register",
      component: RegisterPage
    },
    {
      path: "/",
      name: "start",
      component: StartPage
    }
  ]
});
