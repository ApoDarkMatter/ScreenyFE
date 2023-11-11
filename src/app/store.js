import { configureStore } from "@reduxjs/toolkit";
import screeny from "../reducers/screeny";

export const store = configureStore({
  reducer: {
    screen: screeny,
  },
});
