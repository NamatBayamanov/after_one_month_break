import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice/counterSlice";
import calculaterReducer from "../slices/calculaterSlice/calculaterSlice";
import reduxTodoReducer from "../slices/reduxTodoSlice/reduxTodoSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    calculater: calculaterReducer,
    reduxTodos: reduxTodoReducer,
  },
  // middleware: {},
});

export default store;