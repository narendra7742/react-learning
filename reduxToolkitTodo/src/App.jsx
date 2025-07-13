import {} from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center">
        Learn about Redux toolKit
      </h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
