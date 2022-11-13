import styles from './ProjectPreview.module.css'

function ProjectPreview({project}) {
  return (
    <>
      <div className={styles.card}>
        <img src={project.image} alt={project.title} />
        <section>
          <h3>{project.title}</h3>
          <button>Learn More</button>
        </section>
      </div>
    </>
  )
}

export default ProjectPreview;