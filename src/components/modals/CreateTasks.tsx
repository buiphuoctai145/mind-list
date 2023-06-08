import React from "react";

export const CreateTask = ({ isVisible, onClose }: { isVisible: boolean; onClose: () => void }) => {
  // const [taskName, setTaskname] = useState("");

  if (!isVisible) return null;
  return (
    <div className="fixed top-0 h-screen w-screen bg-black/80 flex flex-col items-center justify-center">
      <div className="flex flex-col bg-white rounded-lg p-5">
        <div className="text-2xl font-medium text-center">Create new task</div>
        <div className="flex">
          <label>Task name</label>
          <input type="text" className="border ml-2 rounded-sm border-gray-200" />
        </div>
        <div className="mt-2 form-group">
          <label>Description</label>
          <textarea rows={6} className="form-control" />
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-blue-300 p-2 text-white" onClick={onClose}>
            Create
          </button>
          <button className="bg-blue-300 p-2 text-white" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
