/*선영 페이지 */
import React, { useState } from "react";
import styled from "styled-components";
import MainPage from "../../components/Diy/SlideMain";
import PostMain from "../../components/Diy/PostMain";

const Center = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const DiyPage = () =>{
const [tema ,setTema]=useState('자유여행');
const temachage=(props)=>{
    setTema(props);
}
    return(
        <Center>
          <MainPage temachage={temachage} />
          <PostMain tema={tema}/>
        </Center>
    );
};

export default DiyPage;
