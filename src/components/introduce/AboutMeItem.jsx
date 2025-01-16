import styled from "styled-components";

function AboutMeItem() {
  return (
    <ItemWrapper>
      <div>가</div>
      <div>나</div>
      <div>다</div>
      <div>라</div>
    </ItemWrapper>
  );
}

export default AboutMeItem;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
