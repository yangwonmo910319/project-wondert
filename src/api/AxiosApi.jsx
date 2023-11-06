import axios from "axios";

const WONDER_WALKER = "http://localhost:8111";

const AxiosApi = {

// 게시글 조회
boardList: async () => {
    return await axios.get(WONDER_WALKER + "/api/board");
  },
  // 게시글 쓰기
  boardWrite: async (title, content, userId, img) => {
    const board = {
      title: title,
      content: content,
      userId: userId,
      img: img,
    };
    return await axios.post(WONDER_WALKER + "/api/board/new", board);
    } 
};

export default AxiosApi;