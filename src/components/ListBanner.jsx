import {Link} from 'react-router-dom';
import styled from 'styled-components';

const ListClick = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    h2 {
        font-weight: bold;
        font-size: 20px;
    }
`;
const Click = styled.div`
    display: flex;
    align-items: center;
    input {
        width: 400px;
    }
`;

const ListBanner = () => {
    return (
        <>
        <ListClick>
            <h2># 자유여행</h2>
            <Click>
                <Link to="/">전체글 보기 〉</Link>
            </Click>
        </ListClick>
        </>
    );
};

export default ListBanner;
