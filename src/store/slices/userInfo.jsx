import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userInfo",
  initialState: {
    username: null,
  },

  reducers: {
    setUserName(state, action) {
      state.username = action.payload;
    },
  },
});

export const { setUserName } = userSlice.actions;
export default userSlice.reducer;
