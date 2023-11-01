/*원모 페이지 */
import styled, { css } from "styled-components";
import CommunityMenu from "./Community/CommunityMenu";
import CommunitySubMenu from "./Community/CommunitySubMenu";
import Changepwd from "./Community/ChangePwd";
import Changemyinfo from "./Community/Changemyinfo";

const Community = () => {
  return (
    <>
      <h1> 자유게시판 페이지입니다 </h1>
      <CommunityMenu></CommunityMenu>
      <CommunitySubMenu></CommunitySubMenu>
      <Changemyinfo></Changemyinfo>
      <Changepwd></Changepwd>
    </>
  );
};

export default Community;
