import React, { useState } from "react";
import { ModalCreateTask } from "../modals";
import { Todo } from "src/types/todo";
import { TaskItem } from "./task-item";

export const MindList = () => {
  const [modal, setModal] = useState(false);

  const [todoList, setTodoList] = useState<Todo[]>([]);

  const _onCreate = (taskName: string, description: string) => {
    console.log(taskName, description);
    // setTodoList([...todoList, { name: taskName, description }]);
    setTodoList((current) => [...current, { name: taskName, description }]);
  };

  const _onCheck = (index: number) => {
    const newTodoList = [...todoList];
    newTodoList[index].checked = !newTodoList[index].checked;
    setTodoList(newTodoList);
  };

  const _onRemove = (index: number) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
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
          <TaskItem data={todo} key={index} onCheck={() => _onCheck(index)} onRemove={() => _onRemove(index)} />
        ))}
      </div>
      <ModalCreateTask onClose={() => setModal(false)} onCreate={_onCreate} isVisible={modal} />
    </div>
  );
};
