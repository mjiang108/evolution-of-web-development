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
        <Todo
          key={todo._id}
          todo={todo.content}
          updateTodo={() =>
            setTodos([{ _id: 123, content: "oh no only 1 todo now" }])
          }
        />
      ))}
    </ul>
  );
};

export default TodosList;
