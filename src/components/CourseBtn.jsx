// import styled from "styled-components";
// import React, { useState } from "react";
// import { UserContext } from "../context/Worldcontext";
// import { useContext } from "react";
// const SelectBox = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 1200px;
//   .SelectBoxImg {
//     padding: 10px;
//     .img {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       flex-direction: column;
//       width: 150px;
//       height: 150px;
//       background-size: cover;
//       border-radius: 50%;
//       margin: 10px;
//     }
//     .Click {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       font-size: 20px;
//     }

//     &:hover {
//       opacity: 0.8;
//       transform: scale(1.1);
//     }
//   }
// `;

// const CourseBtn = ({ toggle }) => {
//   const context = useContext(UserContext);
//   const { world } = context;
//   const data = [
//     {
//       COURSE_WORLD: "해외",
//       COURSE_AREA: "대만",
//       MAIN_IMG:
//         "https://i.pinimg.com/564x/35/ca/dc/35cadcc2b3c0ba49c24771f4d74dc3fa.jpg",
//       COURSE_HASH: "# 대만의 하이라이트 코스",
//       TOPIC: "특유의 다양한 볼거리와 먹거리들이 참 매력적인 코스",
//       COURSE_PATH1: "시먼딩",
//       COURSE_PATH2: "보피리아오 역사거리",
//       COURSE_PATH3: "타이베이 101",
//     },
//     {
//       COURSE_WORLD: "국내",
//       COURSE_AREA: "제주도",
//       MAIN_IMG:
//         "https://i.pinimg.com/564x/35/ca/dc/35cadcc2b3c0ba49c24771f4d74dc3fa.jpg",
//       COURSE_HASH: "# 대만의 하이라이트 코스2",
//       TOPIC: "특유의 다양한 볼거리와 먹거리들이 참 매력적인 코스2",
//       COURSE_PATH1: "시먼딩2",
//       COURSE_PATH2: "보피리아오 역사거리2",
//       COURSE_PATH3: "타이베이 1012",
//     },
//     {
//       COURSE_WORLD: "해외",
//       COURSE_AREA: "대만2",
//       MAIN_IMG:
//         "https://i.pinimg.com/564x/35/ca/dc/35cadcc2b3c0ba49c24771f4d74dc3fa.jpg",

//       COURSE_HASH: "# 대만의 하이라이트 코스3",
//       TOPIC: "특유의 다양한 볼거리와 먹거리들이 참 매력적인 코스3",
//       COURSE_PATH1: "시먼딩3",
//       COURSE_PATH2: "보피리아오 역사거리3",
//       COURSE_PATH3: "타이베이 1013",
//     },
//     {
//       COURSE_WORLD: "해외",
//       COURSE_AREA: "대만3",
//       MAIN_IMG:
//         "https://i.pinimg.com/564x/35/ca/dc/35cadcc2b3c0ba49c24771f4d74dc3fa.jpg",

//       COURSE_HASH: "# 대만의 하이라이트 코스4",
//       TOPIC: "특유의 다양한 볼거리와 먹거리들이 참 매력적인 코스4",
//       COURSE_PATH1: "시먼딩4",
//       COURSE_PATH2: "보피리아오 역사거리4",
//       COURSE_PATH3: "타이베이 1014",
//     },
//     {
//       COURSE_WORLD: "국내",
//       COURSE_AREA: "제주도3",
//       MAIN_IMG:
//         "https://i.pinimg.com/564x/35/ca/dc/35cadcc2b3c0ba49c24771f4d74dc3fa.jpg",
//       COURSE_HASH: "# 대만의 하이라이트 코스2",
//       TOPIC: "특유의 다양한 볼거리와 먹거리들이 참 매력적인 코스2",
//       COURSE_PATH1: "시먼딩2",
//       COURSE_PATH2: "보피리아오 역사거리2",
//       COURSE_PATH3: "타이베이 1012",
//     },
//     {
//       COURSE_WORLD: "국내",
//       COURSE_AREA: "제주도2",
//       MAIN_IMG:
//         "https://i.pinimg.com/564x/35/ca/dc/35cadcc2b3c0ba49c24771f4d74dc3fa.jpg",
//       COURSE_HASH: "# 대만의 하이라이트 코스2",
//       TOPIC: "특유의 다양한 볼거리와 먹거리들이 참 매력적인 코스2",
//       COURSE_PATH1: "시먼딩2",
//       COURSE_PATH2: "보피리아오 역사거리2",
//       COURSE_PATH3: "타이베이 1012",
//     },
//   ];
//   const filteredData = data.filter((asd) => asd.COURSE_WORLD === "국내");
//   const filteredData2 = data.filter((item) => item.COURSE_WORLD === "해외");
//   return (
//     <>
//       <SelectBox>
//         {world === "korea"
//           ? filteredData.map((item, index) => (
//               <div className="SelectBoxImg" key={index}>
//                 <div
//                   className="img"
//                   style={{ backgroundImage: `url(${item.MAIN_IMG})` }}
//                 ></div>
//                 <div className="Click">{item.COURSE_AREA}</div>
//               </div>
//             ))
//           : filteredData2.map((item, index) => (
//               <div className="SelectBoxImg" key={index}>
//                 <div
//                   className="img"
//                   style={{ backgroundImage: `url(${item.MAIN_IMG})` }}
//                 ></div>
//                 <div className="Click">{item.COURSE_AREA}</div>
//               </div>
//             ))}
//       </SelectBox>
//     </>
//   );
// };

// export default CourseBtn;
