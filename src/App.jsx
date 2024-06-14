import "./App.css";

const todoList = [
  { id: 1, title: "Drumming" },
  { id: 2, title: "Coding" },
  { id: 3, title: "Socializing" },
];

function App() {
  return (
    <>
      <h1>Todo List</h1>

      <ul>
        {todoList.map((item) => {
          return (
            <li key={item.id} style={{ listStyle: "none" }}>
              {item.title}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;