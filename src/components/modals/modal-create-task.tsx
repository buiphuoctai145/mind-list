import React, { useState } from "react";

export const ModalCreateTask = ({
  isVisible,
  onClose,
  onCreate,
}: {
  isVisible: boolean;
  onClose: () => void;
  onCreate: (taskName: string, description: string) => void;
}) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const _onCreate = () => {
    onCreate(taskName, description);
    onClose();
  };

  if (!isVisible) return null;
  return (
    <div className="fixed top-0 h-screen w-screen bg-black/80 flex flex-col items-center justify-center">
      <div className="flex flex-col bg-white rounded-lg p-5">
        <div className="text-2xl font-medium text-center">Create new task</div>

        <div className="mb-4">
          <label className="block font-bold mb-2">Task name</label>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mt-2 mb-4 form-group">
          <label className="block font-bold mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={6}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <BottomButtonRow onCancel={onClose} onCreate={_onCreate} />
      </div>
    </div>
  );
};

const BottomButtonRow = ({ onCreate, onCancel }: { onCreate: () => void; onCancel: () => void }) => {
  return (
    <div className="flex items-center gap-2">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={onCreate}
      >
        Create
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={onCancel}
      >
        Cancel
      </button>
    </div>
  );
};
