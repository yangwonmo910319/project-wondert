import axios from "axios";

const WONDER_WALKER = "http://localhost:8111";

const DiyAxiosApi = {

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
  Signup: async (id,nick,pwd,name,addr,phone,email) => {
    const userInfo = {
      id: id,
      nick:nick,
      pwd: pwd,
      name: name,
      addr:addr,
      phone:phone,
      email: email,
    };
    return await axios.post(WONDER_WALKER + `/users/signup`,userInfo);
  },

  goodsList: async (world) => {
    //겟 바디영역
    return await axios.get(WONDER_WALKER + `/Goods?world=${world}`);
  },

  //상품상세페이지 조회
  goodsInfo: async (itemCode) => {
    //겟 바디영역
    return await axios.get(WONDER_WALKER + `/Goods/info?itemCode=${itemCode}`);
    },
      // 여행정보 공유 메인 화면
  travelList: async (world,theme) => {
        console.log(("액시오스") + world,theme);
        return await axios.get(WONDER_WALKER + `/DiyPage/Diyview?world=${world}&theme=${theme}`);
    },
      // 메인에 목록 화면 조회(누르는 것 마다 바뀌게)
  travelGet: async (num,pic,title,id,writeDate,view) => {
        const writeGet = {
          num: num,
          pic: pic,
          title:title,
          id:id,
          writeDate: writeDate,
          view: view,
    };
        return await axios.post(WONDER_WALKER + `/DiyPage/?travelNum=${num}`);
      },
      // 게시글 조회
      CommunityList: async () => {
        return await axios.get(WONDER_WALKER + `/DiyPage`);
      },
      //게시글 상세 조회
      CommunityDetail: async (travel_num) => {
        return await axios.get(WONDER_WALKER + `/DiyPage/Diyview/${travel_num}`);
      },

      CommunityWrite : async (travel_num,d_day,travel_pic,travel_writing,travel_map) => {
        const board = {
          travel_num: travel_num,
          d_day : d_day,
          travel_pic : travel_pic,
          travel_writing : travel_writing,
          travel_map : travel_map,
        };
      return await axios.post(WONDER_WALKER + `/DiyPage/DiyWrite`,board)}
    };
export default DiyAxiosApi;