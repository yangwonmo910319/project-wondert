import axios from "axios";

const WONDER_WALKER = "http://localhost:8111";

const UserAxiosApi = {

// 로그인
Login: async (id, pw) => {
  const login = {
    id: id,
    pwd: pw,
  };
  return await axios.post(WONDER_WALKER + "/users/login", login);
},

  // 회원가입시 아이디 체크
  SingupIdCheck: async (id) => {
    return await axios.get(WONDER_WALKER + `/users/idcheck/?id=${id}`);
  },

  // 회원가입 inselrt
  Signup: async (id,nick,pwd,name,add,phone,mail) => {
    const userInfo = {
      id: id,
      nick:nick,
      pwd: pwd,
      name: name,
      add:add,
      phone:phone,
      mail: mail,
    };
    return await axios.post(WONDER_WALKER + `/users/signup`,userInfo);
  },

}

export default UserAxiosApi;