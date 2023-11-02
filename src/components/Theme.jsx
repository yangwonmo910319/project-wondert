import { Link } from "react-router-dom";
import styled from "styled-components";

const AddBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 30px;
`;

const Themes = (props) => { // props 사용 할 것
    // const Picture [] = props;
    return (
        <AddBar>
            <h2> # 자유 여행 </h2>
            <Link to="/">더보기 〉</Link>{/* props를 넣어서 데이터베이스 들어오게/ 링크타고*/}
        </AddBar>
    );
};

export default Themes;