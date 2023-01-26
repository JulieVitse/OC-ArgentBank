import styles from './Account.module.scss'
import { accountContent } from 'data/accountData'
import { AccountCard } from 'components/AccountCard/AccountCard'
import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { selectUser, updateUser } from 'features/userSlice'

import { updateUserProfile } from 'services/api'


export function Account() {
  const user = JSON.parse(useSelector(selectUser))

  const dispatch = useDispatch()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const [showModal, setShowModal] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const response = await updateUserProfile(firstName, lastName)
    if (response) {
    dispatch(updateUser({firstName, lastName}))
    setShowModal(!showModal)
    } else {
      alert('Something went wrong')
    }
  }

  return (
    <main className={`${styles.main} ${styles.bg_dark}`}>
      {!showModal ? (
        <div className={styles.header}>
          <h1>
            Welcome back
            <br />
            {user.firstName} {user.lastName}
          </h1>

          <button
            className={styles.edit_button}
            onClick={() => setShowModal(!showModal)}
          >
            Edit Name
          </button>
        </div>
      ) : (
        <div className={styles.header}>
          <h1>Welcome back</h1>
          <form className={styles.edit__modal} onSubmit={handleSubmit}>
            <div className={styles.edit__modal__content}>
              <input
                type="text"
                placeholder={user.firstName}
                className={styles.edit__modal__content__input}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder={user.lastName}
                className={styles.edit__modal__content__input}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className={styles.edit__modal__buttons}>
              <button
                type="submit"
                className={styles.edit__modal__buttons__btn}
              >
                Save
              </button>
              <button
                className={styles.edit__modal__buttons__btn}
                onClick={() => setShowModal(!showModal)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <h2 className={styles.sr_only}>Accounts</h2>

      {accountContent.map((account, index) => (
        <AccountCard key={index} {...account} />
      ))}
    </main>
  )
}
