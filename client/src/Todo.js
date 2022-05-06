import { useState } from "react";
import UpdateForm from "./UpdateForm";

const Todo = ({ todo, updateTodo }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState(todo.content);
  const handleUpdate = () => {
    setIsUpdating(true);
  };
  return (
    <li>
      {isUpdating ? (
        <UpdateForm todo={todo} updateTodo={updateTodo} />
      ) : (
        <p>{todo}</p>
      )}
      <button onClick={handleUpdate} disabled={isUpdating}>
        Update
      </button>
      <button>Delete</button>
    </li>
  );
};

export default Todo;
