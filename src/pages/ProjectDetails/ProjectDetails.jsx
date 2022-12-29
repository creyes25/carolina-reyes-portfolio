import styles from './ProjectDetails.module.css'
import {useParams} from 'react-router-dom'
import findProject from "../../utilities/findProject"

function ProjectDetails() {
  const {projectDetails} = useParams()

  const foundProject = findProject(projectDetails)

  return (
    <>
    <div className={styles.details}>
      <div className={styles.project}>
        <h1>{foundProject.title}</h1>
        <p>{foundProject.description}</p>
      </div>
      <div className={styles.detailsBtns}>
        <a href={foundProject.repositoryLink} target='_blank' rel='noreferrer'>
          <button>View code</button>
        </a>
        <a href={foundProject.deploymentLink} target='_blank' rel='noreferrer'>
          <button>View Deployed App</button>
        </a>
      </div>
      <img 
        src={foundProject.image} 
        alt={foundProject.title} 
        className={styles.projectImage}
      />
      <div className={styles.technologies}>
        {foundProject.technologies.map(tech => 
          <div key={tech} className={styles.tech}>
              <img 
                src={`../images/technologies/${tech}.png`} 
                alt={tech} />
            <h4>{tech}</h4>

            </div>
        )}
      </div>
    </div>


    </>
  )
}

export default ProjectDetails