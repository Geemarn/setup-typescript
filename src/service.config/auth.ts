import jwtDecode from "jwt-decode";
import store from "../redux/store";

const getUserSession = () => {
  const { getState } = store;
  const { app } = getState();
  return app.session;
};

const isLoggedIn = () => {
  const token = getUserSession();
  if (token) {
    try {
      const decoded: any = jwtDecode(token);
      const sessionTimeExp = decoded.exp;
      return sessionTimeExp > new Date().getTime() / 1000;
    } catch (e) {
      return false;
    }
  }
  return false;
};

export default {
  isLoggedIn,
  getUserSession,
};
