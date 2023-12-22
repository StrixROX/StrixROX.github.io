import styles from './page.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDribbble, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import Image from 'next/image'

const stylesjoin = (...args) => args.join(" ")

const icons = {
  github: <FontAwesomeIcon icon={faGithub} />,
  linkedin: <FontAwesomeIcon icon={faLinkedin} />,
  dribbble: <FontAwesomeIcon icon={faDribbble} />,
  email: <FontAwesomeIcon icon={faEnvelope} />,
}

export default function Home() {
  return (
    <>
      <div className={styles.pageWrapper}>
        <header>
          <h1 className={styles.myName}>Pratyush Kumar</h1>
          <div className={styles.links}>
            <div className={styles.socials}>
              <div className={stylesjoin(styles.icon, styles.github)}>
                <a href="https://github.com/StrixROX" target='_blank'>{icons.github}</a>
              </div>
              <div className={stylesjoin(styles.icon, styles.linkedin)}>
                <a href="https://www.linkedin.com/in/pratyushkumar1032/" target='_blank'>{icons.linkedin}</a>
              </div>
              <div className={stylesjoin(styles.icon, styles.dribbble)}>
                <a href="https://dribbble.com/StrixROX" target='_blank'>{icons.dribbble}</a>
              </div>
              <div className={stylesjoin(styles.icon, styles.email)}>
                <a href="mailto:pk1234pratyushk@gmail.com" target='_blank'>{icons.email}</a>
              </div>
            </div>
            <a href="https://drive.google.com/file/d/1bF1ocde19cUv59mU07LsPbql_j5174VI/view?usp=drive_link" target="_blank" className={styles.resume}>Resume</a>
          </div>
        </header>
        <div className={styles.pfp}>
          <Image src="/images/pratyush.jpg" alt="Pratyush Kumar" loading="lazy" fill={true} objectFit="cover"></Image>
        </div>
      </div>
    </>
  )
}
