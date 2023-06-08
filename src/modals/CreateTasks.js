import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreateTask = ({modal, toggle}) => {
    const [taskName, setTaskname] = useState('')
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create new task</ModalHeader>
      <ModalBody>
        <form>
            <div className = "form-group">
                <label>Task name</label>
                <input type="text" className="form-control"/>
            </div>
            <div className = "mt-2 form-group">
                <label>Description</label>
                <textarea rows="6" className="form-control"></textarea>
            </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>Create</Button>{" "}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTask;
