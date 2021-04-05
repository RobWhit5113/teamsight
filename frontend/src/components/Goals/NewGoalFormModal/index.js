import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import NewGoalForm from './NewGoalForm.js';

function NewGoalModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button variant="contained" color="primary"
      onClick={() => setShowModal(true)}>create a new goal</Button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <NewGoalForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default NewGoalModal;