import React, { useState } from 'react';

const ModalTest = ({ onClose, onConfirm }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleConfirmClick = () => {
    // 부모 컴포넌트로 데이터 전달
    onConfirm(inputValue);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Modal</h2>
        <label>
          Input Data:
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </label>
        <button onClick={handleConfirmClick}>Confirm</button>
      </div>
    </div>
  );
};

export default ModalTest;