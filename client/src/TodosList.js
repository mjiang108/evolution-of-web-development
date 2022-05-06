import { useEffect, useState } from "react";
import Todo from "./Todo";
import { cloneDeep } from "lodash";

const TodosList = () => {
  const [todos, setTodos] = useState([]);
  const saveTodoFactory = (id) => (updatedContent) => {
    const todosCopy = cloneDeep(todos);
    const td = todosCopy.find((td) => td._id === id);
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
        <Todo
          key={todo._id}
          content={todo.content}
          saveTodo={saveTodoFactory(todo._id)}
        />
      ))}
    </ul>
  );
};

export default TodosList;
