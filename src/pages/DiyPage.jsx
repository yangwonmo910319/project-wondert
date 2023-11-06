/*선영 페이지 */
import React from "react";
// import ListWriting from "../components/ListWriting";
// import Imoge from "../components/GoodBad";
// import CommentWrite from "../components/Comment";
import MainPage from "../components/SlideMain";
import PostMain from "../components/PostList";
import CommunityWrite from "../components/CommunityDetail";
import BoardList from "../components/BoardList";
import WriteForm from "../components/WriteForm";

const DiyPage = () =>{

    return(
        <>
        <MainPage />
        <PostMain />
        <BoardList />
        <WriteForm />
        <CommunityWrite />
        {/* 
        <ListWriting />
        <Imoge />
        <CommentWrite />
      */}
        </>
    );
};

export default DiyPage;
