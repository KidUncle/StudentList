import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import RouterConfig from './router';
import  VueResource  from 'vue-resource';
import $ from 'jquery' ;

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;
const router = new VueRouter(RouterConfig);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
})