import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import EditPostForm from './EditPostForm.js';

function EditPostModal({id}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button variant="contained" color="secondary"
      onClick={() => setShowModal(true)}>Edit</Button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditPostForm setShowModal={setShowModal} id={id}/>
        </Modal>
      )}
    </>
  );
}

export default EditPostModal;