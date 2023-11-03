import {Link} from 'react-router-dom';
import styled from 'styled-components';

const ListClick = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
`;
const Click = styled.div`
    display: flex;
    align-items: center;
    input {
        width: 400px;
    }
`;

const ListBanner = ({onClick, onChane}) => {
    return (
        <>
        <ListClick>
            <h2># 자유여행</h2>
            {/* 제목찾기 */}
            <Click>
                <input type="text" placeholder='원하시는 여행지를 검색해 주세요.' onChange={onChane} />
                <button type="button" id="search-btn" onClick={onClick}>조회</button>
            </Click>
            <Click>
                <Link to="/">전체글 보기 〉</Link>
            </Click>
        </ListClick>
        </>
    );
};

export default ListBanner;
