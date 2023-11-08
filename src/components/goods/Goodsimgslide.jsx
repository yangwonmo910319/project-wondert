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
  .slick-next:before {
    color: black;
    font-size: 30px;
  }
  .slick-prev:before {
    color: black;
    font-size: 30px;
  }
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

const Goodsimgslide = (props) => {
  const { img1, img2, img3 } = props;

  const settings = {
    autoplay: false,
    slide: "div",
    infinite: true, // 무한
    dots: false, //
    speed: 20,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: (
      <button type="button" class="slick-prev">
        Previous
      </button>
    ), // 이전 화살표 모양 설정
    nextArrow: (
      <button type="button" class="slick-next">
        Next
      </button>
    ),
  };

  return (
    <Constainer>
      <Slider {...settings}>
        <ImgDiv>
          <Img src={img1} alt="첫번쨰 서브이미지" />
        </ImgDiv>
        <ImgDiv>
          <Img src={img2} alt="두번쨰 서브이미지" />
        </ImgDiv>
        <ImgDiv>
          <Img src={img3} alt="세번쨰 서브이미지" />
        </ImgDiv>
      </Slider>
    </Constainer>
  );
};

export default Goodsimgslide;
