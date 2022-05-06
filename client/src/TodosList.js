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

  const handleSaveFactory = (id) => (updatedContent) => {
    // save to db
    fetch(`todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: updatedContent,
      }),
    })
      // then update state. another option is to just fetch todos again
      .then(() => {
        const todosCopy = cloneDeep(todos);
        const td = todosCopy.find((td) => td._id === id);
        td.content = updatedContent;
        setTodos(todosCopy);
      })
      .catch((err) => console.error(err));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <Todo
          key={todo._id}
          content={todo.content}
          handleSave={handleSaveFactory(todo._id)}
        />
      ))}
    </ul>
  );
};

export default TodosList;
