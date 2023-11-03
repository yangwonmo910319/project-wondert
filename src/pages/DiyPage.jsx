/*선영 페이지 */
import React from "react";
import UpperBar from "../components/UpperFavorTheme";
import Themes from "../components/Theme";
import PhotoBoxes from "../components/PhotoBox";
import styled from "styled-components";
import ListName from "../components/List";
import ListBanner from "../components/ListBanner";
import ListBox from "../components/ListBox";
import ListWriting from "../components/ListWriting";
import Select from "../components/TravelSelect";
import Select2 from "../components/TravelSelect2";
import Select3 from "../components/TravelSelect3";
import Calender from "../components/TravelCalender";
import FavorSelect from "../components/TravelFavor";
import OtherSelect from "../components/OtherTravel";
import MySelect from "../components/MySelectTheme";
import Write from "../components/TravelWrite";
import Title from "../components/TravelTitle";
import Title3 from "../components/AloneFavorTravel";
import Diary from "../components/TravelDiary";
import Diary2 from "../components/TravelDiary2";
import Diary3 from "../components/TravelDiary3";
import Diary4 from "../components/TravelDiary4";
import TravelSee from "../components/TravelSee";
import Day from "../components/Day";
import Imoge from "../components/GoodBad";
import CommentWrite from "../components/Comment";
import CommentSee from "../components/CommentSee";
import ReviewSee from "../components/CommentReview";



const DiyPage = () =>{

    return(
        <>
     
        <UpperBar/>
        <Themes />
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <PhotoBoxes />
        </div>
        <Themes />
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <PhotoBoxes />
        </div>
        <Themes />
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <PhotoBoxes />
        </div>
        <ListBanner />
        <ListName />
        <ListBox />
        <ListBox />
        <ListBox />
        <ListBox />
        <ListBox />
        <ListWriting />
        <Select />
        <Select2 />
        <Select3 />
        <Calender />
        <Title3 />
        <FavorSelect />
        <OtherSelect />
        <MySelect />
        <Title />
        <Write />
        <Diary />
        <Diary2 />
        <Diary3 />
        <Diary4 />
        <TravelSee />
        <Write />
        <Day />
        <Imoge />
        <Diary />
        <Diary2 />
        <Diary3 />
        <Diary4 />
        <Day />
        <Diary />
        <Diary2 />
        <Diary3 />
        <Diary4 />
        <ReviewSee />
        <CommentWrite />
        <CommentSee />
     
        </>
    );
};

export default DiyPage;
