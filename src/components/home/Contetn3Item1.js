import { useState } from "react";
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

        .slide {
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
                top: 50%;
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
                        height: 100%;
                        //마우스 올라가면 흐려짐
                        background-color: rgba(0, 0, 0, 0.2);
                    }
                }
                &.big {
                    width: 20px;
                    height: 280px;
                }
                &.small {
                    width: 350px;
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
    { url:"https://image1.lottetour.com/static/trvtour/201909/723/30fe1a9df8f3aac93c34e5d2b80f694a.jpg", target: "#", title: "자유여행"},
    { url:"https://dimg.donga.com/wps/NEWS/IMAGE/2016/06/18/78731141.2.jpg", target: "#" , title:"지금뜨는그곳"},
    { url:"https://www.gousa.or.kr/sites/default/files/styles/hero_l/public/2023-10/c3ac71b4-a163-4196-8c97-6baff4a97568_8.jpeg?h=56d193ff&itok=JeTuG5VH", target: "#", title:"틈새여행" },
    { url:"https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/STq/image/8EAUTOLyees0927ctrPSCXkUn0U.jpg", target: "#" , title:"먹방여행"},
    { url:"https://res.cloudinary.com/kyte/image/upload/w_1080,h_1560,q_auto,f_auto,e_sharpen:50,c_fill,g_auto/v1636348646/content/shutterstock/FI/rovaniemi_3", target: "#" , title:"겨울여행"},
    { url:"https://cdn.3hoursahead.com/v2/content/image-comp/feff4170-bacd-4a4d-acd9-8601ac17cf06.webp", target: "#" , title:"백패킹"},
    { url:"https://news.airbnb.com/wp-content/uploads/sites/4/2022/04/VILLA-SANGLUNG.jpeg?fit=1024%2C678", target: "#" , title:"프리미엄"},
    { url:"https://assets.blog.engoo.com/wp-content/uploads/sites/2/2022/01/14205148/%ED%98%BC%EC%9E%90%EC%97%AC%ED%96%89-back-image-%EB%B3%B5%EC%82%AC.jpg", target: "#" , title:"기타여행"}
];


const Contetn3Item1=()=>{
    const [animate, setAnimate] = useState(true);//트루면 작동
    const onStop = () => setAnimate(false);
    const onRun = () => setAnimate(true);

return(
    <>
    <Contetn3Item1Css>
        <div className="metn1">
           <h1>테마별 Best 여행지</h1> 
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
                                className={i > 200 ? "big" : "small"}
                            >
                            <div className="lb-wrap">
                                <div className="lb-text">
                                    <h2>{s.title}</h2>
                                </div>
                            </div>

                                <div
                                    className="item"
                                    style={{ backgroundImage: `url(${s.url})`}}
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
                                className={i > 200  ? "big" : "small"}
                            >
                             <div className="lb-wrap">
                                <div className="lb-text">
                                    <h2>{s.title}</h2>
                                </div>
                            </div>
                                                                    
                            <div
                                className="item"
                                style={{ backgroundImage: `url(${s.url})` }}
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