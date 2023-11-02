import React from "react";
import { Link } from "react-router-dom"
import styled,{ css } from "styled-components";

const Container = styled.div`
    h1{
        display: flex;
        justify-content: center;
    }
    .Theme-array{
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style: none;
    }
`;

const UpperBar = () => {
    return (
        <Container>
            <h1> 1인 맞춤 여행 </h1>
            <ul className="Theme-array">
                <li>
                    <Link to="/free"># 자유여행</Link>
                </li>
                <li>
                    <Link to="/newFamous"># 지금 뜨는 그곳</Link>
                </li>
                <li>
                    <Link to="/backPacking"># 백패킹</Link>
                </li>
                <li>
                    <Link to="/food"># 먹방 여행</Link>
                </li>
                <li>
                    <Link to="/winter"># 겨울 여행</Link>
                </li>
                <li>
                    <Link to="/gap"># 틈새 여행</Link>
                </li>
                <li>
                    <Link to="/premium"># 프리미엄 여행</Link>
                </li>
                <li>
                    <Link to="/rest"># 기타 여행</Link>
                </li>
            </ul>
        </Container>
    );
};

export default UpperBar;


 
       

  
