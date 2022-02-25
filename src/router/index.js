import {createWebHistory, createRouter} from "vue-router";
import SearchByTitle from "@/components/SearchByTitle";
import FavoriteMovies from "@/components/FavoriteMovies";
import MovieDetail from "@/components/MovieDetail";
import MovieReviews from "@/components/MovieReviews";

const routes = [
    {
        path: "/SearchByTitle",
        name: "SearchByTitle",
        component: SearchByTitle,
    },
    {
        path: "/FavoriteMovies",
        name: "FavoriteMovies",
        component: FavoriteMovies,
    },
    {
        path: "/MovieDetail",
        name: "MovieDetail",
        component: MovieDetail,
    },
    {
        path: "/MovieReviews",
        name: "MovieReviews",
        component: MovieReviews,
    }
];

const router = createRouter({
    mode: history,
    history: createWebHistory(),
    routes,
});

export default router;