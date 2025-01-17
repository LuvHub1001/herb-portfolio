import styled from "styled-components";

function AboutMeItem({ items }) {
  return (
    <ItemWrapper className="item-wrapper">
      <div className="item-box">{items.title}</div>
    </ItemWrapper>
  );
}

export default AboutMeItem;

const ItemWrapper = styled.div`
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;

  .item-box {
    display: flex;
    width: 40%;
    height: 70px;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
    border-radius: 8px;
  }
`;
