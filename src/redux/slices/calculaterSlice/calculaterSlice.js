import { createSlice } from "@reduxjs/toolkit";

const calculaterSlice = createSlice({
  name: "calculater",
  initialState: {
    number: 0,
  },
  reducers: {
    increment(state, action) {
      state.number++;
    },
    decrement(state, action) {
      state.number--;
    },
    reset(state, action) {
      state.number = 0;
    },
    set(state, action) {
      state.number = action.payload.numbers;
    },
  },
});

export const {increment, decrement, reset, set} = calculaterSlice.actions;

export default calculaterSlice.reducer;