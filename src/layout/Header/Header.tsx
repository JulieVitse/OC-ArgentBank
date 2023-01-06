import styles from './Header.module.scss'
import logo from 'assets/images/argentBankLogo.png'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

export function Header() {
    return (
      <header className={styles.header}>
        <nav className={styles.main_nav}>
          <NavLink className={styles.main_nav_logo} to="/">
            <img
              className={styles.main_nav_logo_image}
              src={logo}
              alt="Argent Bank Logo"
            />
            <h1 className={styles.sr_only}>Argent Bank</h1>
          </NavLink>
          <div>
            <NavLink className={styles.main_nav_item} to="/sign-in">
              <FontAwesomeIcon icon={faCircleUser} />
              Sign In
            </NavLink>
          </div>
        </nav>
      </header>
    )
}