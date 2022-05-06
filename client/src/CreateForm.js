import { useState } from "react";

const CreateForm = () => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("todos", {
      method: "POST",
      body: JSON.stringify({
        content: newTodo,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        setNewTodo("");
      })
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <input type="submit" value="Create" />
    </form>
  );
};

export default CreateForm;
