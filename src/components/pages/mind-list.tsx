import React, { useState } from "react";
import { ModalCreateTask } from "../modals";
import { Todo } from "src/types/todo";
import { TaskItem } from "./task-item";

export const MindList = () => {
  const [modal, setModal] = useState(false);

  const [todoList, setTodoList] = useState<Todo[]>([]);

  const [completedTask, setCompletedTask] = useState(0)

  const _onCreate = (taskName: string, description: string) => {
    console.log(taskName, description);
    // setTodoList([...todoList, { name: taskName, description }]);
    setTodoList((current) => [...current, { name: taskName, description }]);
  };

  const _onCheck = (index: number) => {
    const newTodoList = [...todoList];
    const isChecked = newTodoList[index].checked;
    setCompletedTask(completedTask + (isChecked ? -1 : 1)) 
    newTodoList[index].checked = !newTodoList[index].checked;
    setTodoList(newTodoList);
  };

  const _onRemove = (index: number) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  // const todoRemaining = todoList.length > 0;

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
      <div className="flex items-center"></div>
      {
        todoList.length === 0 ? <p>Please add task</p> : <p>{completedTask} / {todoList.length} completed</p>
      }
      <ModalCreateTask onClose={() => setModal(false)} onCreate={_onCreate} isVisible={modal} />
    </div>
  );
};
