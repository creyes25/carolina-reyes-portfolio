import styles from './Resume.module.css'

function Resume() {
  return (
    <main className={styles.resume}>
      <h1>Resume</h1>
      <p>Click icon to download my resume </p>
      <div className={styles.resume_icon}>
        <a href="/resume/porfolioResume.pdf" download><img src="../images/resume-icon.png" alt="" /></a>
      </div>
    </main>
  )
}

export default Resume