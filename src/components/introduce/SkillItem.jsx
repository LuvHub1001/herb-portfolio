import styled from "styled-components";

function SkillItem() {
  const altText = "이미지를 불러오지 못했습니다.";

  return (
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
