import { AboutMeItem, RenderComponent } from "../";
import { introduce_data } from "../../lib/introduce";
import styled from "styled-components";

function AboutMe() {
  return (
    <AboutMeWrapper>
      <h1>About Me</h1>
      <RenderComponent
        className="about-render"
        items={introduce_data || []}
        render={(item) => {
          return <AboutMeItem items={item} />;
        }}
      />
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
