/*선영 페이지 */
import React from "react";
// import PhotoBoxes from "../components/PhotoBox";
// import styled from "styled-components";
// import ListBanner from "../components/ListBanner";
// import ListWriting from "../components/ListWriting";
// import Write from "../components/TravelWrite";
// import Diary from "../components/TravelDiary";
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
        <CommunityWrite />
        <BoardList />
        <WriteForm />

        {/* 
        <PhotoBoxes />
        <ListBanner />
        <ListWriting />
        <Write />
        <Diary />
        <Write />
        <Imoge />
        <CommentWrite />
      */}
        </>
    );
};

export default DiyPage;
