/*원모 페이지 */
import styled, { css } from "styled-components";
import UserAxiosApi from "../../api/UserAxiosApi";
import { useEffect, useState } from "react";
const ChangemyinfoCss = styled.div`

margin-top: 50px;
  .memo {
    width: 500px;
    font-size: 25px;
    border-bottom: 5px solid rgba(72, 100, 224, 1);
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
  width: 410px;
 margin-top: 50px;

  /* margin: 0 auto; */
  input {
    width: auto;
    height :24px ;
    margin-left:50px ;
    border: 1px solid rgba(73, 94, 87, 0);
  }
  ul > :first-child{
    border-top: 0.5px solid #b3b3b3;
  }
  ul{
    width: 500px;
    height: 100%;
  }
  li {
    display: flex;
 background-color: #f5f5f5da;

    padding: 5px;
    border-top: 0.5px solid #b3b3b3;
  
   
  }
  
`;
const ChangnBtn = styled.button`
  
margin-left: 140px;
  &:hover {
    background: rgba(72, 100, 224, 1);
    color:white;
  }
  /* ${(props) =>
    props.inverted &&
    css`
      background: red;
      border: 2px solid white;

      &:hover {
        background: #3f2525;
        color: black;
      }
    `}; */
  /* & + button {
    
  } */
`;
const ChageTitle = styled.div`
font-size:15px;
display: flex;
align-items: center;
width: 80px;
height: 10px;
padding: 10px 2px;

`;
const Changemyinfo = () => {
  const userid=window.localStorage.getItem("userId");
const [userinfo,setUserinfo]=useState("");
  useEffect(()=>{  
    const onUserCheck=async()=>{    
       const res = await UserAxiosApi.Userinfo(userid);
    if(res.status===200){
      setUserinfo(res.data[0]);
    }else{
console.log("해당 아이디가 없습니다.")
    }
  };
  onUserCheck();
},[])
const chageinfo=(e,value)=>{
  
alert(e);
alert(value);
}



  return (
    <>
      <ChangemyinfoCss>
        <div className="memo">
          <h3>개인정보 변경</h3>
          <p>고객님의 개인정보보호를 위해 최선을 다하겠습니다.</p>
        </div>

        <InfoView>
          <ul>
            <li>
              <ChageTitle>ID </ChageTitle>
              <input type="text" value={userinfo.userId}></input>
              <ChangnBtn onClick={()=>{chageinfo(1,userinfo.userId)}}>변경</ChangnBtn>
           
            </li>
            <li>
              <ChageTitle>이름 </ChageTitle>
              <input type="text"value={userinfo.userName}></input>
              <ChangnBtn onClick={()=>{chageinfo(2,userinfo.userName)}}>개명</ChangnBtn>              
            </li>
          <li>  
              <ChageTitle>닉네임    </ChageTitle>
              <input type="text" value={userinfo.nick}></input>
              <ChangnBtn onClick={()=>{chageinfo(3,userinfo.nick)}}>변경</ChangnBtn>
           
            </li>
            <li>  
              <ChageTitle>주소    </ChageTitle>
              <input type="text" value={userinfo.addr}></input>
              <ChangnBtn  onClick={()=>{chageinfo(4,userinfo.addr)}}>변경</ChangnBtn>
           
            </li>
            <li>
              <ChageTitle 번호>휴대폰 번호       </ChageTitle>
              <input type="text" value={userinfo.phoneNum}></input>
              <ChangnBtn onClick={()=>{chageinfo(5,userinfo.phoneNum)}}>변경</ChangnBtn>
       
            </li>
            <li>
              <ChageTitle>이메일      </ChageTitle>
                 <input type="text" value={userinfo.email}></input>
              <ChangnBtn  onClick={()=>{chageinfo(5,userinfo.email)}}>변경</ChangnBtn>
       
            </li> 
          </ul>
        </InfoView>
      </ChangemyinfoCss>
    </>
  );
};

export default Changemyinfo;
