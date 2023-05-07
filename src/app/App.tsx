import React from "react";
import AddTodo from "features/todoList/AddTodo";
import TodoList from "features/todoList/TodoList";
import Footer from "features/visibilityFilter/Footer";
import "./App.css";
export default function App() {
  return (
    <div>
      <AddTodo />
      <TodoList />
      <Footer />
    </div>
  );
}
