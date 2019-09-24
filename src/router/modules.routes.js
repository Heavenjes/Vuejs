import AUTH from '../services/auth'
let beforeEnter = (to, from, next) => {

    // AUTH.currentPath = to.path
    // let userID = parseInt(localStorage.getItem('accout_id'))
    // let token = localStorage.getItem('usertoken')
}

var devRoutes = []
let app = require('./app.js')
devRoutes = devRoutes.concat(app.default.routes)
for(let x = 0; x < devRoutes.length; x++){
    devRoutes[x]['beforeEnter'] = beforeEnter
}

let routes = [
    {
        path: '/',
        name: 'home',
        component: resolve => require(['an route niya']),
        beforeEnter: beforeEnter
    }
]
routes =routes.concat(devRoutes)
export default{
    routes: routes
}