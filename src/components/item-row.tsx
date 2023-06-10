import React from "react";

export const ItemRow = ({ todo: { nameTask, isCompleted } }: any) => (
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
