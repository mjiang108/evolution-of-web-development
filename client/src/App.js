import { useEffect, useState } from "react";
import CreateForm from "./CreateForm";
import TodosList from "./TodosList";

const App = () => {
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
    <>
      <h1>Todos</h1>
      <CreateForm />
      <TodosList todos={todos} setTodos={setTodos} />
      <p>Description</p>
    </>
  );
};

export default App;
