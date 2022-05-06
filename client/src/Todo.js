import { useState } from "react";
import UpdateForm from "./UpdateForm";

const Todo = ({ content, saveTodo }) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdate = () => {
    setIsUpdating(true);
  };

  return (
    <li>
      {isUpdating ? (
        <UpdateForm
          content={content}
          saveTodo={saveTodo}
          setIsUpdating={setIsUpdating}
        />
      ) : (
        <p>{content}</p>
      )}
      <button onClick={handleUpdate} disabled={isUpdating}>
        Update
      </button>
      <button>Delete</button>
    </li>
  );
};

export default Todo;
