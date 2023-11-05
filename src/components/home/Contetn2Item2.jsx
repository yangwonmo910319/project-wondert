import { useState } from "react";
import styled, { css } from "styled-components";

const Contetn2Item2Css=styled.div`

.item1{ 
    ul{
     
        display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    }

    li{ 
height:350px;
    width: 25%;
    
   img{
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
   }
   h1{ 
    margin-top: -3px;
  height: 80px;
  background-color:rgba(15,15,5,0.5);
  border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
   }
}
}


`;


const Contetn2Item2=()=>{

return(
    <>
    <Contetn2Item2Css>
       <div className="item1">
      <ul>
        <li><img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA2MDJfMzkg%2FMDAxNDk2Mzc5ODIyMTAx.3N9XBdWXam9I6X4Niz6Ol4ZJLXlxbG3xxKNklig59hwg.XQ-szHIC6rsUKJVOa6qLIlR6W2Lu8YMEXFAvp7tcIzgg.PNG.labanalog%2F%25BE%25C6%25C0%25CC%25C6%25F9%25B9%25E8%25B0%25E6%25C8%25AD%25B8%25E9%25B9%25D9%25B4%25D9.png&type=sc960_832"></img>
        <h1>설명~~~</h1>
        </li> 
        <li><img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA2MDJfMzkg%2FMDAxNDk2Mzc5ODIyMTAx.3N9XBdWXam9I6X4Niz6Ol4ZJLXlxbG3xxKNklig59hwg.XQ-szHIC6rsUKJVOa6qLIlR6W2Lu8YMEXFAvp7tcIzgg.PNG.labanalog%2F%25BE%25C6%25C0%25CC%25C6%25F9%25B9%25E8%25B0%25E6%25C8%25AD%25B8%25E9%25B9%25D9%25B4%25D9.png&type=sc960_832"></img>
        <h1>설명~~~</h1>
        </li> 
        <li><img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA2MDJfMzkg%2FMDAxNDk2Mzc5ODIyMTAx.3N9XBdWXam9I6X4Niz6Ol4ZJLXlxbG3xxKNklig59hwg.XQ-szHIC6rsUKJVOa6qLIlR6W2Lu8YMEXFAvp7tcIzgg.PNG.labanalog%2F%25BE%25C6%25C0%25CC%25C6%25F9%25B9%25E8%25B0%25E6%25C8%25AD%25B8%25E9%25B9%25D9%25B4%25D9.png&type=sc960_832"></img>
        <h1>설명~~~</h1>
        </li> 
        </ul>
       </div>

    </Contetn2Item2Css> 

    </>
)

}
export default Contetn2Item2;