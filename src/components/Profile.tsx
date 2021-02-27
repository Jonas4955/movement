import { useContext } from 'react'
import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengesContexts'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext)
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/jonas4955.png" alt="Jonas Antunes" />
      <div>
        <strong>Jonas Antunes</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}
