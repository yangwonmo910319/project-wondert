import {Link} from "react-router-dom";
import styled from "styled-components";

const Writing = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 30px 30px; 
    form{
        display: flex;
    }
`;

const Click = styled.div`
    input {
        width: 300px;
    }
`;

const Click2 = styled.div`
    margin-left: 400px;
    position: absolute;
    right: 0;
    bottom: 0;
`;

// 여행지 검색 시 사용, 글 작성하러 가기 
const ListWriting = ({onClick, onChange}) => { // onClick, onChange 사용하기 / 조회 누를 때 해당 정렬
    return (
        <Writing>
        
                <form action="list">
                    <select name="list" id="list">
                        <option value="제목순">제목순</option>
                        <option value="좋아요 많은순">좋아요 많은순</option>
                        <option value="즐겨찾기 많은순">즐겨찾기 많은순</option>
                    </select>
                    <Click>
                        <input type="text" placeholder='원하시는 여행지를 검색해 주세요.' />
                    </Click>
                        <input type="submit" value="Submit"/>
                </form>
            
            <Click2>
                <Link to = "/">글 작성하기 〉</Link> 
            </Click2>
        </Writing>
    );
};

export default ListWriting;