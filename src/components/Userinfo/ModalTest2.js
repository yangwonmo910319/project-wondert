import React, { useState } from 'react';
import Modal from '../../components/Userinfo/ModalTest'; 
import styled from 'styled-components';
const ModalTest2Css=styled.div`
width: 100vw;
height: 100vh;
background-color:${props => (props.color ? 'black' : 'white')};

>button {
    display: ${props => (props.color ? 'none' : 'block')};
  }
`;


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
    // <ModalTest2Css isModalOpen>
    <ModalTest2Css color={isModalOpen}>
      <h1>부모</h1>
      <button onClick={openModal}>입력창 열기(자식)</button>

      {/* 모달이 열려있을 때만 렌더링 */}
      {isModalOpen && (
        <Modal onClose={closeModal} onConfirm={handleConfirm} 
        disableCloseOnOutsideClick={true}
        />
      )}

      {/* 입력된 데이터 표시 */}
      {inputData && <p>받은값: {inputData}</p>}
    </ModalTest2Css>
  );
}

export default ModalTest2;