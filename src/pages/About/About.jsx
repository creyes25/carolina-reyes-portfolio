import styles from './About.module.css'
function About() {
  return ( 
    <main className={styles.about}>
      <h1 className={styles.title}>About</h1>
      <div className={styles.aboutContainer}>
        <div className={styles.about_pic}>
          <img src="./images/myself.jpg" alt="myself" />
        </div> 
        <div className={styles.about_desc}>
          <p>I’m a Software Engineer that loves to create and transform something out of nothing. I'm driven to learn, persistent, and I'm passionate about finding different ways to problem solve and trying things outside my comfort zone. This allows me to grow not only as a developer but as a person. My dedication and passion allows me to be trustworthy. I'm enthusiastic about working with clients to provide them an outstanding level of support  throughout the process.  
          </p>
        </div>   

      </div>
    </main>
  )
}

export default About