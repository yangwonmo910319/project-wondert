import styled, { css } from "styled-components";

const TitleBox = styled.div`
  display: flex;
  padding: 10px 0;
  flex-direction: column;
  align-items: start;
  width: 1200px;
  min-height: 80px;
  border-bottom: 2px solid black;
  .tag {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    padding: 10px 15px;
    background-color: #F4CE14;
    color:  #45474B;  
    border-radius: 50px;
  }

  .title {
    padding: 20px 0;
    font-size: 28px;
    font-weight: bold;
  }
`;

const Goodstitle = (props) => {
  const { title,tag } = props;
  return (
    <>
      <TitleBox>
        <div className="tag">#{tag}</div>
        <p className="title">{title}</p>
      </TitleBox>
    </>
  );
};

export default Goodstitle;
