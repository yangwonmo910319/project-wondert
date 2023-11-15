/*선영 페이지 */
import React, { useState } from "react";
import styled from "styled-components";
import MainPage from "../../components/Diy/SlideMain";
import PostMain from "../../components/Diy/PostMain";
import GlobalButton from "../../components/GlobalButton";


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

    const [onselect1, setOnselect1] = useState("korea");
    const [onselect2, setOnselect2] = useState("ALL");
    const onselect = (sel) => {
        setOnselect1(sel);
    };
    const aeraSelect = (sel1) => {
        setOnselect2(sel1);
    };
    const onselect3 = () => {
        setOnselect2("ALL");
    };

    return(
        <Center>
          <GlobalButton onselect={onselect} onselect3={onselect3}/>
          <MainPage temachage={temachage} />
          <PostMain tema={tema} />
        </Center>
    );
};

export default DiyPage;
