import React from "react";

export const CreateTask = ({ isVisible, onClose }: { isVisible: boolean; onClose: () => void }) => {
  // const [taskName, setTaskname] = useState("");
  const style = {
    modal: `fixed top-0 h-screen w-screen bg-black/80 flex flex-col items-center justify-center`,
    container: `flex flex-col bg-white rounded-lg p-5`,
    modalheader:`text-2xl font-medium text-center`,
    tasknamelabel:`block font-bold mb-2`,
    descriptionlabel:`block font-bold mb-2`,
    tasknameinput:`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline`,
    descriptiontextarea:`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`,
    createbutton:`bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline`,
    cancelbutton:`bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline`,

  };
  if (!isVisible) return null;
  return (
    <div className={style.modal}>
      <div className={style.container}>
        <div className={style.modalheader}>Create new task</div>
        <div className="mb-4">
          <label className={style.tasknamelabel}>Task name</label>
          <input type="text" className={style.tasknameinput} />
        </div>
        <div className="mt-2 mb-4 form-group">
          <label className={style.descriptionlabel}>Description</label>
          <textarea rows={6} className={style.descriptiontextarea} />
        </div>
        <div className="flex items-center gap-2">
          <button className={style.createbutton} onClick={onClose}>
            Create
          </button>
          <button className={style.cancelbutton} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
