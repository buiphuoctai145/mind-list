import React from "react";
import { Todo } from "src/types/todo";

export const TaskItem = ({ data, onCheck }: { data: Todo; onCheck?: () => void }) => {
  return (
    <div className="flex flex-col bg-gray-100 shadow p-2 rounded-sm">
      <div
        className="w-6 h-6 bg-white rounded-md border border-gray-300 flex flex-col items-center justify-center"
        onClick={onCheck}
      >
        {data.checked ? <div className="w-4 h-4 bg-gray-500 rounded-md" /> : null}
      </div>
      <p className="font-bold">{data.name}</p>
      <p className="text-sm">{data.description}</p>
    </div>
  );
};
