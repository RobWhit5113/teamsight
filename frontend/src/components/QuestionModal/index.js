import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import QuestionComponent from './QuestionComponent';

function QuestionModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Sign Up</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <QuestionComponent setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default QuestionModal;