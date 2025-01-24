import styled from "styled-components";
import Slider from "react-slick";
import { useMedia } from "../../hooks";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SkillItem() {
  const altText = "이미지를 불러오지 못했습니다.";
  const { isMobile } = useMedia();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const skillItems = [
    {
      id: "front-item",
      images: [
        "/images/JS.png",
        "/images/TS.svg",
        "/images/React.png",
        "/images/Jquery.png",
      ],
    },
    {
      id: "query-item",
      images: [
        "/images/mssql.jpg",
        "/images/mysql.png",
        "/images/oracle.png",
        "/images/Nodejs.png",
      ],
    },
    {
      id: "tool-item",
      images: [
        "/images/styled-components.png",
        "/images/mui.jpg",
        "/images/git.png",
        "/images/figma.avif",
      ],
    },
  ];

  return isMobile ? (
    <MobileWrapper>
      <Slider {...settings}>
        {skillItems.map((skill) => (
          <div key={skill.id} className="mobile-skill-item">
            <div className="mobile-skill-img-group">
              {skill.images.map((src, idx) => (
                <div key={idx} className="mobile-skill-img-box">
                  <img alt={altText} src={src} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </MobileWrapper>
  ) : (
    <ItemWrapper className="item-wrapper">
      <div className="skill-item front-item">
        <div className="skill-img-box">
          <img alt={altText} src="/images/JS.png" />
          <img alt={altText} src="/images/TS.svg" />
        </div>
        <div className="skill-img-box">
          <img alt={altText} src="/images/React.png" />
          <img alt={altText} src="/images/Jquery.png" />
        </div>
      </div>

      <div className="skill-item query-item">
        <div className="skill-img-box">
          <img alt={altText} src="/images/mssql.jpg" />
          <img alt={altText} src="/images/mysql.png" />
        </div>
        <div className="skill-img-box">
          <img alt={altText} src="/images/oracle.png" />
          <img alt={altText} src="/images/Nodejs.png" />
        </div>
      </div>

      <div className="skill-item tool-item">
        <div className="skill-img-box">
          <img alt={altText} src="/images/styled-components.png" />
          <img alt={altText} src="/images/mui.jpg" />
        </div>
        <div className="skill-img-box">
          <img alt={altText} src="/images/git.png" />
          <img alt={altText} src="/images/figma.avif" />
        </div>
      </div>
    </ItemWrapper>
  );
}

export default SkillItem;

const ItemWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  width: 100%;
  height: 450px;
  justify-content: space-around;
  align-items: center;

  .skill-item {
    display: grid;
    align-items: center;
    grid-template-rows: repeat(2, 1fr);
    width: 500px;
    height: 400px;
    border: 2px solid #efefef;
    border-radius: 12px;
  }

  .skill-img-box {
    display: flex;
    justify-content: space-around;
  }

  & img {
    width: 150px;
    height: 150px;
  }
`;

const MobileWrapper = styled.div`
  margin: 20px auto;
  width: 90%;

  .mobile-skill-item {
    text-align: center;
    padding: 10px;
  }

  .mobile-skill-img-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .mobile-skill-img-box {
    margin: 10px;
  }

  & img {
    width: 120px;
    height: 120px;
  }

  .slick-dots li button:before {
    font-size: 10px;
    color: gray;
  }

  .slick-prev:before,
  .slick-next:before {
    color: black;
  }
`;
