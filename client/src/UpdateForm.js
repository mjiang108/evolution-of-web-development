const UpdateForm = ({ content, updateTodo, setIsUpdating }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        updateTodo("it works!");
        setIsUpdating(false);
      }}
    >
      <input type="text" />
      <input type="submit" value="Save" />
    </form>
  );
};

export default UpdateForm;
