import styled, { css } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
  width: 80%;
  height: 200px;
  margin-bottom: 50px;
  transition: all 1s ease;
  border-radius: 10px;
`;


const Img =styled.img`
	width: 90%;
	height: 200px;
	object-fit: cover;
	margin: 0 auto;
	border-radius: 10px;
	cursor: pointer;
`;

const ImgDiv =styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ImgSlide = () => {

  const settings = {
	slide: "div",
	autoplay: true, // 자동 스크롤 사용 여부
	pauseOnHover: true,
	autoplaySpeed: 1000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
	infinite: true, // 무한
    dots: true, // 
    speed: 20,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
	draggable: true,
  };

  return (
    <Constainer>
    	<Slider {...settings}>
			<ImgDiv>
				<Img src='https://images.pexels.com/photos/12066797/pexels-photo-12066797.jpeg'/>
			</ImgDiv>
				<ImgDiv>
			<Img src='https://i.pinimg.com/236x/0c/01/e1/0c01e13f877ba2ef7f71175aa612e219.jpg' />
				</ImgDiv>
			<ImgDiv>
				<Img src='https://d3kxs6kpbh59hp.cloudfront.net/community/COMMUNITY/1552aee2f1704b62b7e7628cff0cbc2c/9106f352eb2545a2b2c9f17c646160dc_1620190538.jpg' />
			</ImgDiv>
			<ImgDiv>
				<Img src='https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=13072045&filePath=L2Rpc2sxL25ld2RhdGEvMjAxOC85OC9DTFMyLzEzMDcyMDQ1X0NOVFJfV1JUMjAxODAzMzBfNg==&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10006' />
			</ImgDiv>
			<ImgDiv>
				<Img src='https://images.pexels.com/photos/12066797/pexels-photo-12066797.jpeg' />
			</ImgDiv>
      </Slider>
    </Constainer>
  );
};

export default ImgSlide;
