import React from 'react';
import CommonTable from '../components/CommonTable';
import CommonTableColumn from '../components/CommonTableColumn';
import CommonTableRow from '../components/CommonTableRow';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 1200px;

`;

const Title = styled.div`
    font-size: 28px;
    font-weight: bold;
    margin: 30px 80px;
`;

const PostList = props => {
  return (
    <Container>
      <Title>
        <p>[DIY 여행 일지 공유 게시판] - # 겨울여행</p>
      </Title>
      <CommonTable headersName={['글번호','사진' ,'제목', '아이디','등록일', '조회수']}>
        <CommonTableRow>
          <CommonTableColumn>1</CommonTableColumn>
          <CommonTableColumn>사진</CommonTableColumn>
          <CommonTableColumn>첫번째 여행후기 게시글입니다.</CommonTableColumn>
          <CommonTableColumn>아이디123</CommonTableColumn>
          <CommonTableColumn>2023-10-25</CommonTableColumn>
          <CommonTableColumn>6</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>2</CommonTableColumn>
          <CommonTableColumn>사진</CommonTableColumn>
          <CommonTableColumn>두번째 여행후기 게시글입니다.</CommonTableColumn>
          <CommonTableColumn>아이디456</CommonTableColumn>
          <CommonTableColumn>2023-10-28</CommonTableColumn>
          <CommonTableColumn>5</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>3</CommonTableColumn>
          <CommonTableColumn>사진</CommonTableColumn>
          <CommonTableColumn>세번째 여행후기게시글입니다.</CommonTableColumn>
          <CommonTableColumn>아이디789</CommonTableColumn>
          <CommonTableColumn>2023-10-31</CommonTableColumn>
          <CommonTableColumn>1</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>4</CommonTableColumn>
          <CommonTableColumn>사진</CommonTableColumn>
          <CommonTableColumn>네번째 여행후기 게시글입니다.</CommonTableColumn>
          <CommonTableColumn>아이디346</CommonTableColumn>
          <CommonTableColumn>2023-11-03</CommonTableColumn>
          <CommonTableColumn>2</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>5</CommonTableColumn>
          <CommonTableColumn>사진</CommonTableColumn>
          <CommonTableColumn>다섯번째 여행후기 게시글입니다.</CommonTableColumn>
          <CommonTableColumn>아이디947</CommonTableColumn>
          <CommonTableColumn>2023-11-05</CommonTableColumn>
          <CommonTableColumn>4</CommonTableColumn>
        </CommonTableRow>
      </CommonTable>
    </Container>
  )
}

export default PostList;