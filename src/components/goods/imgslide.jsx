import styled, { css } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";



// 상품 리스트 : 이미지 슬라이더 

const setting = {  // 이거보고 슬라이드 구성하세요!!!!!!!!!!!!
	slide: "div", //슬라이드 되어야 할 태그 ex) div, li
	infinite: true, //무한 반복 옵션
	slidesToShow: 4, // 한 화면에 보여질 컨텐츠 개수
	slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
	speed: 100, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
	arrows: true, // 옆으로 이동하는 화살표 표시 여부
	dots: true, // 스크롤바 아래 점으로 페이지네이션 여부
	autoplay: true, // 자동 스크롤 사용 여부
	autoplaySpeed: 10000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
	pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
	vertical: false, // 세로 방향 슬라이드 옵션
	prevArrow: "<button type='button' class='slick-prev'>Previous</button>", // 이전 화살표 모양 설정
	nextArrow: "<button type='button' class='slick-next'>Next</button>", // 다음 화살표 모양 설정
	dotsClass: "slick-dots", //아래 나오는 페이지네이션(점) css class 지정
	draggable: true, //드래그 가능 여부
	responsive: [
	  // 반응형 웹 구현 옵션
	  {
		breakpoint: 960, //화면 사이즈 960px일 때
		settings: {
			slidesToShow: 3,//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
		},
	  },
	  {
		  breakpoint: 768, //화면 사이즈 768px일 때
		  settings: {
		  slidesToShow: 2,//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
		}}]};


const Constainer = styled.div`
  width: 1000px;
  height: 200px;
  margin-bottom: 50px;
  transition: all 1s ease;
  border-radius: 10px;
  .slick-next:before {
    color: black;
    font-size: 30px;
	
	display: flex;
	justify-content: end;
  }
  .slick-prev:before {
    color: black;
    font-size: 30px;
	
	display: flex;
  }
  .slick-prev,
.slick-next{
	width: 100px;
	height: 100px;
	top: 45%;
}


`;


const Img =styled.img`
	margin: 0 auto;
	width: 90%;
	height: 200px;
	object-fit: cover;
	border-radius: 10px;
	cursor: pointer;
	&:hover{
		border: 4px solid  #F4CE14;
	}
`;

const ImgDiv =styled.div`

	.title{
		width: 200px;
		position: relative;
		bottom: 50px;
		left: 20px;
		z-index: 2;
		color:white;
		font-size: 30px;
		font-weight: bold;
		text-shadow: 0 0 10px black;
	}
`;

