import {createWebHistory, createRouter} from "vue-router";
import SearchByTitle from "@/components/SearchByTitle";
import FavoriteMovies from "@/components/FavoriteMovies";

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
    }
];

const router = createRouter({
    mode: history,
    history: createWebHistory(),
    routes,
});

export default router;