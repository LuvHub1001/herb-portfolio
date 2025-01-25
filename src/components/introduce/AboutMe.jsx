import { AboutMeItem, RenderComponent } from "../";
import { introduce_data } from "../../lib/introduce";
import styled from "styled-components";

function AboutMe() {
  return (
    <section id="about">
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
    </section>
  );
}

export default AboutMe;

const AboutMeWrapper = styled.div`
  margin-top: 100px;
  width: 100%;
  display: inline-block;
  min-height: 500px;
  text-align: center;
`;
