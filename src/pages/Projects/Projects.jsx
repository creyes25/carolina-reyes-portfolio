import projects from "../../data/project"
import ProjectList from "../../components/ProjectList/ProjectList"

function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <div>
        <ProjectList projects={projects}/>
      </div>
    </>

  )
}

export default Projects