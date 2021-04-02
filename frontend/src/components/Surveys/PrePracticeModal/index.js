import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import PrePracticeForm from './PrePracticeForm'

function PrePracticeModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button variant="contained" color="secondary"
      onClick={() => setShowModal(true)}>Pre-Practice Survey</Button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <PrePracticeForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  )
}

export default PrePracticeModal;