import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { edit_task } from "../JS/Actions/action";



const EditTask = ({ todo}) => {
  const [editedTask, setEditedTask] = useState(todo.name);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const edit = () => {
    dispatch(edit_task(todo.id, editedTask));
    handleClose();
  };

  return (
    <>
      <button className='todo-button' variant="primary" onClick={handleShow}>
       Edit
      </button>

      <Modal className='modal' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            onChange={(e) => setEditedTask(e.target.value)}
            className="todo-input"
            value={editedTask}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={edit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditTask;