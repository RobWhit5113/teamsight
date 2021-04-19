import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import QuestionComponent from './QuestionComponent';
import '../LoginFormModal/LoginForm.css'

function QuestionModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div onClick={() => setShowModal(true)} className="signup-modal-div">
        <Typography variant="h6" color="secondary">
           Signup
         </Typography>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <QuestionComponent setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default QuestionModal;