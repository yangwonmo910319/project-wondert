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

const Btn = styled.div`
    margin-top: 30px;
`;

const DiyPage = () =>{
    const [tema ,setTema]=useState('자유여행');
    const temachage=(props)=>{
        setTema(props);
    }

    const [onselect1, setOnselect1] = useState("korea");
    const onselect = (sel) => {
        setOnselect1(sel);
    };
    const onselect3 = (sel) => {
        console.log(sel)
    };

    return(
        <Center>
          <Btn>
            <GlobalButton onselect={onselect} onselect3={onselect3} />
          </Btn>
            <MainPage temachage={temachage} />
            <PostMain tema={tema} world={onselect1}/>
        </Center>
    );
};

export default DiyPage;
