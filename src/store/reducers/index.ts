import { combineReducers, AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";

import authReducer, { AuthReducerState } from "./authReducer";

export type State = {
  auth: AuthReducerState;
};

const rootReducer = (state: State | undefined, action: AnyAction): State => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;

    default: {
      const combineReducer = combineReducers({
        auth: authReducer,
      });

      return combineReducer(state, action);
    }
  }
};

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
