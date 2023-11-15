import React, { useEffect, useState } from "react";
import TravelCourse from "../../components/Diy/TravelCourse";

const Diyview = (e) => {
    const [world, setWorld] = useState("");
    const [area, setArea] = useState("");
    const [toDate, setToDate] = useState("");
    const [toDate1, setToDate1] = useState("");
    const [theme,setTheme] = useState("");
    useEffect(()=>{

    },[world],[theme]);

    return (
        <>
        <TravelCourse world={world} area={area} toDate={toDate} toDate1={toDate1} theme={theme}/>
        </>
    );
};

export default Diyview;