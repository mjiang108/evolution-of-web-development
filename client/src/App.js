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
      <p style={{ fontStyle: "italic" }}>
        Frontend Framework - a frontend framework is an abstraction for building
        your frontend. This means it takes care of some common frontend issues,
        like manipulating the DOM and support for components. Thus, the
        developer has an easier time coding, especially for bigger apps. This
        app uses a frontend framework called React. It functions the same way as
        our previous app using vanilla JavaScript; however, the code looks
        completely different.
      </p>
    </>
  );
};

export default App;
