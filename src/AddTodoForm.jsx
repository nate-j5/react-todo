import React from "react";

function AddTodoForm() {
  return (
    <>
      <form>
        <label text="title" htmlFor="todoTitle"></label>
        <input id="todoTitle"></input>
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default AddTodoForm;
