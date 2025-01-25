import { SkillItem } from "../";
import styled from "styled-components";

function Skill() {
  return (
    <section id="skill">
      <SkillWrapper>
        <h1>Skill</h1>
        <SkillItem />
      </SkillWrapper>
    </section>
  );
}

export default Skill;

const SkillWrapper = styled.div`
  display: inline-block;
  margin-top: 100px;
  width: 100%;
  min-height: 500px;
  text-align: center;
`;
