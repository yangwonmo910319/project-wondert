import styled from "styled-components";
const SelectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
  .SelectBoxImg {
    padding: 10px;
    .img {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 150px;
      height: 150px;
      background-size: cover;
      border-radius: 50%;
      margin: 10px;
    }
    .Click {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
    }

    &:hover {
      opacity: 0.8;
      transform: scale(1.1);
    }
  }
`;

const CourseBtn = ({ toggle }) => {
  const world = "korea";
  const data = [
    {
      COURSE_WORLD: "해외",
      COURSE_AREA: "대만",
      MAIN_IMG:
        "https://i.pinimg.com/564x/35/ca/dc/35cadcc2b3c0ba49c24771f4d74dc3fa.jpg",
    },
    {
      COURSE_WORLD: "해외",
      COURSE_AREA: "일본",
      MAIN_IMG:
        "https://dimgcdn.ybtour.co.kr/TN/02/02c1c5f12ecbb48cb65ecf45f8b4c842.tn.410x280.jpg",
    },
    {
      COURSE_WORLD: "해외",
      COURSE_AREA: "싱가폴",
      MAIN_IMG:
        "https://dimgcdn.ybtour.co.kr/TN/81/81623df77bad1695b66c23cdfae3ef51.tn.630x410.jpg",
    },
    {
      COURSE_WORLD: "해외",
      COURSE_AREA: "호주",
      MAIN_IMG:
        "https://dimgcdn.ybtour.co.kr/TN/a3/a34e5f3ed7700206c8be1b73cee05369.tn.410x280.jpg",
    },
    {
      COURSE_WORLD: "해외",
      COURSE_AREA: "베트남",
      MAIN_IMG:
        "https://dimgcdn.ybtour.co.kr/TN/6c/6ca00310dabe9fcc0178ead4a9bd5c01.tn.410x280.jpg",
    },
    {
      COURSE_WORLD: "국내",
      COURSE_AREA: "여수",
      MAIN_IMG:
        "https://dimgcdn.ybtour.co.kr/TN/55/55c522203658e38d4a620504b26fb197.tn.410x280.png",
    },
    {
      COURSE_WORLD: "국내",
      COURSE_AREA: "전주",
      MAIN_IMG:
        "https://dimgcdn.ybtour.co.kr/TN/61/6159add494f3bc8725856a744aefb0a2.tn.410x280.png",
    },
    {
      COURSE_WORLD: "국내",
      COURSE_AREA: "제주도",
      MAIN_IMG:
        "https://dimgcdn.ybtour.co.kr/TN/cb/cbdd285c878ec076ae4b74a914793dae.tn.410x280.jpg",
    },
    {
      COURSE_WORLD: "국내",
      COURSE_AREA: "부산",
      MAIN_IMG:
        "https://dimgcdn.ybtour.co.kr/TN/bf/bf24bcc75c36aeea71549557b5b1dcfd.tn.410x280.jpg",
    },
    {
      COURSE_WORLD: "국내",
      COURSE_AREA: "강원도",
      MAIN_IMG:
        "https://dimgcdn.ybtour.co.kr/TN/10/102dcba9dc5c75a2cfdd85dfcd8fdb80.tn.410x280.jpg",
    },
  ];
  const filteredData = data.filter((asd) => asd.COURSE_WORLD === "국내");
  const filteredData2 = data.filter((item) => item.COURSE_WORLD === "해외");
  return (
    <>
      <SelectBox>
        {world === "korea"
          ? filteredData.map((item, index) => (
              <div className="SelectBoxImg" key={index}>
                <div
                  className="img"
                  style={{ backgroundImage: `url(${item.MAIN_IMG})` }}
                ></div>
                <div className="Click">{item.COURSE_AREA}</div>
              </div>
            ))
          : filteredData2.map((item, index) => (
              <div className="SelectBoxImg" key={index}>
                <div
                  className="img"
                  style={{ backgroundImage: `url(${item.MAIN_IMG})` }}
                ></div>
                <div className="Click">{item.COURSE_AREA}</div>
              </div>
            ))}
      </SelectBox>
    </>
  );
};

export default CourseBtn;
