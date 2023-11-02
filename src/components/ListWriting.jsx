import {Link} from "react-router-dom";
import styled from "styled-components";

const Writing = styled.div`
    display: flex;
    justify-content: right;
    padding: 20px 40px;
`;

const ListWriting = () => {
    return (
        <Writing>
            <Link to = "/">글 작성하기 〉</Link>
        </Writing>
    );
};

export default ListWriting;