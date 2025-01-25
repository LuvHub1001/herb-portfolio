import { useMedia } from "../../hooks";
import styled from "styled-components";

function Welcome() {
  const { isMobile } = useMedia();

  return (
    <section id="home">
      <WelcomeWrapper>
        <div>
          {isMobile ? (
            <h1 style={{ textAlign: "center" }}>DONGYEOP PORTFOLIO</h1>
          ) : (
            <h1>DONGYEOP PORTFOLIO</h1>
          )}
          <div className="img-box">
            <img
              alt="이미지를 불러오지 못했습니다."
              src="/images/selfie2.jpg"
            />
          </div>

          <div className="ment-box">
            <div>
              안녕하세요 &nbsp;<strong>FE DEVELOPER</strong>&nbsp;이동엽입니다.
            </div>
            <div>제 포트폴리오에 방문해주셔서 감사합니다.</div>
          </div>
        </div>
      </WelcomeWrapper>
    </section>
  );
}

export default Welcome;

const WelcomeWrapper = styled.div`
  display: flex;
  height: 550px;
  width: auto;
  justify-content: center;
  align-items: center;
  background-color: #00aff0;
  color: white;

  & h1 {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    letter-spacing: 5px;
  }

  .img-box {
    display: flex;
  }

  & img {
    margin: auto;
    width: 250px;
    height: 250px;
    border-radius: 100%;
  }

  .ment-box {
    width: 100%;
    display: inline-block;
    text-align: center;
    margin-top: 40px;
    font-size: 20px;
    letter-spacing: 0.5px;
  }
`;
