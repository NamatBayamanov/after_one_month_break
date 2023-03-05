import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice/counterSlice";
import calculaterReducer from "../slices/calculaterSlice/calculaterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    calculater: calculaterReducer,
  },
  // middleware: {},
});

export default store;