import { AUTH_LOADING, LOGIN_USER, LOG_OUT } from "./types";

export const setLoading = () => ({
  type: AUTH_LOADING,
});

export const loginUser = () => ({
  type: LOGIN_USER,
});

export const logOut = () => ({
  type: LOG_OUT,
});
