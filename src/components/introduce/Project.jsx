import styled from "styled-components";
import { RenderComponent, ProjectItem } from "../";
import { project_data } from "../../lib/project";
function Project() {
  return (
    <ProjectWrapper>
      <h1>비비디바비디부</h1>
      <RenderComponent
        className="project-render"
        items={project_data || []}
        render={(item) => {
          return <ProjectItem items={item} />;
        }}
      />
    </ProjectWrapper>
  );
}

export default Project;

const ProjectWrapper = styled.div`
  display: inline-block;
  width: 100%;
  min-height: 700px;
  text-align: center;
`;
