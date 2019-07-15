import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import IndexPage from "@/components/IndexPage";
import ShowPage from "@/components/showPage";
import RegisterPage from "@/components/Register";
import StartPage from "@/components/Scene_start";
import "expose-loader?$!expose-loader?jQuery!jquery";
import MeaningPage from "@/components/meaningPage";
import Category from "@/components/category";
import RankingPage from '@/components/RankingPage';
import GameMain from "@/components/gameMain";
import SelectPage from "@/components/Scene_select";

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
    },
    {
      path: "/select",
      name: "select",
      component: SelectPage
    },	      
    {
      path: "/meaning",
      name: "meaningPage",
      component: MeaningPage
    },
    {
      path: '/category/:user',
      name: 'category',
      component: Category
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: RankingPage
    },
    {
      path: '/main/:cate/:user',
      name: 'gameMain',
      component: GameMain
    }
  ]
});
