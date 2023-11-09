import React, { useState } from 'react';
import Modal from '../../components/Userinfo/ModalTest'; 

function ModalTest2() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputData, setInputData] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = (data) => {
    // 모달에서 전달받은 데이터 처리
    console.log('Received data:', data);
    setInputData(data);
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      {/* 모달이 열려있을 때만 렌더링 */}
      {isModalOpen && (
        <Modal onClose={closeModal} onConfirm={handleConfirm} />
      )}

      {/* 입력된 데이터 표시 */}
      {inputData && <p>Input Data: {inputData}</p>}
    </div>
  );
}

export default ModalTest2;