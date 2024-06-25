import React from "react";

function TodoList() {
  const todoList = [
    { id: 1, title: "Drumming" },
    { id: 2, title: "Coding" },
    { id: 3, title: "Socializing" },
  ];
  return (
    <ul>
      {todoList.map((item) => {
        return (
          <li key={item.id} style={{ listStyle: "none" }}>
            {item.title}
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