const ImgSlide = ({ worlds , aeraSelect }) => {

  const settings = {
	slide: "div",
	autoplay: true, // 자동 스크롤 사용 여부
	pauseOnHover: true,
	autoplaySpeed: 2000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
	infinite: true, // 무한
    dots: true, // 
    speed: 20,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: true,
	draggable: true,
  };
  

  useEffect(() => {
	console.log("나라가변경되었습니다.");
  },[worlds,aeraSelect])

  const koreaimg =[
	{ 	
		url : "https://firebasestorage.googleapis.com/v0/b/wonderwalker-260db.appspot.com/o/%EA%B0%95%EC%9B%90%EB%8F%841.jpg?alt=media&token=67c90d07-ef13-48d8-9046-acec2a8b0f6d",
		name: "강원도",
	},
	{ 	
		url : "https://firebasestorage.googleapis.com/v0/b/wonderwalker-260db.appspot.com/o/%EC%A0%9C%EC%A3%BC%EB%8F%84.jpg?alt=media&token=b9e23745-62ac-4f10-bcf6-c88985bb264b",
		name: "제주도",
	},
	{ 	
		url : "https://firebasestorage.googleapis.com/v0/b/wonderwalker-260db.appspot.com/o/%EC%9A%B8%EB%A6%89%EB%8F%84.avif?alt=media&token=8155eb98-2f2a-4ed7-a95e-3173d5d87583",
		name: "울릉도",
	},
	{ 	
		url : "https://firebasestorage.googleapis.com/v0/b/wonderwalker-260db.appspot.com/o/%EC%A0%84%EC%A3%BC.avif?alt=media&token=0dfacfef-722d-436e-8655-a7dc869fbc33",
		name: "전주",
	},
	{ 	
		url : "https://firebasestorage.googleapis.com/v0/b/wonderwalker-260db.appspot.com/o/%EB%B6%80%EC%82%B0.jpg?alt=media&token=8d4c3bff-36df-4778-804d-eb4912e72e3f",
		name: "부산",
	},	
	{ 	
		url : "https://firebasestorage.googleapis.com/v0/b/wonderwalker-260db.appspot.com/o/%EB%8C%80%EC%A0%84.webp?alt=media&token=de1a63a4-1012-437b-8fe1-21bbc2a83e0e",
		name: "대전",
	},
	{ 	
		url : "https://firebasestorage.googleapis.com/v0/b/wonderwalker-260db.appspot.com/o/%EC%95%88%EB%8F%99.jpg?alt=media&token=1ee3d1b2-9159-4ded-adba-d083c2de68fe",
		name: "안동",
	},
	{ 	
		url : "https://firebasestorage.googleapis.com/v0/b/wonderwalker-260db.appspot.com/o/%EC%97%AC%EC%88%98.avif?alt=media&token=ea3de0e2-9a8b-438b-83e9-f6ec3593b105",
		name: "여수",
	},
]

const sssimg =[
	{ 
		url : "https://firebasestorage.googleapis.com/v0/b/wonderwalker-260db.appspot.com/o/%EC%9D%BC%EB%B3%B8.jpeg?alt=media&token=98b4e9ee-08ee-4d34-9023-2657d38d511d",
		name: "일본",
	},
	{ 	
		url : "https://firebasestorage.googleapis.com/v0/b/wonderwalker-260db.appspot.com/o/%EC%A4%91%EA%B5%AD.jpg?alt=media&token=62855aa8-0313-488f-b250-0b4a34c578e7",
		name: "중국",
	},
	{ 	
		url : "https://firebasestorage.googleapis.com/v0/b/wonderwalker-260db.appspot.com/o/%ED%83%9C%EA%B5%AD.jpg?alt=media&token=ff0baf39-6146-4af3-9f68-7a09faee42d8",
		name: "태국",
	},
	{ 	
		url : "https://firebasestorage.googleapis.com/v0/b/wonderwalker-260db.appspot.com/o/%EB%B2%A0%ED%8A%B8%EB%82%A8.avif?alt=media&token=971bf699-4329-477e-91c5-0cd12a87f953",
		name: "베트남",
	},
	{ 	
		url : "https://firebasestorage.googleapis.com/v0/b/wonderwalker-260db.appspot.com/o/%ED%95%84%EB%A6%AC%ED%95%80.jpg?alt=media&token=f633d905-aea7-4e49-aaee-28917f4d173c",
		name: "필리핀",
	},
	{ 	
		url : "https://firebasestorage.googleapis.com/v0/b/wonderwalker-260db.appspot.com/o/%ED%98%B8%EC%A3%BC.jpg?alt=media&token=ff2e59b1-1037-4ac3-804c-800582891a32",
		name: "호주",
	},
	{ 	
		url : "https://firebasestorage.googleapis.com/v0/b/wonderwalker-260db.appspot.com/o/%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8.jpg?alt=media&token=5735a9d1-608e-4d26-adcc-96df62137f6c",
		name: "코타키나발루",
	},
	{ 	
		url : "https://firebasestorage.googleapis.com/v0/b/wonderwalker-260db.appspot.com/o/%EB%AF%B8%EA%B5%AD.webp?alt=media&token=69ab4a73-d460-4309-9da8-cb4d5da19660",
		name: "미국",
	},
]
const clickedarea = (area) => {
	aeraSelect(area)
  };


  return (
    <Constainer>
    	<Slider {...settings}>
		{ worlds ==="korea" 
			?	koreaimg.map((data,index)=>(
					<ImgDiv key={index} onClick={()=>clickedarea(data.name)}>
						<Img src={data.url}/>
						<p className="title">{data.name}</p>
					</ImgDiv>
					))
			:	sssimg.map((data,index)=>(
					<ImgDiv key={index} onClick={()=>clickedarea(data.name)}>
						<Img src={data.url}/>
						<p className="title">{data.name}</p>
					</ImgDiv>
					))
		}
      </Slider>
    </Constainer>
  );
};

export default ImgSlide;
