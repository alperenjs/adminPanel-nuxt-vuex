import Cookie from "js-cookie";
import axios from "axios";

export const state = () => ({
  token: null
});
export const actions = {
  authenticateUser(vuexContext, authData) {
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
        returnSecureToken: true
      })
      .then(result => {
        vuexContext.commit("setToken", result.data.idToken);
        localStorage.setItem("token", result.data.idToken);
        localStorage.setItem(
          "tokenExpiration",
          new Date().getTime() + +result.data.expiresIn * 1000
        );
        Cookie.set("jwt", result.data.idToken);
        Cookie.set(
          "expirationDate",
          new Date().getTime() + +result.data.expiresIn * 1000
        );
      })
      .catch(e => console.log(e)); // sweet alert ekleyebilriiz
  },
  logout(vuexContext) {
    vuexContext.commit("clearToken");
    Cookie.remove("jwt");
    Cookie.remove("expirationDate");
    if (process.client) {
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiration");
    }
  },

  initAuth(vuexContext, req) {
    let token;
    let expirationDate;
    if (req) {
      if (!req.headers.cookie) {
        return;
      }
      const jwtCookie = req.headers.cookie
        .split(";")
        .find(c => c.trim().startsWith("jwt="));
      if (!jwtCookie) {
        return;
      }
      token = jwtCookie.split("=")[1];
      expirationDate = req.headers.cookie
        .split(";")
        .find(c => c.trim().startsWith("expirationDate="))
        .split("=")[1];
    } else {
      token = localStorage.getItem("token");
      expirationDate = localStorage.getItem("tokenExpiration");
    }
    if (new Date().getTime() > +expirationDate || !token) {
      vuexContext.dispatch("logout");
      return;
    }
    vuexContext.commit("setToken", token);
  }
};
export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  clearToken(state, token) {
    state.token = null;
  }
};
export const getters = {
  isAuthenticated(state) {
    return state.token != null;
  }
};
