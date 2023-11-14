import React, { useState } from 'react';
import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode';
 import styled from 'styled-components';
const PopupAddrCss = styled.div`
margin: 0 auto;

       width: 90%;
    height: 40px;

button{ 
    border-radius: 10px;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
   }


`
const PopupAddr = ({setInputAdd,setInputAdd2}) => {
	// 팝업창 상태 관리
    const [isPopupOpen, setIsPopupOpen] = useState(false)
 
	// 팝업창 열기
    const openPostCode = () => {
        setIsPopupOpen(true)
    }
 
	// 팝업창 닫기
    const closePostCode = () => {
        setIsPopupOpen(false)
    }
 
    return(
        <PopupAddrCss>
       
            <button type='button' onClick={openPostCode}>우편번호 검색</button>
      
            <div id='popupDom'>
                {isPopupOpen && (
                    <PopupDom>
                        <PopupPostCode onClose={closePostCode} setInputAdd={setInputAdd} setInputAdd2={setInputAdd2} />
                    </PopupDom>
                )}
            </div>
        </PopupAddrCss>
    )
}
 
export default PopupAddr;