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
    <div
      className={`flex shadow p-2 items-center rounded-sm" ${
        data.checked ? "bg-gray-500" : "bg-green-300"
      }`}
    >
      <div className="flex">
        <div className="flex-none w-14">
          <div
            className="w-6 h-6 bg-white rounded-md border border-gray-300 flex flex-col items-center justify-center"
            onClick={onCheck}
          >
            {data.checked ? (
              <div className="w-4 h-4 bg-gray-500 rounded-md" />
            ) : null}
          </div>
        </div>
      </div>
      <div className="grow">
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
      <div className="flex-none">
          <button
            onClick={onRemove}
            className="bg-red-500 p-2 rounded-md text-white"
          >
            Delete
          </button>
        </div>
    </div>
  );
};
