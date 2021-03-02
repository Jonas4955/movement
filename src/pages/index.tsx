import React from 'react'
import { useRouter } from 'next/router'

import styles from '../styles/pages/Login.module.css'

export default function Login() {
  const router = useRouter()
  const onSubmitLogin = event => {
    event.preventDefault()
    router.push('/home')
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.backgroundLogo}>
        <img src="icons/background-logo.svg" alt="Background Logo" />
      </div>
      <div>
        <img src="icons/login-logo.png" alt="Logo Movement" />
        <h2>Bem-vindo</h2>
        <img src="icons/github.svg" alt="Github login" />

        <form onSubmit={onSubmitLogin}>
          <div>
            <input type="text" className={styles.inputLogin} />
            <button type="submit" className={styles.buttonLogin}>
              ->
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
