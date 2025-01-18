import { SkillItem } from "../";
import styled from "styled-components";

function Skill() {
  return (
    <SkillWrapper>
      <h1>Skill</h1>
      <SkillItem />
    </SkillWrapper>
  );
}

export default Skill;

const SkillWrapper = styled.div`
  display: inline-block;
  width: 100%;
  min-height: 500px;
  text-align: center;
`;
