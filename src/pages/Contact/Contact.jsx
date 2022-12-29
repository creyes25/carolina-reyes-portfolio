import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import styles from './Contact.module.css'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function Contact() {
  return (
    <main className={styles.contact}>
      <div className={styles.contact_info}>
        <h1>Contact</h1>
        <p>
          Say hello, I'd love to hear from you! If you have any questions or would like to collaborate, email me or connect with me via LinkedIn and Github.
        </p>
      </div>
      <div>
        <p>Reach out!</p>
        <ul className={styles.contactList}>
          <li><a href="mailto:carolina.reyes2022@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></a></li>
          <li><a href="https://www.linkedin.com/in/carolinareyes25/" target='_blank' rel="noreferrer" ><FontAwesomeIcon icon={faLinkedin} /></a></li>
          <li><a href="https://github.com/creyes25" target='_blank' rel='noreferrer' ><FontAwesomeIcon icon={faGithub}/></a></li>
        </ul>
      </div>
    </main>
  )
}

export default Contact
