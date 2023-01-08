import styles from './Account.module.scss'
import { accountContent } from 'data/accountData'
import { AccountCard } from 'components/AccountCard/AccountCard'

export function Account() {
    return (
      <main className={`${styles.main} ${styles.bg_dark}`}>
        <div className={styles.header}>
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button className={styles.edit_button}>Edit Name</button>
        </div>
        <h2 className={styles.sr_only}>Accounts</h2>

        {accountContent.map((account, index) => (
            <AccountCard key={index} {...account} />
        ))}
        
      </main>
    )
}