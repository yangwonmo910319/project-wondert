/*원모 페이지 */
import styled, { css } from "styled-components";
import CommunityMenu from "./Community/CommunityMenu";
import CommunitySubMenu from "../components/Community/CommunitySubMenu";
import Changepwd from "../components/Community/ChangePwd";

import Changemyinfo from "../components/Community/Changemyinfo";

import CommunityList from "./Community/CommunityList";
import CommunitySearch from "./Community/CommunitySearch";
import CommunityFavorites from "../components/Community/FavorDiyitem";
import CommunityWrite from "./Community/CommunityWrite";
import FavorDiyitem from "../components/Community/FavorDiyitem";
import { Outlet } from "react-router-dom";
const CommunityCss = styled.div``;
const Myinfo=() =>{


    return(
        <CommunityCss>
        <CommunityMenu></CommunityMenu>
        <Outlet />
      </CommunityCss>
    );
};

export default Myinfo;