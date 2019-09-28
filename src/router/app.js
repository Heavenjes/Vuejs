export default {
    routes: [
      {
        path : "/register",
        name : "register",
        component : resolve => require(['modules/register.vue'], resolve),
        
      },

      {
        path : "/login",
        name : "login",
        component : resolve => require(['modules/login.vue'], resolve),
      },

      {
        path : "/sidebar",
        name : "sidebar",
        component : resolve => require(['modules/sidebar.vue'], resolve),

      },
    ]
  }
  