import { useEffect, useState } from "react";
import CreateForm from "./CreateForm";
import Todos from "./Todos";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [refetchToggle, setRefetchToggle] = useState(true);
  useEffect(() => {
    fetch("todos")
      .then((res) => res.json())
      .then((todos) => {
        setTodos(todos);
      })
      .catch((err) => console.error(err));
  }, [refetchToggle]);

  return (
    <>
      <h1>Todos</h1>
      <CreateForm setRefetchToggle={setRefetchToggle} />
      <Todos todos={todos} setTodos={setTodos} />
      <p>Description</p>
    </>
  );
};

export default App;
