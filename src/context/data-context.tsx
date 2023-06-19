import type { ReactNode } from "react";
import React, { createContext, useState } from "react";
import { TEST_DATA } from "src/components/pages";

import { Todo } from "src/types/todo";

interface DataxtProps {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const DataContext = createContext({} as DataxtProps);

const DataProvider = ({ children }: { children: ReactNode }) => {
  const [todoList, setTodoList] = useState<Todo[]>(TEST_DATA);

  const value = { todoList, setTodoList };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export { DataContext, DataProvider };
