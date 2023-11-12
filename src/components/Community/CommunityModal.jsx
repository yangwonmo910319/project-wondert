import React, { useState } from 'react';
import Modal from '../Userinfo/ModalTest'; 
import styled from 'styled-components';
const CommunityModalCss=styled.div`

width: 100px;
height: 100%;
left: -50%;


background-color: ${props => (!props.color ? 'rgba(0, 0, 0, 0.7)' : 'white')};

>button {
  border:none;
 
  }
`;


function CommunityModal() {
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
    <CommunityModalCss color={isModalOpen}> 
      <button onClick={openModal}></button>

      {/* 모달이 열려있을 때만 렌더링 */}
      {isModalOpen && (
        <Modal onClose={closeModal} onConfirm={handleConfirm} 
        disableCloseOnOutsideClick={true}
        />
      )}

      {/* 입력된 데이터 표시 */}
      {inputData && <p>받은값: {inputData}</p>}
    </CommunityModalCss>
  );
}

export default CommunityModal;