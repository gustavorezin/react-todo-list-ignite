import { Check, Trash2 } from "lucide-react";

export interface ToDo {
  id: number;
  description: string;
  isChecked: boolean;
}

interface ToDoProps {
  toDo: ToDo;
  handleCheckToDo: (id: number) => void;
  handleDeleteToDo: (id: number) => void;
}

export function ToDo({ toDo, handleCheckToDo, handleDeleteToDo }: ToDoProps) {
  return (
    <div
      className={`flex justify-between items-center rounded-md px-4 mb-4 gap-4 bg-gray-500 ${
        !toDo.isChecked ? "border-2 border-gray-400" : ""
      } min-h-[72px]`}
      key={toDo.id}
    >
      <div className="flex items-center gap-4">
        <label
          className="relative flex items-center rounded-full cursor-pointer"
          htmlFor={`check-${toDo.id}`}
        >
          <input
            type="checkbox"
            id={`check-${toDo.id}`}
            onClick={() => handleCheckToDo(toDo.id)}
            className="peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border-2 border-blue transition-all checked:border-none checked:bg-purple-dark"
          />
          <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <Check size={12} />
          </span>
        </label>
        <label
          className={`text-sm cursor-pointer select-none ${
            toDo.isChecked ? "line-through text-gray-300" : ""
          }`}
          htmlFor={`check-${toDo.id}`}
        >
          {toDo.description}
        </label>
      </div>
      <button onClick={() => handleDeleteToDo(toDo.id)}>
        <Trash2 size={20} className="text-gray-300 hover:text-danger" />
      </button>
    </div>
  );
}
