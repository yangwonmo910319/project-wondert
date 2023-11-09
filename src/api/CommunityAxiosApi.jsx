import axios from "axios";

const WONDER_WALKER = "http://localhost:8111";

const CommunityAxiosApi = {

// 커뮤니티 모든글 가져오기
SelectAllCommunity: async () => {

  return await axios.get(WONDER_WALKER + "/community/SelectAllCommunity");
},

// 커뮤니티 글 하나 가져오기
SelectOneCommunity: async (num) => {
    return await axios.get(WONDER_WALKER + `/community/OneSelectCommunity/?num=${num}`);
  },

  // 커뮤니티 글등록
  InsertCommunity: async (userId,reportingDate,views,Title,constent1) => {
    const content = {
        userId: userId,
        reportingDate:reportingDate,
        views: views,
        Title: Title,
        constent1:constent1,
    };
    return await axios.get(WONDER_WALKER + `/community/InsertCommunity`,content);
  },
  // 커뮤니티 글 삭제
  DeleteCommunity: async (num) => {   
    return await axios.get(WONDER_WALKER + `/community/DeleteCommunity/?num=${num}`);
  },
    // 커뮤니티 글 수정
    UpdateCommunity: async  (userId,reportingDate,views,Title,constent1)=> {   
        const content = {
            userId: userId,
            reportingDate:reportingDate,
            views: views,
            Title: Title,
            constent1:constent1,
        };
        return await axios.get(WONDER_WALKER + `/community/UpdateCommunity}`,content);
      },
}

export default CommunityAxiosApi;