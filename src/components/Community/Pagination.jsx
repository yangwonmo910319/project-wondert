import styled from "styled-components";
const CommunityListMapCss=styled.div`
width: 100%;
height: auto;
  display:  flex;
justify-content: center;
 
button{
  border-radius: 8px;
  margin: 0 5px;
  height:25px;
  background-color:  #F4CE14;
}
button:active{
  background-color: #e0ded4;
}
`
export function Pagination({
  postsNum,
  postsPerPage,
  setCurrentPage,
  currentPage,
  handlePageChange // 수정된 부분
}) {
  const pageList = [];
  const totalPages = Math.ceil(postsNum / postsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageList.push(i);
  }

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  if (totalPages === 1) {
    return null;
  }

  return (
    <CommunityListMapCss>
      <button onClick={goToPrevPage} disabled={currentPage === 1}>
        prev
      </button>

      {pageList.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)} // 수정된 부분
          className={currentPage === page ? "active" : ""}
          style={currentPage === page ? { backgroundColor: " #fcfcfc" } : {}}
        >
          {page}
        </button>
      ))}

      <button onClick={goToNextPage} disabled={currentPage === pageList.length}>
        next
      </button>
    </CommunityListMapCss>
  );
}