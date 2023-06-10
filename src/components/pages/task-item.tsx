import React from "react";
import { Todo } from "src/types/todo";

export const TaskItem = ({ data, checked }: { data: Todo; checked?: boolean }) => {
  return (
    <div className="flex flex-col bg-gray-100 shadow p-2 rounded-sm">
      <div className="w-6 h-6 bg-white rounded-md border border-gray-300 flex flex-col items-center justify-center">
        {checked ? <div className="w-4 h-4 bg-gray-800 rounded-md" /> : null}
      </div>
      <p className="font-bold">{data.name}</p>
      <p className="text-sm">{data.description}</p>
    </div>
  );
};
