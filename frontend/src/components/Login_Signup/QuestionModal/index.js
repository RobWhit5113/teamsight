import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import QuestionComponent from './QuestionComponent';

function QuestionModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button variant="outlined" color="primary"
      onClick={() => setShowModal(true)}>Sign Up</Button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <QuestionComponent setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default QuestionModal;