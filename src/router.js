//import packages
import Vue from "vue";
import VueRouter from "vue-router";

// import files
import Home from "./containers/Home";
import Search from "./containers/Search";
import Error from "./containers/Error";
import People from "./containers/People";
import Genres from "./containers/Genres";
import SingleGenres from "./containers/SingleGenres";
import SingleTvshows from "./containers/SingleTvshows";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      name: "home",
      path: "/",
      component: Home,
      meta: {
        title: "Homepage",
      },
    },
    {
      name: "search",
      path: "/search/:q",
      component: Search,
      meta: {
        title: "Search | Tv Shows",
      },
    },
    {
      name: "singleTvshows",
      path: "/tvshows/:id",
      component: SingleTvshows,
      meta: {
        title: "Details of Tv shows | Tv Shows",
      },
    },
    {
      name: "genres",
      path: "/genres",
      component: Genres,
      meta: {
        title: "Tv Shows | Genres",
      },
    },
    {
      name: "singleGenres",
      path: "/genres/:type",
      component: SingleGenres,
      meta: {
        title: "All tv shows from Tv Shows | Genres",
      },
    },
    {
      name: "people",
      path: "/people",
      component: People,
      meta: {
        title: "people",
      },
    },
    // - * ---------------------
    {
      path: "*",
      component: Error,
      meta: {
        title: "Tv Shows | Error ",
      },
    },
  ],
});
