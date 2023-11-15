import styled from "styled-components";
import { Link } from "react-router-dom";

const CommunityListMapCss=styled.div`
  height: 430px;
`;

const Content3=styled.div`
  width: 100%;
  height: auto;
  border: 1px solid  #000000;
  border-radius: 10px;
  text-align: center;
    display: flex;
  padding: 7px;
  margin-top: 10px;  
`;
const Item1=styled.div`

width: 130px;
`;
const Item2=styled.div`
width: 100%;


`;




export function CommunityListMap({ list }) {
    return (
            <CommunityListMapCss>
                    {list&&list.map((community)=>(  
         <Link className="LinkCss" to={`/Communityview/${community.communityNum}`} > 
          <Content3 key={community.no}>               
           <Item1>{community.communityNum} </Item1> 
           <Item2> {community.title}    </Item2> 
           <Item1>   {community.userId}</Item1> 
           <Item1>  {community.reportingDate}</Item1> 
           <Item1>    {community.views}  </Item1>       
          </Content3>
         </Link> 
                   
           ))}  
            </CommunityListMapCss>

    
    );
  }
  