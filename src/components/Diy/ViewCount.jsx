import React, {useState} from "react";
import styled from "styled-components";

const ViewCount = () => {
    const [value, setValue] = useState();
    
    return (
        <div>
            <p>조회수👀 {value}</p>
            <button onClick={value}></button>
        </div>
    );
};

export default ViewCount;