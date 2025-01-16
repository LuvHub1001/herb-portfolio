import { AboutMeItem } from "../";
import styled from "styled-components";

function AboutMe() {
  return (
    <AboutMeWrapper>
      <h1>ABOUT ME</h1>
      <AboutMeItem />
    </AboutMeWrapper>
  );
}

export default AboutMe;

const AboutMeWrapper = styled.div`
  margin-top: 40px;
  width: 100%;
  display: inline-block;
  min-height: 500px;
  text-align: center;
`;
