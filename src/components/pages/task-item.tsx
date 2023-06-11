import React from "react";
import { Todo } from "src/types/todo";

export const TaskItem = ({
  data,
  onCheck,
  onRemove,
}: {
  data: Todo;
  onCheck?: () => void;
  onRemove?: () => void;
}) => {
  return (
    <div className="flex bg-gray-100 shadow p-2 items-center rounded-sm">
      <div className="flex flex-col flex-1">
        <div
          className="w-6 h-6 bg-white rounded-md border border-gray-300 flex flex-col items-center justify-center"
          onClick={onCheck}
        >
          {data.checked ? (
            <div className="w-4 h-4 bg-gray-500 rounded-md" />
          ) : null}
        </div>
        {data.checked ? (
          <p className="font-bold line-through">{data.name}</p>
        ) : (
          <p className="font-bold">{data.name}</p>
        )}

        {data.checked ? (
          <p className="text-sm line-through">{data.description}</p>
        ) : (
          <p className="text-sm">{data.description}</p>
        )}
       
      </div>
      <button
        onClick={onRemove}
        className="bg-red-500 p-2 rounded-md text-white"
      >
        Delete
      </button>
    </div>
  );
};
