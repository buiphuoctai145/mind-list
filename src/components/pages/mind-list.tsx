import React, { useState } from "react";
import { ModalCreateTask } from "../modals";
import { Todo } from "src/types/todo";

export const MindList = () => {
  const [modal, setModal] = useState(false);

  const [todoList, setTodoList] = useState<Todo[]>([]);

  const toggle = () => {
    setModal(!modal);
  };

  const _onCreate = (taskName: string, description: string) => {
    console.log(taskName, description);
    // setTodoList([...todoList, { name: taskName, description }]);
    setTodoList((current) => [...current, { name: taskName, description }]);
  };

  return (
    <div>
      <div className="header-container test text-center">
        <h3>MindList</h3>
        <button className="mt-3 bg-blue-600 py-1 px-5 rounded-md text-white" onClick={() => setModal(true)}>
          Create task
        </button>
      </div>
      <div className="flex flex-col gap-2 p-5">
        {todoList.map((todo, index) => (
          <div key={index} className="flex flex-col bg-gray-50 shadow p-2 rounded-sm">
            <div className="font-bold text-xs">{index + 1}</div>
            <div className="font-bold text-lg">{todo.name}</div>
            <div className="text-sm">{todo.description}</div>
          </div>
        ))}
      </div>
      <ModalCreateTask onClose={toggle} onCreate={_onCreate} isVisible={modal} />
    </div>
  );
};
