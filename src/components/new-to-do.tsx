import { PlusCircle } from "lucide-react";
import { FormEvent, useState } from "react";

interface NewToDoProps {
  handleAddToDo: (description: string) => void;
}

export function NewToDo({ handleAddToDo }: NewToDoProps) {
  const [description, setDescription] = useState("");

  function handleAddNewToDo(event: FormEvent) {
    event.preventDefault();
    handleAddToDo(description);
    setDescription("");
  }

  return (
    <form onSubmit={handleAddNewToDo} className="flex gap-2 -my-7">
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        className="w-full h-[52px] bg-gray-500 border-2 border-gray-700 rounded-md text-base tracking-tight outline-none p-4 placeholder:text-gray-300"
      />
      <button className="flex items-center justify-center gap-2 bg-blue-dark w-24 rounded-md font-bold text-sm">
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  );
}
