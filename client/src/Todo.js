import { useState } from "react";
import UpdateForm from "./UpdateForm";

const Todo = ({ content, handleSave, handleDelete }) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdate = () => {
    setIsUpdating(true);
  };

  return (
    <li>
      {isUpdating ? (
        <UpdateForm
          content={content}
          handleSave={handleSave}
          setIsUpdating={setIsUpdating}
        />
      ) : (
        <p>{content}</p>
      )}
      <button onClick={handleUpdate} disabled={isUpdating}>
        Update
      </button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Todo;
