import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'history', // Defualt:'hash' # isareti ekler
  scrollBehavior(to, from, savedPosition){
    if(to.hash){
      return{
        selector: to.hash
      }
    }
  }

});

router.beforeEach((to, from, next)=> {
    
  next();
});

new Vue({
  router: router,
  el: '#app',
  render: h => h(App)
})
