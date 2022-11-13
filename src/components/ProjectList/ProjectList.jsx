import ProjectPreview from "../ProjectPreview/ProjectPreview";

function ProjectList({projects}) {
  return (
    <>
      <ul>
        {projects.map((project, i) =>
          <ProjectPreview key={i} project={project} />
        )}
      </ul>
    </>
  )
}

export default ProjectList;