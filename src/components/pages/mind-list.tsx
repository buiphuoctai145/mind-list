import React, { useContext, useMemo, useRef, useState } from "react";
import { ModalCreateTask, ModalEditTask } from "../modals";
import { TaskItem } from "./task-item";
import { DataContext } from "src/context/data-context";

function replaceItem(array: any[], fromIndex: number, toIndex: number): any[] {
  const result = [...array];

  result.splice(fromIndex, 0, array[toIndex]);

  result.splice(toIndex + 1, 1);

  return result;
}

export const MindList = () => {
  const { todoList, setTodoList } = useContext(DataContext);

  const [modal, setModal] = useState(false);
  const [categories, setCategories] = useState<string[]>(["homework", "job"]);
  const [showmModalEdit, setShowModalEdit] = useState(false);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(-1);
  const startUnpinIndex = useRef(0);
  const previousTodoList = useRef(TEST_DATA);

  const _onCreate = (taskName: string, description: string, category: string) => {
    // setTodoList([...todoList, { name: taskName, description }]);
    setTodoList((current) => [...current, { name: taskName, description, category }]);
    _addCategory(category);
  };

  const _addCategory = (category: string) => {
    const findCategory = categories.find((item) => item === category);
    if (!findCategory) {
      setCategories((current) => [...current, category]);
    }
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
  const _onShowModalEdit = (index: number) => {
    setShowModalEdit(true);
    setSelectedTaskIndex(index);
  };

  const _onEdit = (taskName: string, description: string, category: string) => {
    const newTodoList = [...todoList];
    newTodoList[selectedTaskIndex] = { name: taskName, description, category };
    setTodoList(newTodoList);
  };

  // const completedTask = todoList.filter((item) => item.checked).length;
  const completedTask = useMemo(() => todoList.filter((item) => item.checked).length, [todoList]);
  // khi todoList thay doi thi thang useMemo se tinh lai, neu todoList khong thay doi thi useMemo se lay gia tri cu~
  // khi Dependencies thay doi, useMemo tra ve value, useCallback tra ve function

  const _onFlag = (index: any) => {
    const newTodoList = [...todoList];
    newTodoList[index].flagged = !newTodoList[index].flagged;
    setTodoList(newTodoList);
  };

  const _onPin = (index: any, isPin: any) => {
    // const newTodoList = [...todoList];
    // newTodoList[index].
    let newTodoList = [...todoList];
    newTodoList[index].isPin = !isPin;
    if (index > startUnpinIndex.current) {
      newTodoList = replaceItem(todoList, startUnpinIndex.current, index);
    }
    if (isPin) {
      setTodoList(previousTodoList.current);
    } else {
      previousTodoList.current = todoList;
      setTodoList(newTodoList);
    }
    startUnpinIndex.current += isPin ? -1 : 1;
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
          <TaskItem
            data={todo}
            key={index}
            onCheck={() => _onCheck(index)}
            onRemove={() => _onRemove(index)}
            onEdit={() => _onShowModalEdit(index)}
            onFlag={() => _onFlag(index)}
            onPin={() => _onPin(index, todo.isPin)}
          />
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

      <ModalCreateTask categories={categories} onClose={() => setModal(false)} onCreate={_onCreate} isVisible={modal} />
      <ModalEditTask
        data={todoList[selectedTaskIndex]}
        categories={categories}
        onClose={() => setShowModalEdit(false)}
        onEdit={_onEdit}
        isVisible={showmModalEdit}
      />
    </div>
  );
};

export const TEST_DATA = [
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
    category: "ejoy",
  },
  {
    name: "freelance",
    description: "di lam",
    category: "movie",
  },
  {
    name: "qc",
    description: "di lam",
    category: "job",
  },
];
