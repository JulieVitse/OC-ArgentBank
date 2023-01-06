import styles from './Header.module.scss'
import logo from 'assets/images/argentBankLogo.png'
import iconUser from 'assets/images/icon-user.svg'

export function Header() {
    return (
      <header className={styles.header}>
        <nav className={styles.main_nav}>
          <a className={styles.main_nav_logo} href="./index.html">
            <img
              className={styles.main_nav_logo_image}
              src={logo}
              alt="Argent Bank Logo"
            />
            <h1 className={styles.sr_only}>Argent Bank</h1>
          </a>
          <div>
            <a className={styles.main_nav_item} href="./sign-in.html">
                <img className={styles.main_nav_item_icon} src={iconUser} alt="User Icon" />
              Sign In
            </a>
          </div>
        </nav>
      </header>
    )
}