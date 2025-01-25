import styled from "styled-components";
import { useMedia } from "../../hooks";
import { RenderComponent, ProjectItem } from "../";
import { project_data } from "../../lib/project";

function Project() {
  const { isMobile } = useMedia();

  return (
    <section id="project">
      <ProjectWrapper>
        <h1>Project</h1>
        <RenderComponent
          className="project-render"
          items={isMobile ? [project_data[0]] : project_data}
          render={(item) => <ProjectItem items={item} />}
        />
      </ProjectWrapper>
    </section>
  );
}

export default Project;

const ProjectWrapper = styled.div`
  display: inline-block;
  margin-top: 100px;
  width: 100%;
  min-height: 700px;
  text-align: center;
`;
