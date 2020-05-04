import Overview from "../components/Overview.vue";
import Detail from "../components/Detail.vue";
import AddMovie from "../components/AddMovie.vue";

export default [
    { path: '/', component: Overview, name: 'home' },
    { path: '/movie/:id', component: Detail, name: 'movie' },
    { path: '/movie/add', component: AddMovie, name: 'add' },
    { path: '*', redirect: { name: 'home'} },
]