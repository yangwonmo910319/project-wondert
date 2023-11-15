/*원모 페이지 */
import { useEffect } from "react";
import { useState } from "react";
import styled, { css } from "styled-components";
import UserAxiosApi from "../../api/UserAxiosApi";
const ChangemyinfoCss = styled.div`

margin-top: 50px;
  .memo {
    width: 500px;
    font-size: 25px;
    border-bottom: 5px solid  #F4CE14;
    display: flex;
    p {
      font-size: 12px;
vertical-align: bottom;
      margin-left: 30px;
      margin-top: 10px;
   
    }
  }
`;

const InfoView = styled.div`
  width: 500px;
 margin-top: 50px;

  /* margin: 0 auto; */
  input {
    width:auto; 
    

    border: 1px solid rgba(73, 94, 87, 0);
  }
  ul > :first-child{
    border-top: 0.5px solid #b3b3b3;
  
  }
  ul{
    width: 100%;
    height: 100%;
  }
  li {
    display: flex;
 background-color: #f5f5f5da;
    padding: 5px;
    white:100%;
    border-top: 0.5px solid #b3b3b3;
  
   
  }
  
`;
const ChangnBtn = styled.button`
  
margin-left: 120px;
  &:hover {
    background:   #F4CE14;
  }


`;

const ChageTitle = styled.div`
font-size:15px;
display: flex;
flex-wrap: nowrap;
align-items: center;
width: 150px;
height: 10px;
padding: 10px 2px;

`;
const UserOut = () => {
  const userid=window.localStorage.getItem("userId");
  const [pw,setPw]=useState('');
  const [ckpw,setckPw]=useState('');
  const [ckpw2,setckPw2]=useState('');
  const [reset,setReset]=useState(false);
  useEffect(()=>{  
    const onUserCheck=async()=>{    
       const res = await UserAxiosApi.Userinfo(userid);
    
       if(res.status===200){
      setPw(res.data[0].userPw);
    }else{
console.log("해당 아이디가 없습니다.")
    }
  };
  onUserCheck();
},[reset])

const deleteUser=()=>{
 if(pw===ckpw&& ckpw===ckpw2){
  const deleteUser1 = async () => {
    try {   
    const res = await UserAxiosApi.deleteUser1(userid);
  }catch (error) {
    console.log(error);
  }
}
deleteUser1();

 }
}
  return (
    <>
      <ChangemyinfoCss>
        <div className="memo">
          <h3>회원 탈퇴</h3>
          <p>탈퇴시 게시글은 삭제되지만 댓글은 유지됩니다.</p>
        </div>
        <InfoView>
          <ul>
            <li>
              <ChageTitle>삭제 아이디</ChageTitle>
              <input type="text"></input>
              <ChangnBtn onClick={deleteUser}>삭제</ChangnBtn>
            </li>
            <li>
              <ChageTitle>비밀번호</ChageTitle>
              <input type="password" value={ckpw}onChange={(e) => setckPw(e.target.value)} />
              
            </li>
            <li>
              <ChageTitle>비밀번호 재입력 </ChageTitle>
              <input type="password" value={ckpw2}onChange={(e) => setckPw2(e.target.value)} />
         
            </li>
          </ul>
        </InfoView>
      </ChangemyinfoCss>
    </>
  );
};

export default UserOut;
