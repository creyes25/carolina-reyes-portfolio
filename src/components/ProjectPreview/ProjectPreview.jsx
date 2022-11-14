import {Link} from "react-router-dom"
import hyphenateWords from "../../utilities/hyphenateWords"
import styles from './ProjectPreview.module.css'

function ProjectPreview({project}) {
  let path = hyphenateWords(project.title)
  return (
    <>
      
      <div className={styles.card}>
        <img src={project.image} alt={project.title} />
        <section>
          <h3>{project.title}</h3>
          <Link to={path}>
            <button>Learn More</button>
          </Link>
        </section>
      </div>
    </>
  )
}

export default ProjectPreview;