import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`

`;

const Counter = styled.div`

`;

const Counter2 = styled.div`

`;

const CommunityInsert = ({CommunityInsert}) => {
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const onClick = () => {
        CommunityInsert(inputValue);
    };
    return (
        <>
            <Container>
                <Counter
                    value={inputValue}
                    onChange={handleInputChange}
                    />
                <Counter2 onClick={onClick}>
                    <p>확인</p>
                </Counter2>
                <Link to="/DiyPage">
                    <Counter2>취소</Counter2>
                </Link>
            </Container>
        </>
    );
};

export default CommunityInsert;