import Vuex from 'vuex'
import Cookie from 'js-cookie'
import axios from 'axios'

/* veri çekme işlemlerini vuex kursundan bak */

const createStore = () => {
    return new Vuex.Store({
        state: {
            token: null
        },
        mutations: {
            setToken(state, token){
                state.token = token;
            },
            clearToken(state, token){
                state.token = null;
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
                    vuexContext.commit('setToken', result.data.idToken)
                    localStorage.setItem('token', result.data.idToken)
                    localStorage.setItem('tokenExpiration',new Date().getTime() + result.data.expiresIn * 1000)
                   Cookie.set('jwt', result.data.idToken);
                   Cookie.set('expirationDate', new Date().getTime() + result.data.expiresIn * 1000)
                    vuexContext.dispatch('setLogoutTimer', result.data.expiresIn * 1000)
                })
                .catch(e => console.log(e));
            },
            setLogoutTimer(vuexContext, duration) {
                setTimeout(() => {
                    vuexContext.commit('clearToken')
                }, duration);
            },
            initAuth(vuexContext, req){
                let token;
                let expirationDate;
               if(req){
                if(!req.headers.cookie){
                    return;
                }
                const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))
                if(!jwtCookie){
                    return;
                }
                 token = jwtCookie.split('=')[1];
                 expirationDate = req.headers.cookie.split(';').find(c => c.trim().startsWith('expirationDate='))
                .split('=')[1];
               
            }else{
                 token = localStorage.getItem('token');
                 expirationDate = localStorage.getItem('tokenExpiration');

                if(new Date().getTime() > +expirationDate || !token){
                    return;
                }
               }
              
                vuexContext.dispatch('setLogoutTimer', +expirationDate - new Date().getTime());
                vuexContext.commit('setToken', token);
            }
        }, 
       
        /* nuxtServerInıt ' e bak > storeda data yoksa fetch ettiriyor */
        getters: {
            isAuthenticated(state){
                return state.token != null
            }
        }
    })
}


export default createStore