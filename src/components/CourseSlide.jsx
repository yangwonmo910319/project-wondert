import styled, { css } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SliberConstainer = styled.div`
  width: 80%;
  height: 300px;
  margin: 10px;
  transition: all 1s ease;
  border-radius: 10px;
`;

const SliderImg = styled.img`
  width: 90%;
  height: 300px;
  object-fit: cover;
  margin: 0 auto;
  border-radius: 10px;
  cursor: pointer;
`;

const SliderImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CourseSlide = () => {
  const settings = {
    slide: "div",
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    draggable: true,
  };

  return (
    <SliberConstainer>
      <Slider {...settings}>
        <SliderImgDiv>
          <SliderImg src="https://images.pexels.com/photos/12066797/pexels-photo-12066797.jpeg" />
        </SliderImgDiv>
        <SliderImgDiv>
          <SliderImg src="https://cdn.travie.com/news/photo/first/201710/img_19975_1.jpg" />
        </SliderImgDiv>
        <SliderImgDiv>
          <SliderImg src="https://cdn.travie.com/news/photo/first/201710/img_19975_1.jpg" />
        </SliderImgDiv>
        <SliderImgDiv>
          <SliderImg src="https://cdn.travie.com/news/photo/first/201710/img_19975_1.jpg" />
        </SliderImgDiv>
        <SliderImgDiv>
          <SliderImg src="https://cdn.travie.com/news/photo/first/201710/img_19975_1.jpg" />
        </SliderImgDiv>
      </Slider>
    </SliberConstainer>
  );
};

export default CourseSlide;
