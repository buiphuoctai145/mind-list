import React from "react";

export type Todo = {
  taskID: string;
  nameTask: string;
  isCompleted: boolean;
};

type TodoProps = {
  todo: Todo;
};

export const Row = ({ todo: { nameTask, isCompleted } }: TodoProps) => (
  <div>
    <p>{nameTask}</p>
    <div>
      <button aria-label="Delete a task" onClick={() => null}>
        X
      </button>
      <input type="checkbox" checked={isCompleted} onChange={() => null} />
    </div>
  </div>
);
