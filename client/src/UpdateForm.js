import { useState } from "react";

const UpdateForm = ({ content, saveTodo, setIsUpdating }) => {
  const [updatedContent, setUpdatedContent] = useState(content);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        saveTodo(updatedContent);
        setIsUpdating(false);
      }}
    >
      <input
        type="text"
        value={updatedContent}
        onChange={(e) => setUpdatedContent(e.target.value)}
      />
      <input type="submit" value="Save" />
    </form>
  );
};

export default UpdateForm;
