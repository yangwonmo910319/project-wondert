import React, { useEffect, useState } from "react";
import WriteForm from "../../components/Diy/WriteForm"
import PicForm from "../../components/Diy/PicForm";

const Diyview = () => {
    const [world, setWorld] = useState("");
    const [area, setArea] = useState("");
    const [toDate, setToDate] = useState("");
    const [toDate1, setToDate1] = useState("");
    const [theme,setTheme] = useState("");
 
        
useEffect(()=>{

},[world],[theme]);
    return (
        <>
        <WriteForm worldChange={setWorld} areaChange={setArea} setToDate={setToDate} setToDate1={setToDate1} setTheme={setTheme}/>
        <PicForm world={world} area={area} toDate={toDate} toDate1={toDate1} theme={theme} />
        </>
    );
};

export default Diyview;