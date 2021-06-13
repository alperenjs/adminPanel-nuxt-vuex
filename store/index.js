import Vuex from 'vuex'
import axios from 'axios'

/* veri çekme işlemlerini vuex kursundan bak */

const createStore = () => {
    return new Vuex.Store({
        state: {
            token: null
        },
        mutations: {
            setToken(state, token){
                state.token = token
            }
        },
        actions: {
            authenticateUser(vuexContext, authData){
                let authUrl =
                "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBFGp0MSMWVYcxGP8bwR1qP5y0IZDLgjes";
              if (!authData.isLogin) {
                authUrl =
                  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBFGp0MSMWVYcxGP8bwR1qP5y0IZDLgjes";
              }
              return axios
                .post(authUrl, {
                  email: authData.email,
                  password: authData.password,
                  returnSecureToken: true,
                })
                .then((result) => {
                    vuexContext.commit('setToken', result.idToken)
                })
                .catch((e) => console.log(e));
            }
        }, /* nuxtServerInıt ' e bak > storeda data yoksa fetch ettiriyor */
        getters: {}
    })
}


export default createStore