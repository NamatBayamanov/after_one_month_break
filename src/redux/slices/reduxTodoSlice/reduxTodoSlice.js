import { createSlice } from "@reduxjs/toolkit";

const reduxTodoSlice = createSlice({
  name: 'reduxTodoSlice',
  initialState: {
    todos: [],
    status: null,
    error: null,
  },
  reducers: {
    addText(state, action) {
      state.todos.push(action.payload.info);
    },
    removeText(state, action) {
      state.todos = state.todos.filter((el) => {
        // console.log(el.id);
        return (
          el.id !== action.payload.id
        );
      });
    },
    completedText(state, action) {
      state.todos = state.todos.map(el => el.id === action.payload.id ? {...el, completed: !el.completed} : {...el});
    },
  }, 
});
export const {addText, removeText, completedText} = reduxTodoSlice.actions;

export default reduxTodoSlice.reducer;