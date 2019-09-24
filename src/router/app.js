export default{
    routes: [{
        path: '/login',
        name: 'login',
        component: resolve => require(['../modules/basic/Login.vue'], resolve),
        meta: {
            tokenrequired: false
        }
    },
    {
        path: '/register',
        name: 'register',
        component: resolve => require(['../modules/basic/Login.vue'], resolve),
        meta: {
            tokenrequired: false
        }
        
    }]
}
