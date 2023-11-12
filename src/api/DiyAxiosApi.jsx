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
        return await axios.get(WONDER_WALKER + `/DiyPage?world=${world}&theme=${theme}`);
    },

    // 게시글 눌렀을 때 보기 
   travelContent: async (travelNum) => {
    console.log(travelNum);
    return await axios.get(WONDER_WALKER + `/DiyPage/Diyview?travelNum=${travelNum}`)
   },

   // 게시물 등록
   travelInsert: async (travel_num,travel_userid,travel_world, travel_area,travel_startdate,travel_enddate,travel_theme,travel_title,travel_writedate) => {
    const insert = {
      travel_num:travel_num,
      travel_userid:travel_userid,
      travel_world:travel_world,
      travel_area:travel_area,
      travel_startdate:travel_startdate,
      travel_enddate:travel_enddate,
      travel_theme:travel_theme,
      travel_title:travel_title,
      travel_writedate:travel_writedate
    };
    return await axios.post(WONDER_WALKER + "/DiyPage/DiyWrite", insert);
   },
    // 게시물 등록2
    travelInsert2: async (travel_map,travel_pic,travel_writing) => {
      const insert2 = {
        travel_map:travel_map,
        travel_pic:travel_pic,
        travel_writing:travel_writing
      };
      return await axios.post(WONDER_WALKER + "/DiyPage/DiyWrite/days", insert2);
     },
  }
     
export default DiyAxiosApi;