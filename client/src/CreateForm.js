import { useState } from "react";

const CreateForm = ({ setTodos, todos }) => {
  const [newContent, setNewContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("todos", {
      method: "POST",
      body: JSON.stringify({
        content: newContent,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        // TODO: ideally we refetch todos from server, so we have the correct ids
        setTodos([...todos, { _id: "123", content: newContent }]);
        setNewContent("");
      })
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newContent}
        onChange={(e) => setNewContent(e.target.value)}
      />
      <input type="submit" value="Create" />
    </form>
  );
};

export default CreateForm;
