import React, { useState } from 'react';
import styled from 'styled-components';
//버튼 눌러서 나오는 창 CSS
const ModalTestCss=styled.div`
width: 100%;
height: 100%;
 position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgb(0 0 0 / 60%);
    height: 100%; 
.modal{
  margin: 0 auto;
  width: 300px;
height: 100px;

}
input{
  margin-top: 100px;
  width: 300px;
  height: 30px;
}
button{
  width: 300px;
  height: 30px;
}
/* .modal-content{

background-color: green;
}
.close{

background-color: pink;
}
label{
  
} */
`;
const ModalTest = ({ onClose, onConfirm,disableCloseOnOutsideClick }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleConfirmClick = () => {
    // 부모 컴포넌트로 데이터 전달
    onConfirm(inputValue);   
  };
  const handleOverlayClick = (e) => {
    if (!disableCloseOnOutsideClick && e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <ModalTestCss>
    <div className="modal"  onClick={handleOverlayClick}>
      
      <div className="modal-content">
    
        <label>  
          <input type="text" placeholder='비밀번호를 입력하세요' value={inputValue} onChange={handleInputChange}
            onKeyDown={(e) => e.key === 'Enter' && handleConfirmClick()} />
        </label>
        <button onClick={handleConfirmClick}>확 인</button>
        <button onClick={()=>{onClose()}}>취 소</button>
      </div>
    </div>
    </ModalTestCss>
  );
};

export default ModalTest;

