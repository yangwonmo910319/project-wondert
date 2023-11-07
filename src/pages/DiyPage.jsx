/*선영 페이지 */
import React from "react";
// import ListWriting from "../components/ListWriting";
// import Imoge from "../components/GoodBad";
// import CommentWrite from "../components/Comment";
import styled from "styled-components";
import MainPage from "../components/SlideMain";
import PostMain from "../components/PostList";
import BoardList from "../components/BoardList";

const Center = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const DiyPage = () =>{

    return(
        <Center>
          <MainPage />
          <PostMain />
          <BoardList />
        
          {/*<ListWriting />
          <Imoge />
          <CommentWrite />
        */}
        </Center>
    );
};

export default DiyPage;
