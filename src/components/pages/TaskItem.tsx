import React from "react";

export const Task = (task: any) => {
  return (
    <li className="li">
      <div className="row">
        <input type="checkbox"></input>
        <p className="">{task.nameTask}</p>
      </div>
    </li>
  );
};
