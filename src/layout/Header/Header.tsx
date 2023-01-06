import styles from './Header.module.scss'
import logo from 'assets/images/argentBankLogo.png'
import iconUser from 'assets/images/icon-user.svg'
import { NavLink } from 'react-router-dom'

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
                <img className={styles.main_nav_item_icon} src={iconUser} alt="User Icon" />
              Sign In
            </NavLink>
          </div>
        </nav>
      </header>
    )
}