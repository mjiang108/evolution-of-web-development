import { useEffect, useState } from "react";
import Todo from "./Todo";
import { cloneDeep } from "lodash";

const TodosList = () => {
  const [todos, setTodos] = useState([]);
  const saveTodo = (updatedContent) => {
    const todosCopy = cloneDeep(todos);
    const td = todosCopy.find((td) => td.id === updatedContent._id);
    td.content = updatedContent;
    setTodos(todosCopy);
  };

  useEffect(() => {
    fetch("todos")
      .then((res) => res.json())
      .then((todos) => {
        setTodos(todos);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo._id} content={todo.content} saveTodo={saveTodo} />
      ))}
    </ul>
  );
};

export default TodosList;
