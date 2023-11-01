/*원모 페이지 */
import styled, { css } from "styled-components";
import CommunityMenu from "./Community/CommunityMenu";
import CommunitySubMenu from "./Community/CommunitySubMenu";
import Changepwd from "./Community/ChangePwd";
import ChangeCQ from "./Community/ChangeCQ";
import Changemyinfo from "./Community/Changemyinfo";
import ChangeButton from "./Community/ChangeButton";
import CommunityList from "./Community/CommunityList";
import CommunitySearch from "./Community/CommunitySearch";
import CommunityFavorites from "./Community/CommunityFavorites";
import CommunityWrite from "./Community/CommunityWrite";
import CommunityFavoritesItem from "./Community/CommunityFavoritesItem";
const CommunityCss = styled.div``;
const CommunityCss1 = styled.div`
  display: flex;
`;
const Community = () => {
  return (
    <CommunityCss>
      <CommunityMenu></CommunityMenu>
      <CommunityCss1>
        <CommunitySubMenu></CommunitySubMenu>
        <Changemyinfo></Changemyinfo>
      </CommunityCss1>
      {/*
      <Changemyinfo></Changemyinfo>
  
      <Changepwd></Changepwd>
   
      <ChangeButton></ChangeButton>
 
      <CommunityFavorites></CommunityFavorites>
      <CommunityFavoritesItem></CommunityFavoritesItem>
      <CommunityList></CommunityList>
      <CommunitySearch></CommunitySearch>
      <CommunityWrite></CommunityWrite>*/}
    </CommunityCss>
  );
};

export default Community;
