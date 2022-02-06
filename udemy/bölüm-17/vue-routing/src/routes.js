import Home from './components/Home'
import Header from './components/Header'

// import User from './components/user/User'
// import UserStart from './components/user/UserStart'
// import UserDetail from './components/user/UserDetail'
// import UserEdit from './components/user/UserEdit'

const User = resolve => {
    require.ensure(["./components/user/User.vue"],() => {
        resolve(require("./components/user/User.vue"));
    }, "User")
}

const UserStart = resolve => {
    require.ensure(["./components/user/UserStart.vue"],() => {
        resolve(require("./components/user/UserStart.vue"));
    }, "User")
}

const UserDetail = resolve => {
    require.ensure(["./components/user/UserDetail.vue"],() => {
        resolve(require("./components/user/UserDetail.vue"));
    }, "User")
}
const UserEdit = resolve => {
    require.ensure(["./components/user/UserEdit.vue"],() => {
        resolve(require("./components/user/UserEdit.vue"));
    }, "User")
}
export const routes = [
    {
        path: '', name: "anasayfa", components: {
            default: Home,
            "header-top": Header
        }
    },
    {
        path: '/user',  name: "kullanici", components: {
            default : User,
            "header-bottom": Header
        },
        children: [
            { path: '', component: UserStart, name: "userStart" },
            { path: ':id', component: UserDetail, name: "userDetail" },
            { path: ':id/edit', component: UserEdit, name: "userEdit" }
        ]
    },
    {
        path : "/redirect", redirect : '/user'
    },
    {
        path:"*", redirect : '/' // yukarıdaki herhangi bir path ile eşleşmeme durumunda devreye girer.
    }
];