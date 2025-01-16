import styled from "styled-components";

function AboutMe() {
  return (
    <AboutMeWrapper>
      <h1>ABOUT ME</h1>
    </AboutMeWrapper>
  );
}

export default AboutMe;

const AboutMeWrapper = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: center;
`;
