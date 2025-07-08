import { useState } from "react";
import TodoItem from "./components/TodoItem";
import type { Todo } from "./types";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn react", completed: true },
    { id: 2, text: "Go shopping", completed: false },
    { id: 3, text: "Buy flowers", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim()) {
      const todo: Todo = {
        id: Date.now(),
        text: newTodo.trim(),
        completed: false,
      };
      setTodos([todo, ...todos]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-4">
        <h1 className="text-3xl font-medium text-blue-400 mb-4">Todo list</h1>
        <div>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))}
        </div>
        <div className="flex mt-2">
          <input
            className="flex-1 p-2 rounded-l bg-white text-gray-800"
            placeholder="add a new todo..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
          />
          <button
            onClick={addTodo}
            className="bg-white px-4 text-black ml-2 rounded-r hover:bg-gray-200 cursor-pointer"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
