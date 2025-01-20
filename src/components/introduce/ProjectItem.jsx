import styled from "styled-components";

function ProjectItem({ items }) {
  const altText = "이미지를 불러오지 못했습니다.";

  return (
    <ItemWrapper className="item-wrapper">
      <div className="image-box">
        <img src={items.img} alt={altText} />
      </div>

      <div className="description-box">
        {[items].map((item) => {
          return (
            <div key={item.id} className="description">
              <div>프로젝트명: {items.title}</div>
              <div>프로젝트 기간: {items.during}</div>
              <div>참여 인원: {item.member}</div>
              <div>사용 기술: {item.projectSkill}</div>
              <div>설명: {item.description}</div>
              <div>링크: {item.link}</div>

              <br />
              <div>
                {item.impact.map((item) => {
                  return (
                    <div key={item.id}>
                      <div>[{item.impactTitle}]</div>
                      <div>➡️ {item.impactContent}</div>
                      <br />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </ItemWrapper>
  );
}

export default ProjectItem;

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
    width: 600px;
    height: 330px;
    border-radius: 8px;
  }

  .description > div {
    white-space: pre-line;
  }

  .description-box {
    display: flex;
    font-size: 17px;
    padding-top: 30px;
    padding-left: 15px;
    align-items: flex-start;
    text-align: left;
    width: 50%;
    border: 2px solid #efefef;
    border-radius: 8px;
  }
`;
