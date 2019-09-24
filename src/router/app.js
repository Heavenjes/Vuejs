export default {
    routes: [
      {
        path : "/register",
        name : "register",
        component : resolve => require(['modules/HelloWorld.vue'], resolve),
        
      },

      {
        path : "/login",
        name : "login",
        component : resolve => require(['modules/login.vue'], resolve),
      }
    ]
  }
  