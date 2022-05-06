import { useEffect, useState } from "react";
import Todo from "./Todo";
import { cloneDeep } from "lodash";

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
          content={todo.content}
          updateTodo={(todo) => {
            const todosCopy = cloneDeep(todos);
            const td = todosCopy.find((td) => td.id === todo._id);
            td.content = todo;
            setTodos(todosCopy);
          }}
        />
      ))}
    </ul>
  );
};

export default TodosList;
