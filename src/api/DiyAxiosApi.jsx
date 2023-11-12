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

    // 게시글 모두 가져오기
    CommunityAll: async () => {
      return await axios.get(WONDER_WALKER + `/DiyPage/CommunityAll`);
    },
    // 게시글 하나 가져오기
    CommunitySelectOne: async (travel_num) => {
      return await axios.get(WONDER_WALKER + `/DiyPage/CommunitySelectOne/?travel_num=${travel_num}`);
    },

    // 게시글 등록하기
    CommunityInsert: async (travel_num,travel_world,travel_theme,travel_area,travel_title,travel_startdate,travel_enddate,travel_userid,travel_writedate,d_day,travel_pic,travel_writing,travel_map) => {
      alert(travel_num)
      alert(travel_world)
      alert(travel_theme)
      alert(travel_area)
      alert(travel_title)
      alert(travel_startdate)
      alert(travel_enddate)
      alert(travel_userid)
      alert(travel_writedate)
      alert(d_day)
      alert(travel_pic)
      alert(travel_writing)
      alert(travel_map)
      
      const data = {
        travel_num:travel_num,
        travel_world:travel_world,
        travel_theme:travel_theme,
        travel_area:travel_area,
        travel_title:travel_title,
        travel_startdate:travel_startdate,
        travel_enddate:travel_enddate,
        travel_userid:travel_userid,
        travel_writedate:travel_writedate,
        d_day:d_day,
        travel_pic:travel_pic,
        travel_writing:travel_writing,
        travel_map:travel_map
      };
      return await axios.post(WONDER_WALKER + `/DiyPage/CommunityInsert`,data);
    }
  }
     
export default DiyAxiosApi;