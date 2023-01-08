import styles from './Login.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export function Login() {
  return (
    <main className={`${styles.main} ${styles.bg_dark}`}>
      <section className={styles.sign_in_content}>
        <FontAwesomeIcon icon={faUserCircle} className={styles.sign_in_icon} />
        <h1>Sign In</h1>
        <form>
          <div className={styles.input_wrapper}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className={styles.input_wrapper}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className={styles.input_remember}>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className={styles.sign_in_button}>
            <Link to="/user">
              Sign In
            </Link>
          </button>
        </form>
      </section>
    </main>
  )
}
    

