import React from "react";
import { MindList } from "./pages";
import { DataProvider } from "src/context/data-context";

export const TodoPanel = () => {
  return (
    <div>
      <DataProvider>
        <MindList />
      </DataProvider>
    </div>
  );
};
