const UpdateForm = ({ todo, updateTodo }) => {
  return (
    <form onSubmit={updateTodo}>
      <input type="text" />
      <input type="submit" value="Save" />
    </form>
  );
};

export default UpdateForm;
