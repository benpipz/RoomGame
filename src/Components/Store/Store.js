import { configureStore } from "@reduxjs/toolkit";
import katilexSlice from "./KatialexSlice.js";

const store = configureStore({
  reducer: {
    katilex: katilexSlice,
  },
});

export default store;
