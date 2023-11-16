import { useEffect, useState } from "react";
import { Pagination } from "./Pagination";
import {CommunityListMap} from "./communityListMap"; // 수정된 부분
const CommunityList = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);
  
    useEffect(() => {
      // 임시로 생성한 데이터          
      // setPosts(temporaryData);
    }, []);
  
    const firstPostIndex = (currentPage - 1) * postsPerPage;
    const lastPostIndex = firstPostIndex + postsPerPage;
    const currentPosts = posts.slice(firstPostIndex, lastPostIndex);
  
    // const handlePageChange = (pageNumber) => {
    //   setCurrentPage(pageNumber);
    // };
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
          // handlePageChange={handlePageChange} // 수정된 부분
        />
      </footer>
      </>
    );
  };
  
  export default CommunityList;