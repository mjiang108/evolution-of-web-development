import { useEffect } from "react";
import CreateForm from "./CreateForm";
import TodosList from "./TodosList";

const App = () => {
  return (
    <>
      <h1>Todos</h1>
      <CreateForm />
      <TodosList />
      <p>Description</p>
    </>
  );
};

export default App;
