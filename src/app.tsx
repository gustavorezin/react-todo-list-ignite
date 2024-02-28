import { ClipboardMinus } from "lucide-react";
import { useEffect, useState } from "react";
import { Header } from "./components/header";
import { NewToDo } from "./components/new-to-do";
import { ToDo } from "./components/to-do";
import "./index.css";

export function App() {
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const [toDosFinished, setToDosFinished] = useState(0);

  function handleAddToDo(description: string) {
    const newToDo: ToDo = {
      id: toDos.length + 1,
      description,
      isChecked: false,
    };
    setToDos((state) => [...state, newToDo]);
  }

  function handleCheckToDo(id: number) {
    const checkedToDos = toDos.filter((toDo) => {
      if (id === toDo.id) {
        toDo.isChecked = !toDo.isChecked;
      }
      return toDo;
    });
    setToDos(checkedToDos);
  }

  function handleDeleteToDo(id: number) {
    const updatedList = toDos.filter((item) => item.id != id);
    setToDos(updatedList);
  }

  useEffect(() => {
    let countFinished = 0;
    toDos.forEach((toDo) =>
      toDo.isChecked === true ? (countFinished += 1) : 0
    );
    setToDosFinished(countFinished);
  }, [toDos]);

  return (
    <>
      <Header />
      <main className="max-w-[80%] mx-auto">
        <NewToDo handleAddToDo={handleAddToDo} />
        <div className="flex justify-between items-center mt-14 py-4">
          <div className="flex items-center gap-2">
            <p className="font-bold text-blue">Tarefas criadas</p>
            <span className="bg-gray-400 rounded-full px-2 text-gray-200 font-bold text-xs">
              {toDos.length}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-bold text-purple">Concluídas</p>
            <span className="bg-gray-400 rounded-full px-2 text-gray-200 font-bold text-xs">
              {toDos.length > 0 ? toDosFinished + " de " + toDos.length : 0}
            </span>
          </div>
        </div>
        {toDos.length == 0 ? (
          <div className="flex flex-col pt-14 items-center justify-center text-base text-gray-300 border-t-2 border-gray-400">
            <ClipboardMinus size={56} strokeWidth={1} className="mb-4" />
            <h1 className="font-bold">
              Você ainda não tem tarefas cadastradas
            </h1>
            <p className="">Crie tarefas e organize seus itens a fazer</p>
          </div>
        ) : (
          toDos.map((toDo) => {
            return (
              <ToDo
                toDo={toDo}
                handleCheckToDo={handleCheckToDo}
                handleDeleteToDo={handleDeleteToDo}
                key={toDo.id}
              />
            );
          })
        )}
      </main>
    </>
  );
}
