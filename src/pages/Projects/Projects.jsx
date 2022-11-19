import projects from "../../data/project"
import ProjectList from "../../components/ProjectList/ProjectList"
import styles from "./Projects.module.css"

function Projects() {
  return (
    <>
      <h1 className={styles.projects}>Projects</h1>
      <div>
        <ProjectList projects={projects}/>
      </div>
    </>

  )
}

export default Projects