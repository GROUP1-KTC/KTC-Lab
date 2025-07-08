import type { Todo } from "../types";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="flex items-center justify-between border-b p-2 bg-white">
      <span
        className={`mr-2 ${todo.completed ? "text-blue-500" : "text-red-500"}`}
        onClick={() => onToggle(todo.id)}
      >
        {todo.completed ? (
          <AiOutlineCheck color="red" />
        ) : (
          <AiOutlineCheck color="blue" />
        )}
      </span>
      <span
        className={`flex-1 ${
          todo.completed
            ? "line-through text-red-500"
            : "text-blue-500 font-semibold"
        }`}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <button
        className="text-gray-500 hover:text-red-700"
        onClick={() => onDelete(todo.id)}
      >
        <AiOutlineClose />
      </button>
    </div>
  );
}
