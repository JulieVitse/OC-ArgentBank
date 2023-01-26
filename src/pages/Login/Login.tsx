import styles from './Login.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from 'features/userSlice'
import { getUserProfile, signIn } from 'services/api'



export function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
   
    const handleSubmit = async (e: any) => {
      e.preventDefault()

      try {
        const response = await signIn(email, password)
        //localStorage.setItem('token', response)
        if (response) {
          const resUserProfile = await getUserProfile(response)
          if (resUserProfile) {
            dispatch(
              login({
                loggedIn: true,
                token: response,
                rememberMe,
                firstName: resUserProfile.firstName,
                lastName: resUserProfile.lastName
              })
            )
          }
          //console.log(rememberMe)
          
          navigate('/account')
        } else {
          alert('Invalid credentials')
        }
      } catch ({ response }) {
        console.log(response)
      }
    }
   
  return (
    <main className={`${styles.main} ${styles.bg_dark}`}>
      <section className={styles.sign_in_content}>
        <FontAwesomeIcon icon={faUserCircle} className={styles.sign_in_icon} />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.input_wrapper}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.input_wrapper}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={styles.input_remember}>
            <input
              type="checkbox"
              id="remember-me"
              defaultChecked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className={styles.sign_in_button}>
            Sign In
          </button>
        </form>
      </section>
    </main>
  )
}
    

