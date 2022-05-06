import { useState } from "react";
import UpdateForm from "./UpdateForm";

const Todo = ({ todo }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState(todo.content);
  const handleUpdate = () => {
    setIsUpdating(true);
  };
  return (
    <li>
      {isUpdating ? <UpdateForm /> : <p>{todo.content}</p>}
      <button onClick={handleUpdate} disabled={isUpdating}>
        Update
      </button>
      <button>Delete</button>
    </li>
  );
};

export default Todo;
