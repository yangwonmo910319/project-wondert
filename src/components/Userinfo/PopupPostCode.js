import React from 'react';
import DaumPostcode from "react-daum-postcode";
 import styled from 'styled-components';
 const PopupPostCodeCss =styled.div`
 width: 100%;
 height: 100%;
 `;

const PopupPostCode = (props) => {
	// 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
    const handlePostCode = (data) => {
        let fullAddress = data.address;
        let extraAddress = ''; 
        
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log(data)
        console.log(fullAddress)//주소
        console.log(data.zonecode)//지번
        props.onClose()
        props.setInputAdd(fullAddress)
        props.setInputAdd2(data.zonecode)
    }
 
    const postCodeStyle = {
        display: "block",
        position: "absolute",
        top: "10%",
        width: "500px",
        height: "500px",
        padding: "7px",
      };
 
    return(
        <PopupPostCodeCss>
            <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />
  
            <button type='button' onClick={() => {props.onClose()}} className='postCode_btn'>닫기</button>
        </PopupPostCodeCss>
    )
}
 
export default PopupPostCode;