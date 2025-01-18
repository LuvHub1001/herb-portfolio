import styled from "styled-components";

function Header() {
  return (
    <HeaderWrapper>
      <div className="navi-box">
        <div>About Me</div>
        <div>Skill</div>
        <div>Project</div>
        <div>Career</div>
      </div>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  min-height: 100px;
  background-color: white;
  color: black;

  .navi-box {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    font-size: 25px;
    font-weight: bold;
  }
`;
