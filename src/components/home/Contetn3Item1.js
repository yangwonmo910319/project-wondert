import { useState } from "react";
import styled, { css } from "styled-components";

const Contetn3Item1Css=styled.div`
font-size: 1.5em;
width: 100%;


div{
    display: flex;
    flex-direction: column;
justify-content: center;
align-items: center;
border: 3px solid red;
width: 100%;

}
.metn1{
    height: 30px;
 
}
.metn2{
    height: 350px;
ul{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
   li{
    margin: 20px;
   }
    img{
        width: 200px;
    height: 250px;
    object-fit: cover;
    }
}

`;



const Contetn3Item1=()=>{

return(
    <>
    <Contetn3Item1Css>
        <div className="metn1">
           <h1>가장 인기있는 Best 여행지 (슬라이드 추가예정)</h1> 
        </div>
        <div className="metn2">
         <ul>
            <li><img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA2MDJfMzkg%2FMDAxNDk2Mzc5ODIyMTAx.3N9XBdWXam9I6X4Niz6Ol4ZJLXlxbG3xxKNklig59hwg.XQ-szHIC6rsUKJVOa6qLIlR6W2Lu8YMEXFAvp7tcIzgg.PNG.labanalog%2F%25BE%25C6%25C0%25CC%25C6%25F9%25B9%25E8%25B0%25E6%25C8%25AD%25B8%25E9%25B9%25D9%25B4%25D9.png&type=sc960_832"></img>
        </li>

         </ul>
        </div>
    

    </Contetn3Item1Css>
   
    </>
)

}
export default Contetn3Item1;