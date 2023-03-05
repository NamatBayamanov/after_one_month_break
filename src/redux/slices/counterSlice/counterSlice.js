import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    number: 0,
  },
  reducers: {
    increment(state, action) {
      state.number++;
    },
    decrease(state, action) {
      state.number--;
    },
    reset(state, action) {
      state.number = action.payload.zero;
    },
  },
});
export const {increment, decrease, reset} = counterSlice.actions;

export default counterSlice.reducer;