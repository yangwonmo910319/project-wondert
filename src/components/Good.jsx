// import React, {useState} from "react";
// import styled from "styled-components";

// const Container = styled.div`

// `;

// const GoodClick = () => {
//     const [like, setLike] = useState(0);
    
//     return (
//       <Container>
//         {like.map((el, i)) => {
//             <div className="list" key={i}>
//               <h3>
//                 {el}
//                 <span onClick={() => {const likeCnt = [...like]; likeCnt[i]++; setLike(likeCnt);
//                   }}>👍</span>
//                 {like[i]}
//               </h3>
//             </div>
//         </Container>
//         }};
        
//     );    
// };
// export default GoodClick;