import projects from "../../data/project"
import {useParams} from 'react-router-dom'
import findProject from "../../utilities/findProject"

function ProjectDetails() {
  const {projectDetails} = useParams()

  const foundProject = findProject(projectDetails)

  return (
    <>
      <h1>{foundProject.title}</h1>
      <p>{foundProject.description}</p>
      <img src={foundProject.image} alt={foundProject.title} />
      <a href={foundProject.repositoryLink}>
        <button>View code</button>
      </a>
      <a href={foundProject.deploymentLink}>
        <button>View Deployed App</button>
      </a>
    </>
  )
}

export default ProjectDetails