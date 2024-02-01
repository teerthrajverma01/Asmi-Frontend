import { configureStore } from "@reduxjs/toolkit";

import userInfoReducer from "./slices/userInfo";

const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
  },
});

export default store;
