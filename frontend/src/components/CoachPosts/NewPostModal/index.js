import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import NewPostForm from './NewPostForm.js';

function NewPostModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button variant="contained" color="primary"
      onClick={() => setShowModal(true)}>Create a new post</Button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <NewPostForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default NewPostModal;