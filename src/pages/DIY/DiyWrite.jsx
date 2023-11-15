import React, { useEffect, useState } from "react";
import WriteForm from "../../components/Diy/WriteForm"
import PicForm from "../../components/Diy/PicForm";
import styled from "styled-components";
const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px 0;
`;
const Diyview = () => {
    const [world, setWorld] = useState("");
    const [area, setArea] = useState("");
    const [toDate, setToDate] = useState("");
    const [toDate1, setToDate1] = useState("");
    const [theme,setTheme] = useState("");
        
useEffect(()=>{

},[world],[theme]);
    return (
        <Center>
        <WriteForm worldChange={setWorld} areaChange={setArea} setToDate={setToDate} setToDate1={setToDate1} setTheme={setTheme}/>
        <PicForm world={world} area={area} toDate={toDate} toDate1={toDate1} theme={theme} />
        </Center>
    );
};

export default Diyview;