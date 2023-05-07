import { configureStore, Action } from "@reduxjs/toolkit";
import { type } from "os";
import { ThunkAction } from "redux-thunk";
import rootReducer, { RootState } from "./rootReducer";
const store = configureStore({
  reducer: rootReducer,
});

// 配置对 reducer 的Webpack 热模块替换支持。
if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./rootReducer", () => {
    const newRootReducer = require("./rootReducer").default;
    store.replaceReducer(newRootReducer);
  });
}

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, undefined, Action<string>>;
export default store;
