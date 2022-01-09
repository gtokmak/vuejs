import Vue from 'vue'
import App from './App.vue'
import Footer from './Footer.vue'
import ServersShow from './ServersShow.vue'
import ServerInfo from './ServerInfo.vue'
import ServerList from './ServerList.vue'
import Header from './Header.vue'


Vue.component("Header",Header);
Vue.component("ServersShow",ServersShow);
Vue.component("Footer",Footer);

new Vue({
  el: '#app',
  render: h => h(App)
})
