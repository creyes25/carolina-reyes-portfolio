import styles from './Home.module.css'

function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.title}>
        <h1>Carolina Reyes</h1>
        <h2>Software Engineer</h2>
      </div>
      <div className={styles.pic_container}>
        <img src="./images/myself.jpg" alt="profile" />
      </div>
    </main>
  )
}

export default Home