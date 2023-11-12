/*원모 페이지 */
import styled, { css } from "styled-components";
import UserAxiosApi from "../../api/UserAxiosApi";
import { useEffect, useState } from "react";
import ModalTest from "./ModalTest2";
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

`;
const ChageTitle = styled.div`
font-size:15px;
display: flex;
align-items: center;
width: 80px;
height: 10px;
padding: 10px 2px;

`;
const SecretView=styled.div`
    width: 100%;
    max-width: 500px;
 margin-top: 50px;
 height:100px;

 .SecretBox{
  width: 100%;
  height: 30px;
  margin:  auto;

  display: flex;
  input{
  width: 85%;
  }
  button{
  margin-left: 30px;

width: 50px;
  }
 }
`;
const Changemyinfo = () => {
  const userid=window.localStorage.getItem("userId");
  const [secret,setSecret] = useState(false);
const [userinfo,setUserinfo]=useState("");
const [pw,setPw]=useState('');
const [reset,setReset]=useState(false);
const chageSecret = ()=>{
  if(pw===userinfo.userPw){
    setSecret(true)
  }else{
  }
}
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
},[reset])

const chageinfo = (e, value) => {
    const updateinfo = async () => {
      try {
         const updateinfo = await UserAxiosApi.updateUserInfo(userid,e, value);
      } catch (error) {
        console.log(error);
      }
    };

    updateinfo(); 
    setReset(!reset);
  };








  return (
    <>
      <ChangemyinfoCss>
     
        <div className="memo">
          <h3>개인정보 변경</h3>
          <p>고객님의 개인정보보호를 위해 최선을 다하겠습니다.</p>
        </div>   
        {secret ?    
         <InfoView>
          <ul>
            <li>
              <ChageTitle>ID </ChageTitle>
              <input  type="text"  value={userinfo.userId} 
              onChange={(e) => {setUserinfo({ ...userinfo, userId: e.target.value }); }}/>
              <ChangnBtn onClick={()=>{chageinfo("USERID",userinfo.userId)}}>변경</ChangnBtn>
            </li>
            <li>
              <ChageTitle>이름 </ChageTitle>
              <input type="text"value={userinfo.userName}
              onChange={(e) => {setUserinfo({ ...userinfo, userName: e.target.value }); }}></input>
              <ChangnBtn onClick={()=>{chageinfo("USERNAME",userinfo.userName)}}>개명</ChangnBtn>              
            </li>
          <li>  
              <ChageTitle>닉네임    </ChageTitle>
              <input type="text" value={userinfo.nick}
              onChange={(e) => {setUserinfo({ ...userinfo, nick: e.target.value }); }}></input>
              <ChangnBtn onClick={()=>{chageinfo("NICK",userinfo.nick)}}>변경</ChangnBtn>
           
            </li>
            <li>  
              <ChageTitle>주소    </ChageTitle>
              <input type="text" value={userinfo.addr}
              onChange={(e) => {setUserinfo({ ...userinfo, addr: e.target.value }); }}></input>
              <ChangnBtn  onClick={()=>{chageinfo("ADDR",userinfo.addr)}}>변경</ChangnBtn>
           
            </li>
            <li>
              <ChageTitle 번호>휴대폰 번호       </ChageTitle>
              <input type="text" value={userinfo.phoneNum}
              onChange={(e) => {setUserinfo({ ...userinfo, phoneNum: e.target.value }); }}></input>
              <ChangnBtn onClick={()=>{chageinfo("PHONENUM",userinfo.phoneNum)}}>변경</ChangnBtn>
       
            </li>
            <li>
              <ChageTitle>이메일      </ChageTitle>
                 <input type="text" value={userinfo.email}
                 onChange={(e) => {setUserinfo({ ...userinfo, email: e.target.value }); }}></input>
              <ChangnBtn  onClick={()=>{chageinfo("EMAIL",userinfo.email)}}>변경</ChangnBtn>
       
            </li> 
          </ul>
        </InfoView> :
         

        <SecretView>
          <div className="SecretBox">
             <input type="text" placeholder="비밀번호를 입력하세요" onChange={(e) => setPw(e.target.value)} ></input>
             <ChangnBtn  onClick={()=>{chageSecret()}}>변경</ChangnBtn>
          </div>
        </SecretView>
        }
      
      </ChangemyinfoCss>
    </>
  );
};

export default Changemyinfo;
