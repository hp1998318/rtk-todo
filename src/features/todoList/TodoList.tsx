import React from "react";
import TodoListItem from "./TodoListItem";
import { RootState } from "app/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "./todoSlice";
import { VisibilityFilter } from "features/visibilityFilter/visibilityFilterSlice";
import { Todo } from "./types";

const getVisibleTodos = (todos: Todo[] = [], filter: VisibilityFilter) => {
  switch (filter) {
    case VisibilityFilter.ShowAll:
      return todos;
    case VisibilityFilter.ShowActive:
      return todos.filter((t) => !t.completed);
    case VisibilityFilter.ShowCompleted:
      return todos.filter((t) => t.completed);
    default:
      throw new Error("Unknow filter:" + filter);
  }
};
export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => {
    return getVisibleTodos(state.todos, state.visibilityFilter);
  });
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          {...todo}
          onClick={() => dispatch(toggleTodo(todo))}
        ></TodoListItem>
      ))}
    </ul>
  );
}
