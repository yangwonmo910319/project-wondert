/*선영 페이지 */
import React from "react";
import styled from "styled-components";
import MainPage from "../../components/Diy/SlideMain";
import PostMain from "../../components/Diy/PostMain";
import BoardList from "../../components/Diy/BoardList";

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
        </Center>
    );
};

export default DiyPage;
