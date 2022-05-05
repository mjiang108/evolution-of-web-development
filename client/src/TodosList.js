import { useEffect, useState } from "react";
import Todo from "./Todo";

const TodosList = () => {
  const [todos, setTodos] = useState([]);
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
        <Todo key={todo._id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodosList;
