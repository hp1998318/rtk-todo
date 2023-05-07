import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";
import type { AppDispatch } from "app/store";
export default function AddTodo(): JSX.Element {
  //   为了避免error  AppThunk”的参数不能赋给类型“AnyAction”的参数
  //   此处对于useDispatch，默认Dispatch类型不知道 thunk。为了正确分派 thunk，您需要使用AppDispatch商店中包含 thunk 中间件类型的特定自定义类型，并将其与useDispatch. 添加预键入的挂钩可防止您忘记在需要的地方useDispatch导入。AppDispatch
  //   详情见https://redux.js.org/tutorials/typescript-quick-start
  const dispatch: AppDispatch = useDispatch();
  const [text, setText] = React.useState("");
  function handleChange(e: { target: HTMLInputElement }) {
    setText(e.target.value);
  }
  function handleSubmit(e: any) {
    e.preventDefault();
    if (!text.trim()) {
      return;
    }
    dispatch(addTodo(text));
    setText("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={handleChange}></input>
      <button type="submit">Add todo</button>
    </form>
  );
}
