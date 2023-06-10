import React, { useState } from "react";
import { ModalCreateTask } from "../modals";

export const MindList = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };

  const _onCreate = (taskName: string, description: string) => {
    console.log(taskName, description);
  };

  return (
    <div>
      <div className="header-container test text-center">
        <h3>MindList</h3>
        <button className="mt-3 bg-blue-600 py-1 px-5 rounded-md text-white" onClick={() => setModal(true)}>
          Create task
        </button>
      </div>
      <div className="task-container"></div>
      <ModalCreateTask onClose={toggle} onCreate={_onCreate} isVisible={modal} />
    </div>
  );
};
