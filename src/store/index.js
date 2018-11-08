import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import state from './state'
import createLogger from 'vuex/dist/logger'

// modules
import login from "./modules/login.js";
import department from "./modules/department.js";
import position from "./modules/position.js";




// 将vuex注入到实例中
Vue.use(Vuex);


export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules: {
        // 子模块
        login,
        department,
        position
    },
    plugins: process.env.NODE_ENV === 'development' ? [createLogger()] : [],
    strict: process.env.NODE_ENV === 'development' ? true : false
});