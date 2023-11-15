// import styled from "styled-components";
// import React, { useEffect, useState } from "react";
// import CourseAxiosApi from "../../api/CourseAxiosApi";
// import { useParams } from "react-router-dom";
// // 가장 큰박스
// const ComBox = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   width: 1200px;
//   height: 474px;
//   border: 2px solid #427d9d;
//   border-radius: 10px;
//   margin: 10px 0;
// `;
// // 댓글 쓰는 박스
// const CommRB = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 1150px;

//   margin: 10px 0;
// `;
// // 입력&버튼 묶는 박스
// const SearchB = styled.div`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   width: 700px;
//   height: 50px;
// `;
// // 댓글 보는 박스
// const CommSB = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 1150px;
//   height: 370px;

//   margin: 5px;
// `;
// // 댓글 상단바&댓글 내용 박스
// const CommS = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;

//   border: 2px solid #427d9d;
//   .commST {
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//     height: 10%;
//     width: 100%;

//     .id {
//       display: flex;
//       justify-content: center;
//       flex-grow: 1;
//     }
//     .com {
//       display: flex;
//       justify-content: center;
//       flex-grow: 2;
//     }
//     .day {
//       display: flex;
//       justify-content: center;
//       flex-grow: 1;
//     }
//   }
//   .commSBB {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 90%;
//     width: 100%;
//     flex-direction: column;
//   }
// `;
// const CommSBT = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
//   margin: 10px;
//   .id {
//     display: flex;
//     justify-content: center;
//     flex-grow: 1;
//   }
//   .com {
//     display: flex;
//     justify-content: center;
//     flex-grow: 2;
//   }
//   .day {
//     display: flex;
//     justify-content: center;
//     flex-grow: 1;
//   }
// `;

// const CourseCom = ({ replylist }) => {
//   const [comInput, setComInput] = useState(""); // 상태 추가

//   const handleInputChange = (e) => {
//     setComInput(e.target.value);
//   };
//   const onClick = () => {
//     replylist(comInput);
//   };

//   return (
//     // 가장 큰박스
//     <ComBox>
//       <CommRB>
//         <SearchB>
//           <input
//             type="text"
//             placeholder="댓글을 써주세요."
//             value={comInput}
//             onChange={handleInputChange}
//             style={{
//               fontSize: "25px",
//               color: "black",
//             }}
//           ></input>
//           <button
//             onClick={onClick}
//             style={{
//               fontSize: "25px",
//               color: "black",
//             }}
//           >
//             댓글작성
//           </button>
//         </SearchB>
//       </CommRB>
//       <CommSB>
//         <CommS>
//           <div className="id">ID</div>
//           <div className="com">내용</div>
//           <div className="day">날짜</div>
//           {replylist &&
//             replylist.map((courR, course_code) => (
//               <CommSBT key={course_code}>
//                 <div className="id">{courR.userid}</div>
//               </CommSBT>
//             ))}
//         </CommS>
//       </CommSB>
//     </ComBox>
//   );
// };
// export default CourseCom;
