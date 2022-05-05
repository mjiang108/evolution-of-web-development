const Todo = ({ todo }) => {
  return (
    <li>
      <p>{JSON.stringify(todo)}</p>
    </li>
  );
};

export default Todo;
