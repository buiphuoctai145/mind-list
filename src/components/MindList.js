import React, { useState } from "react";
import CreateTask from "../modals/CreateTask";

const MindList = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  }
  return (
    <div>
      <div className="header-container text-center">
        <h3>MindList</h3>
        <button className="btn btn-primary mt-3" onClick={() => setModal(true)}>
          Create task
        </button>
      </div>
      <div className="task-container"></div>
      <CreateTask toggle={toggle} modal={modal} />
    </div>
  );
};

export default MindList;
