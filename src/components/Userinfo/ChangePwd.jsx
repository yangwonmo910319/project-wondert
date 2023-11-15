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
    width:100%;
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
const ChangePwd = () => {
  const userid=window.localStorage.getItem("userId");
  const [pw,setPw]=useState('');
  const [ckpw,setckPw]=useState('');
  const [newpw,setnewPw]=useState('');
  const [newpw2,setnewPw2]=useState('');

  const [secret,setSecret] = useState(false);  
  const [reset,setReset]=useState(false);

  const chageSecret = ()=>{
 
    if(pw===ckpw){
      setSecret(true)
    }else{  
    }  
  } 
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

const newPwck =()=>{
  if(newpw===newpw2){  
    const updateinfo = async () => {
    try {   
    const res = await UserAxiosApi.newPassword(userid,newpw);
  }catch (error) {
    console.log(error);
  }
}
updateinfo();

}else{
  alert("비밀번호를 확인하세요")
}
setnewPw2('')
setnewPw('')
  setReset(!reset);
}
  return (
    <>
      <ChangemyinfoCss>
        <div className="memo">
          <h3>비밀번호 변경</h3>
          <p>고객님의 개인정보보호를 위해 최선을 다하겠습니다.</p>
        </div>
        {secret ?    
        <InfoView>
          <ul>
            <li>
              <ChageTitle>새 비밀번호</ChageTitle>
              <input type="password" value={newpw}onChange={(e) => setnewPw(e.target.value)} />
            </li>
            <li>
              <ChageTitle>새 비밀번호 확인</ChageTitle>
              <input type="password" value={newpw2}onChange={(e) => setnewPw2(e.target.value)} />
              <ChangnBtn onClick={newPwck}>변경</ChangnBtn>
            </li>
          </ul>
        </InfoView>:   <SecretView>
          <div className="SecretBox">
             <input type="password" placeholder="비밀번호를 입력하세요" onChange={(e) => setckPw(e.target.value)} ></input>
             <ChangnBtn  onClick={()=>{chageSecret()}}>변경</ChangnBtn>
          </div>
        </SecretView>
             }
      </ChangemyinfoCss>
    </>
  );
};

export default ChangePwd;
