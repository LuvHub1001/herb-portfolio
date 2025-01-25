import styled from "styled-components";
import { useMedia, useMenu } from "../../hooks";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const { isMobile } = useMedia();
  const { isClick, handleMenuClick, handleScroll } = useMenu();

  return isMobile ? (
    <>
      <MobileNaviWrapper>
        <div className="mobile-navi-box">
          <div onClick={() => handleScroll("home")}>&nbsp;DongYeop</div>
          <MenuIcon fontSize="large" onClick={handleMenuClick} />
        </div>
      </MobileNaviWrapper>

      <MobileNaviItemWrapper className={isClick ? "open" : ""}>
        <div onClick={() => handleScroll("about")}>About Me</div>
        <div onClick={() => handleScroll("skill")}>Skill</div>
        <div onClick={() => handleScroll("project")}>Project</div>
        <div onClick={() => handleScroll("career")}>Career</div>
      </MobileNaviItemWrapper>
    </>
  ) : (
    <HeaderWrapper>
      <div className="navi-box">
        <div onClick={() => handleScroll("about")}>About Me</div>
        <div onClick={() => handleScroll("skill")}>Skill</div>
        <div onClick={() => handleScroll("project")}>Project</div>
        <div onClick={() => handleScroll("career")}>Career</div>
      </div>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  min-height: 60px;
  background-color: white;
  color: black;
  width: 100%;
  position: fixed;
  top: 0;

  .navi-box {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    font-size: 25px;
    font-weight: bold;
  }

  .navi-box > div {
    cursor: pointer;
  }
`;

const MobileNaviWrapper = styled.div`
  display: flex;
  min-height: 60px;
  align-items: center;
  width: 100%;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

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
    cursor: pointer;
  }
`;

const MobileNaviItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 1px solid grey;
  border-radius: 0 0 6px 6px;
  background-color: white;
  position: fixed;
  top: 60px;
  left: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  max-height: 0;
  z-index: 999;

  &.open {
    max-height: 200px;
  }

  div {
    padding: 10px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
  }
`;
