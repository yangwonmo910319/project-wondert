/*원모 페이지 */
import styled, { css } from "styled-components";
import CommunityMenu from "./Community/CommunityMenu";

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