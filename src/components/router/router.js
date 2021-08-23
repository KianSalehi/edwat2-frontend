import Vue from 'vue'
import Router from 'vue-router'
import NewRoom from '../screens/NewRoom.vue'
import Video from '../screens/Video.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path:'/',
            name: 'NewRoom',
            component: NewRoom
        },
        {
            path:'/video/:videoSlug',
            name:'video',
            component: Video
        }
    ]
})