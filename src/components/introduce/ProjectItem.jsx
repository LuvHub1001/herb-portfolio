import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMedia } from "../../hooks";
import { project_data } from "../../lib/project";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const projectImages = [
  { id: "portfolio", images: ["/images/portfolio.png"] },
  { id: "toy-js", images: ["/images/Nodejs.png"] },
  { id: "address", images: ["/images/address.png"] },
];

const altText = "이미지를 불러오지 못했습니다.";

function ProjectItem({ items }) {
  const { isMobile } = useMedia();

  const ProjectDescription = ({ projectDetails }) => (
    <div className="description-box">
      <div className="description">
        <div>프로젝트명: {projectDetails.title}</div>
        <div>프로젝트 기간: {projectDetails.during}</div>
        <div>참여 인원: {projectDetails.member}</div>
        <div>사용 기술: {projectDetails.projectSkill.join(", ")}</div>
        <div>설명: {projectDetails.description}</div>
        <div>
          링크:{" "}
          {projectDetails.link ? (
            <a
              style={{ color: "inherit", textDecoration: "none" }}
              href={projectDetails.link}
              target="_blank"
              rel="noreferrer"
            >
              {projectDetails.link}
            </a>
          ) : (
            "링크 없음"
          )}
        </div>
        <br />
        {projectDetails.impact.map((impact, idx) => (
          <div key={idx}>
            <div>[{impact.impactTitle}]</div>
            {impact.impactContent.map((content, idx) => (
              <div key={idx}>➡️ {content}</div>
            ))}
            <br />
          </div>
        ))}
      </div>
    </div>
  );

  return isMobile ? (
    <MobileWrapper>
      <Slider {...sliderSettings}>
        {projectImages.map((project) => {
          const projectDetails = project_data.find(
            (data) => data.id === project.id,
          );

          return (
            <div key={project.id} className="project-item">
              <div className="project-img-group">
                {project.images.map((src, idx) => (
                  <div key={idx} className="project-img-box">
                    <img alt={altText} src={src} />
                  </div>
                ))}
              </div>
              {projectDetails && (
                <ProjectDescription projectDetails={projectDetails} />
              )}
            </div>
          );
        })}
      </Slider>
    </MobileWrapper>
  ) : (
    <ItemWrapper className="item-wrapper">
      <div className="image-box">
        <img src={items.img} alt={altText} />
      </div>
      <ProjectDescription projectDetails={items} />
    </ItemWrapper>
  );
}

export default ProjectItem;

// Styled Components
const ItemWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-around;

  .image-box {
    margin: 0;
    width: 35%;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #efefef;
    border-radius: 8px;
  }

  & img {
    width: 400px;
    height: 330px;
    border-radius: 8px;
  }

  .description-box {
    display: flex;
    flex-direction: column;
    font-size: 17px;
    padding: 20px;
    align-items: flex-start;
    text-align: left;
    width: 50%;
    border: 2px solid #efefef;
    border-radius: 8px;
  }
`;

const MobileWrapper = styled.div`
  margin: 20px auto;
  width: 90%;

  .project-item {
    text-align: center;
    padding: 10px;
  }

  .project-img-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .project-img-box {
    margin: 10px;
  }

  & img {
    width: 350px;
    height: 400px;
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
