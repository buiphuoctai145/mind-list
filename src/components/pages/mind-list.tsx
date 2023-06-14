import React, { useMemo, useState } from "react";
import { ModalCreateTask } from "../modals";
import { Todo } from "src/types/todo";
import { TaskItem } from "./task-item";

export const MindList = () => {
  const [modal, setModal] = useState(false);

  const [todoList, setTodoList] = useState<Todo[]>(TEST_DATA);
  const [categories, setCategories] = useState<string[]>(["homework", "job"]);

  const _onCreate = (taskName: string, description: string, category: string) => {
    // setTodoList([...todoList, { name: taskName, description }]);
    setTodoList((current) => [...current, { name: taskName, description, category }]);
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

  // const completedTask = todoList.filter((item) => item.checked).length;
  const completedTask = useMemo(() => todoList.filter((item) => item.checked).length, [todoList]);

  return (
    <div>
      <div className="header-container test text-center">
        <h3>MindList</h3>
        <button className="mt-3 bg-blue-600 py-1 px-5 rounded-md text-white" onClick={() => setModal(true)}>
          Create task
        </button>
      </div>
      <div className="flex flex-col gap-2 p-5">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-600 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Task Name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        {todoList.map((todo, index) => (
          <TaskItem data={todo} key={index} onCheck={() => _onCheck(index)} onRemove={() => _onRemove(index)} />
        ))}
      </div>
      <div className="flex items-center"></div>
      {todoList.length === 0 ? (
        <p>Please add task</p>
      ) : (
        <p>
          {completedTask} / {todoList.length} completed
        </p>
      )}
      <ModalCreateTask
        categories={categories}
        setCategories={setCategories}
        onClose={() => setModal(false)}
        onCreate={_onCreate}
        isVisible={modal}
      />
    </div>
  );
};

const TEST_DATA = [
  {
    name: "hoc",
    description: "study",
    category: "homework",
  },
  {
    name: "an com",
    description: "an com",
    category: "housework",
  },
  {
    name: "nau com",
    description: "nau com",
    category: "housework",
  },
  {
    name: "quet nha",
    description: "quet nha",
    category: "housework",
  },
  {
    name: "freelance",
    description: "di lam",
    category: "job",
  },
  {
    name: "qc",
    description: "di lam",
    category: "job",
  },
];
