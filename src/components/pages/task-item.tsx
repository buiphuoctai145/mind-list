import React from "react";
import { Todo } from "src/types/todo";

export const TaskItem = ({
  data,
  onCheck,
  onRemove,
  onEdit,
  onFlag,
  onPin,
}: {
  data: Todo;
  onCheck?: () => void;
  onRemove?: () => void;
  onEdit?: () => void;
  onFlag?: () => void;
  onPin?: () => void;
}) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <tbody>
          <tr className={`bg-white border-b dark:bg-${data.flagged ? 'green' : 'gray'}-800 dark:border-gray-700`}>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
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
            </th>
            <td className="px-6 py-4 text-center">
              <div className="grow">
                {data.checked ? (
                  <p className="font-bold line-through">{data.category}</p>
                ) : (
                  <p className="font-bold">{data.category}</p>
                )}
              </div>
            </td>
            <td className="px-6 py-4">
              <div className="flex-none float-right">
                <button
                  onClick={onPin}
                  className="bg-pink-500 ml-2 p-2 rounded-md text-white"
                >
                  {data.isPin ? 'Unpin' : 'Pin'} task
                </button>
                <button
                  onClick={onFlag}
                  className="bg-green-500 ml-2 p-2 rounded-md text-white"
                >
                  Flag
                </button>
                <button
                  onClick={onEdit}
                  className="bg-blue-500 ml-2 p-2 rounded-md text-white"
                >
                  Edit
                </button>
                <button
                  onClick={onRemove}
                  className="bg-red-500 ml-2 p-2 rounded-md text-white"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
