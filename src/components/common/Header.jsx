import styled from "styled-components";
import { useMedia, useMenu } from "../../hooks";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const { isMobile } = useMedia();
  const { isClick, handleMenuClick } = useMenu();

  return isMobile ? (
    <>
      <MobileNaviWrapper>
        <div className="mobile-navi-box">
          <div>&nbsp;DongYeop</div>
          <MenuIcon fontSize="large" onClick={handleMenuClick} />
        </div>
      </MobileNaviWrapper>
      {isClick ? (
        <MobileNaviItemWrapper>
          <div>About Me</div>
          <div>Skill</div>
          <div>Project</div>
          <div>Career</div>
        </MobileNaviItemWrapper>
      ) : (
        <></>
      )}
    </>
  ) : (
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

const MobileNaviWrapper = styled.div`
  display: flex;
  min-height: 60px;
  align-items: center;

  .mobile-navi-box {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .mobile-navi-box > div {
    display: flex;
    color: grey;
    letter-spacing: 5px;
    align-items: center;
  }
`;

const MobileNaviItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 60px;
  width: 100%;
  border-top: 1px solid grey;
  border-radius: 0 0 6px 6px;
  background-color: white;
  position: absolute;
  overflow: hidden;

  div {
    padding: 10px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
  }
`;
