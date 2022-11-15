import styles from './ProjectList.module.css'
import ProjectPreview from "../ProjectPreview/ProjectPreview";

function ProjectList({projects}) {
  return (
    <>
      <ul className={styles.projectList}>
        {projects.map((project, i) =>
          <ProjectPreview key={i} project={project} />
        )}
      </ul>
    </>
  )
}

export default ProjectList;