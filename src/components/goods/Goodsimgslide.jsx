import styled, { css } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// 상품 상세보기페이지 : 이미지 슬라이더 

const Constainer = styled.div`
  width: 800px;
  height: 400px;
  margin-bottom: 50px;
  transition: all 1s ease;
  margin: 10px 0;
`;

const Img = styled.img`
  width: 800px;
  height: 400px;
  object-fit: cover;
  margin: 0;

`;

const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;

`;

// const SlickSlider = (props) => {
//     const { children } = props;   나중에 이런식으로 넣으면됨
{
  /* <React.Fragment>
<StyledSlider {...settings}>{children}</StyledSlider>
</React.Fragment> 나중에 이런식으로 넣으면됨  */
}

const Goodsimgslide = () => {
  const settings = {
    autoplay: false,
    slide: "div",
    infinite: true, // 무한
    dots: false, //
    speed: 20,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <button  type='button' class='slick-prev'>Previous</button>, // 이전 화살표 모양 설정
    nextArrow: <button type='button' class='slick-next'>Next</button>, 
  };




  return (
    <Constainer>
      <Slider {...settings}>
        <ImgDiv>
          <Img src="https://images.pexels.com/photos/12066797/pexels-photo-12066797.jpeg" />
        </ImgDiv>
        <ImgDiv>
          <Img src="https://i.pinimg.com/236x/0c/01/e1/0c01e13f877ba2ef7f71175aa612e219.jpg" />
        </ImgDiv>
        <ImgDiv>
          <Img src="https://d3kxs6kpbh59hp.cloudfront.net/community/COMMUNITY/1552aee2f1704b62b7e7628cff0cbc2c/9106f352eb2545a2b2c9f17c646160dc_1620190538.jpg" />
        </ImgDiv>
        <ImgDiv>
          <Img src="https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=13072045&filePath=L2Rpc2sxL25ld2RhdGEvMjAxOC85OC9DTFMyLzEzMDcyMDQ1X0NOVFJfV1JUMjAxODAzMzBfNg==&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10006" />
        </ImgDiv>
        <ImgDiv>
          <Img src="https://images.pexels.com/photos/12066797/pexels-photo-12066797.jpeg" />
        </ImgDiv>
      </Slider>
    </Constainer>
  );
};

export default Goodsimgslide;
