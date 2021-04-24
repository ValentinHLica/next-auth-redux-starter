import { AnyAction } from "redux";

import { AUTH_LOADING, LOGIN_USER, LOG_OUT } from "../actions/types";

export interface AuthReducerState {
  loading: boolean;
  isAuthenticated: boolean;
}

const initialState: AuthReducerState = {
  loading: true,
  isAuthenticated: false,
};

const authReducer = (state = initialState, { type }: AnyAction) => {
  switch (type) {
    case AUTH_LOADING:
      return { ...state, loading: false };

    case LOGIN_USER:
      return { ...state, isAuthenticated: true };

    case LOG_OUT:
      return { ...state, isAuthenticated: false };

    default:
      return state;
  }
};

export default authReducer;
