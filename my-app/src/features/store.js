import { configureStore } from "@reduxjs/toolkit";
import authSlices from "./auth/authSlices";

export const store = configureStore({
  reducer: {
    auth: authSlices,
  },
});
