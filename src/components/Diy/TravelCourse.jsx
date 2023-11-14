import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DiyAxiosApi from "../../api/DiyAxiosApi";
import GoogleMap from "../../utill/googleMap";

const Course = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const TravelTitle = styled.div`
    p {
    margin: 20px 15px;
    line-height: 30px;
    }
    h5 {
    font-size: 17px;
    font-weight: bold;
    margin: 10px 5px;
    }
    ul {
        border: 1px solid lightgray;
        border-radius: 5px;
        padding: 20px 40px; 
    }
    li {
        font-size: 12px;
        list-style: circle;
        line-height: 40px;
    }
    h3 {
    font-weight: bold;
    margin: 10px 0;
    }
`;

const TavelCs = styled.div`
    .course_wrap h4{
        font-weight: bold;
        margin: 20px 20px;
    }
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
    }
    .pic1 {
        margin-left: 60px;
    }
    .wrapper img {
        width: 350px;
        height: 250px;
        margin: 0px 60px;
    }
    p {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 350px;
        height: 250px;
        border: 1px solid black;
    }
    b {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 750px;
        height: 180px;
        margin: 30px;
        border: 1px solid black;
    }
    `;

    const Course1 = styled.div`
        display: flex;
        flex-direction: column;
        
        .travel {
            display: flex;
            flex-direction: row;
            align-items: center;
           justify-content: start;
        }
    `;
    const Day = styled.div`
        font-size: 25px;
        font-weight: bold;
        display: flex;
        justify-content: left;
    `;
    const Travel = styled.div`
        margin: 30px 30px;
        display: flex;
    `;
    const Travel2 = styled.div`
        font-size: 15px;
        border: 1px solid lightgray;
        width: 1000px;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    const Travel3 = styled.div`
        width: 400px;
        height: 400px;
        border: 1px solid lightblue;
    `;

    const FieldContainer = styled.div`
    
    `;

    const StyledInput = styled.div`
    
    `;

const TravelCourse = () => {
    const [travelCourse, setTravelCourse] = useState("");
    const [world, setWorld] = useState("");
    const [area, setArea] = useState("");
    const [date, setDate] = useState("");
    const [theme,setTheme] = useState("");
    const navigate = useNavigate();

    const handleWorldChange = (e) => {
        setWorld(e.target.value);
      }
      const handAreaChange = (e) => {
        setArea(e.target.value);
      }
      const handDateChange = (e) => {
        setDate(e.target.value);
      }
      const handThemeChange = (e) => {
        setTheme(e.target.value);
      }
    

    useEffect(() => {
        alert(window.localStorage.getItem("travelNum"));
        const TravelCourse = async () => {
            try {
                const rsp = await DiyAxiosApi.travelContent(window.localStorage.getItem("travelNum"));
                setTravelCourse(rsp.data);
            }catch(e) {
                alert(e);
            }
        };
        TravelCourse();
    }, []);

    const handleSubmit = async () => {
    
        try {
          const rsp = await DiyAxiosApi.travelInsert(world,area,date,theme);
          if (rsp.data === true) {
            alert("글쓰기 성공");
            navigate("/DitPage/Diywrite");
          } else {
            alert("글쓰기 실패");
          }
        } catch (error) {
          console.log(error);
        }
      };

    return (
        <Course>
            <TravelTitle>
            <FieldContainer>
        <StyledInput
          type="radio"
          id="world"
          name="world"
          value={world}
          onChange={handleWorldChange}
        ></StyledInput>
      </FieldContainer>

      <FieldContainer>
        <StyledInput
          type="radio"
          id="area"
          name="area"
          value={area}
          onChange={handAreaChange}
        ></StyledInput>
      </FieldContainer>

      <FieldContainer>
        <StyledInput
          type="radio"
          id="date"
          name="date"
          value={date}
          onChange={handDateChange}
        ></StyledInput>
      </FieldContainer>

      <FieldContainer>
        <StyledInput
          type="radio"
          id="theme"
          name="theme"
          value={theme}
          onChange={handThemeChange}
        ></StyledInput>
      </FieldContainer>

                {/* <p>
                    <h5>[4. 여행 후기 정보]</h5>
                        <ul>
                        <h3>〈내 여행 정보〉</h3>
                            <li>나라 : 국내/해외</li>
                            <li>지역 : 국내지역/해외지역</li>
                            <li>여행 날짜 : 2023/11/01 ~ 2023/11/05</li>
                            <li>여행 테마 : #먹방여행</li>
                        </ul>
                </p> */}
            </TravelTitle>
            <TavelCs>
                {travelCourse && 
                travelCourse.map((data) => (
                    <Course1
                    key={data.travel_num} >
                        <Day>Day -{data.d_day}</Day>
                        <Course1>
                            <div className="travel">
                            <Travel><img src={data.travel_pic} alt="사진" width="400px" height="400px" /></Travel>
                            <Travel3><GoogleMap/></Travel3>
                            </div>
                            <div>
                            <Travel2>{data.travel_writing}</Travel2>
                            </div>
                        </Course1>
                    </Course1>
                ))}
            </TavelCs>
        </Course>
    );
};

export default TravelCourse;