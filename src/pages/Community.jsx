/*원모 페이지 */
import styled, { css } from "styled-components";
import CommunityMenu from "./Community/CommunityMenu";
import CommunitySubMenu from "./Community/CommunitySubMenu";
import Changepwd from "../components/Community/ChangePwd";

import Changemyinfo from "../components/Community/Changemyinfo";

import CommunityList from "./Community/CommunityList";
import CommunitySearch from "./Community/CommunitySearch";
import CommunityFavorites from "./Community/CommunityFavorites";
import CommunityWrite from "./Community/CommunityWrite";
import CommunityFavoritesItem from "./Community/CommunityFavoritesItem";
import { Outlet } from "react-router-dom";
const CommunityCss = styled.div``;

const Community = () => {
  return (
    <CommunityCss>
      <CommunityMenu></CommunityMenu>
      <Outlet />
    </CommunityCss>
  );
};

export default Community;
