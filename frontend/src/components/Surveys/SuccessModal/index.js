import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import SuccessBox from './SuccessBox';

function SuccessModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SuccessBox />
        </Modal>
      )}
    </>
  );
}

export default SuccessModal;