import { useState } from "react";
import { useNavigate } from "react-router";
import styled, { css } from "styled-components";

const Contetn3Item1Css=styled.div`

width: 100%;

.metn1{
    height: 30px;
    text-align: center;
    h1{
        font-size: 3em;
    }
  
}
.metn2{
 margin-top: 100px;
}
`;



const Slider = styled.div`
    p {
        font-weight: bold;
        font-size: 30px;
        margin: 30px 80px;
    }
    ul, li {
        list-style: none;
    }

    .slide_container {
        overflow: hidden;

        .slide_wrapper {
            display: flex;
            flex-wrap: nowrap;
            background-color: whitesmoke;
    
        }
        .lb-wrap {
        width: 70%;
        margin: 10px auto;
        position: relative;
        } 
        .lb-text {
        display: flex;
        width: 110%;
        padding: 10px 20px;  
        text-align: center;
        justify-content: center;
        position: absolute;
        flex-direction: row;
        margin-top: -50px;
        right:0;
        left: 0;
        top: 300px;
        }
        .lb-text2 {
       
        width: 100%;
        padding: 10px 20px;  
        text-align: center;
        justify-content: center;
        position: absolute;     
        color: white;
        margin-top: -30px;
        right:0;
        left: 0;
        top: 300px;
        }
        .lb-text h2 {
            font-size: 40px;
            font-weight: bold;
            color: white;
            text-shadow: 0 5px 10px black;
        }
        .lb-text2 p {
            font-size: 20px;
            font-weight: bold;
            color: white;
            margin-left: 10px;
            text-shadow: 0 5px 10px black;
            margin-bottom: 600px;
            width: 100%;
        }

        .lb-text p {
            font-size: 20px;
            font-weight: bold;
            color: white;
            margin-left: 10px;
            text-shadow: 0 5px 10px black;
            margin-bottom: 600px;
            width: 100%;
            background-color: red;
        }

        .slide {

            object-fit: cover;
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            position: relative;
            border-top: 1px solid #bbb;
            border-bottom: 1px solid #bbb;
            padding: 40px 0;

            &::before {
                content: "";
                display: block;
                position: absolute;
                top: 3%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 1;
            }
            &.original {
                animation: 60s linear infinite normal none running
                    infiniteAnimation1;
            }
            &.clone {
                animation: 60s linear infinite infiniteAnimation2;
            }
            &.stop {
                animation-play-state: paused;
            }

            li {
                margin: 0 80px;
                cursor: pointer;
                z-index: 2;
                transition: .5s;
                transform: scale(1);
                &:hover {//마우스 가면 해당 오브젝트 커지는 scale
                    transform: scale(1.1);
                    &::after {
                        content: "";
                        position: absolute;
                        top: 0;
                        left: 0;
                        bottom: 0;
                        right: 0;
                        width: 100%;
                        height: 190%;
                        //마우스 올라가면 흐려짐
                      
                    }
                }
                &.big {
                    width: 250px;
                    height: 400px;
                    margin: 0 40px;     
                }
                .item {
                    background-size: cover;
                    width: 100%;
                    height: 100%;
                    border-radius: 15px;
                    box-shadow: 0 5px 10px black;
                }
            }
        }
    }
    @keyframes infiniteAnimation1 {
    0% {
        transform: translateX(0%);
    }
    50% {
        transform: translateX(100%);
    }
    50.1% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0%);
    }
}
@keyframes infiniteAnimation2 {
    0% {
        transform: translateX(-200%);
    }
    100% {
        transform: translateX(0%);
    }
}
`;

const slides = [
    { url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStpv48R2hGnlJ9r2YbGE8PCNO61vGad1Sbsw&usqp=CAU", target: "C1", title: "대만", ment:"# 대만여행의 꽃 예스진지"},
    { url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9DLj_URE8IzgoZGaaMnJ8FpArmingw_K_HMw_7NOWwyC16TRx14Hw5orrYrtJj2G10rU&usqp=CAU", target: "C14" , title:"호주", ment:"#최근의 와인 대세라면 호주!"},
    { url:"https://a.cdn-hotels.com/gdcs/production37/d1169/1dcbfef5-2070-48ce-8d62-3e0fffa21797.jpg", target: "C20", title:"부산", ment:'# 작은 킬링 필드 왓트 마이 관광'},
    { url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCz3XSAJE0oBseR4pTB3hm0lJTf4XLdUt-KQ&usqp=CAU", target: "C6" , title:"일본", ment:"# 삿포로 눈축제'"},
    { url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_0HfLYU2YxglfiOfI-0ZWYnyhXIGWRINvmg&usqp=CAU", target: "C24" , title:"여수", ment:"# 해상 케이블카"},
    { url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0SrTmB07tcerCa6K3g4P3BbFBbjCIGQNSvQ&usqp=CAU", target: "C33" , title:"부산", ment:"#부산해변열차"},
    { url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr_2tPPRdxlAvTQOfi1ruC8dXk-huEAGJplQ&usqp=CAU", target: "C9" , title:"싱가폴", ment:"# 싱가포르 트래블버블"}
];


const Contetn3Item1=()=>{
    const [animate, setAnimate] = useState(true);//트루면 작동
    const onStop = () => setAnimate(false);
    const onRun = () => setAnimate(true);
    const navigate = useNavigate();


    const GoodsLink =(couse)=>{
      
        window.localStorage.setItem("CourseArea",couse);
        navigate("/Course/Info");
    }
return(
    <>
    <Contetn3Item1Css>
        <div className="metn1">
           <h1>Best 코스 추천</h1> 
        </div>
        <div className="metn2">

        <Slider>
            <div className="slide_container">
              
                <ul
                    className="slide_wrapper"
                    onMouseEnter={onStop}//마우스 대면멈춤
                    onMouseLeave={onRun}//마우스 떠나면움직음
                >
                    <div 
                        className={"slide original".concat(
                            animate ? "" : " stop"
                        )}
                    >
                        {slides.map((s, i) => (
                            <li
                                key={i}
                                className={"big" }
                                onClick={()=>GoodsLink(s.target)}
                            >
                            <div className="lb-wrap">
                                <div className="lb-text">
                                    <h2>{s.title}</h2>                               
                                </div>
                                <div className="lb-text2">                             
                                     <p>{s.ment}</p>
                                </div>
                            </div>

                                <div
                                    className="item"
                                     style={{ backgroundImage: `url(${s.url})`,  backgroundPosition: 'center'}}
                                ></div>

                            </li>
                        ))}
                    </div>
                    <div
                        className={"slide clone".concat(animate ? "" : " stop")}
                    >
                        {slides.map((s, i) => (
                            <li
                                key={i}
                                className={"big"}
                                onClick={()=>GoodsLink(s.title)}
                            >
                             <div className="lb-wrap">
                             <div className="lb-text">
                                    <h2>{s.title}</h2>                               
                                </div>
                                <div className="lb-text2">                             
                                     <p>{s.ment}</p>
                                </div>
                            </div>
                                                                    
                            <div
                                className="item"
                                style={{ backgroundImage: `url(${s.url})`,  backgroundPosition: 'center'}}
                            ></div>
                            </li>
                        ))}
                    </div>
                </ul>
            </div>
        </Slider>
        </div>
    

    </Contetn3Item1Css>
   
    </>
)

}
export default Contetn3Item1;