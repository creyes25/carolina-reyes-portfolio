import { Link } from "react-router-dom"
import styles from './NavBar.module.css'

function NavBar() {
  return (
    <>
      <nav>
        <Link to='/' className={styles.name}>
          Carolina Reyes
        </Link>
        <ul className={styles.navlinks}>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/resume'>Resume</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar