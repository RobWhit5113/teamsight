import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import EditGoalForm from './EditGoalForm.js';

function EditGoalModal({id}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button variant="contained" color="secondary"
      onClick={() => setShowModal(true)}>edit goal</Button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditGoalForm setShowModal={setShowModal} id={id}/>
        </Modal>
      )}
    </>
  );
}

export default EditGoalModal;