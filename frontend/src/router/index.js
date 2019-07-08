import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import IndexPage from "@/components/IndexPage";
import ShowPage from "@/components/showPage";
import RegisterPage from "@/components/Register";
import sub from "@/components/sub";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
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
      path: "/sub",
      name: "subb",
      component: sub
    }
  ]
});
