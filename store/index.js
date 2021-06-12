import Vuex from 'vuex'
/* veri çekme işlemlerini vuex kursundan bak */
const createStore = () => {
    return new Vuex.Store({
        state: {},
        mutations: {},
        actions: {}, /* nuxtServerInıt ' e bak > storeda data yoksa fetch ettiriyor */
        getters: {}
    })
}


export default createStore