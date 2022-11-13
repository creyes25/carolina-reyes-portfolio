import projects from "../../data/project"
function ProjectDetails() {
  return (
    <>
      <h1>{projects[0].title}</h1>
      <p>{projects[0].description}</p>
      <img src={projects[0].image} alt={projects[0].title} />
      <a href={projects[0].repositoryLink}>
        <button>View code</button>
      </a>
      <a href={projects[0].deploymentLink}>
        <button>View Deployed App</button>
      </a>
    </>
  )
}

export default ProjectDetails