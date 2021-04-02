import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import PostPracticeForm from './PostPracticeForm'

function PostPracticeModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button variant="contained" color="secondary"
      onClick={() => setShowModal(true)}>Post-Practice Survey</Button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <PostPracticeForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  )
}

export default PostPracticeModal;