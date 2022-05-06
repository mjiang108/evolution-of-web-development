import { useState } from "react";
import UpdateForm from "./UpdateForm";

const Todo = ({ content, updateTodo }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const handleUpdate = () => {
    setIsUpdating(true);
  };
  return (
    <li>
      {isUpdating ? (
        <UpdateForm
          content={content}
          updateTodo={updateTodo}
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
