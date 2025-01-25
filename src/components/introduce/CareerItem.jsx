import styled from "styled-components";
import { useMedia } from "../../hooks";

function CareerItem() {
  const { isMobile } = useMedia();

  return (
    <ItemWrapper>
      <div className="item-box" style={{ width: isMobile ? "85%" : "35%" }}>
        <div className="item">KH정보교육원(수료): 2021.07 ~ 2022.02 </div>
        <div className="arrow">⬇️</div>
        <div className="item">웅진(인턴): 2022.05 ~ 2022.09</div>
        <div className="arrow">⬇️</div>
        <div className="item">재능e아카데미(연구원): 2022.11 ~ 재직중</div>
      </div>
    </ItemWrapper>
  );
}

export default CareerItem;

const ItemWrapper = styled.div`
  display: flex;
  width: auto;
  height: 300px;
  justify-content: center;
  margin-top: 20px;

  .item-box {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  .arrow {
    display: flex;
    margin-top: 5px;
  }

  .item {
    display: flex;
    width: 100%;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    height: 200px;
    border: 1px solid gray;
    border-radius: 8px;
    box-shadow: 8px 7px 1px 1px #efefef;
  }
`;
