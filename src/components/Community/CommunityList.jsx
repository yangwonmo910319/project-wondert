import { useEffect, useState } from "react";
import { Pagination } from "./Pagination";
import {CommunityListMap} from "./communityListMap"; // 수정된 부분
const CommunityList = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
  
    useEffect(() => {
      // 임시로 생성한 데이터
      const temporaryData = [
        { id: 1, title: "게시물 1" },
        { id: 2, title: "게시물 2" },
        { id: 3, title: "게시물 3" },
        { id: 4, title: "게시물 1" },
        { id: 5, title: "게시물 2" },
        { id: 6, title: "게시물 3" },
        { id: 7, title: "게시물 1" },
        { id: 8, title: "게시물 2" },
        { id: 9, title: "게시물 3" },
        { id: 10, title: "게시물 1" },
        { id: 1, title: "게시물 1" },
        { id: 2, title: "게시물 2" },
        { id: 3, title: "게시물 3" },
        { id: 4, title: "게시물 1" },
        { id: 5, title: "게시물 2" },
        { id: 6, title: "게시물 3" },
        { id: 7, title: "게시물 1" },
        { id: 8, title: "게시물 2" },
        { id: 9, title: "게시물 3" },
        { id: 10, title: "게시물 1" },
        // ... 추가 데이터
      ];
 
      setPosts(temporaryData);
    }, []);
  
    const firstPostIndex = (currentPage - 1) * postsPerPage;
    const lastPostIndex = firstPostIndex + postsPerPage;
    const currentPosts = posts.slice(firstPostIndex, lastPostIndex);
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
    return (
      <>
        <header>
          <h1>게시물 목록</h1>
        </header>
  
        <main>
          <CommunityListMap list={currentPosts} />
        </main>
  
        <footer>
        <Pagination
          postsNum={posts.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          handlePageChange={handlePageChange} // 수정된 부분
        />
      </footer>
      </>
    );
  };
  
  export default CommunityList;