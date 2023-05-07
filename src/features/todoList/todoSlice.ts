import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, AppDispatch } from "app/store";
import { Todo } from "features/todoList/types";
// 这种写法避免不必要的收紧
const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // PayloadAction ：payload生成的 action creators 将根据PayloadAction<T>您为 reducer 提供的类型正确输入以接受参数
    addTodo(state, action: PayloadAction<Todo>) {
      state.push(action.payload);
    },
    toggleTodo(state, action: PayloadAction<Todo>) {
      let todo = state.find((todo) => {
        return todo.id === action.payload.id;
      });
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { toggleTodo } = todoSlice.actions;
export const addTodo =
  (text: string): AppThunk =>
  async (dispatch: AppDispatch) => {
    const newTodo: Todo = {
      id: Math.random().toString(36).slice(2, 11),
      completed: false,
      text: text,
    };
    dispatch(todoSlice.actions.addTodo(newTodo));
  };
export default todoSlice.reducer;
