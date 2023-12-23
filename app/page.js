import styles from './page.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDribbble, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import Image from 'next/image'
import Accordion from './components/Accordion'

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
          <Image src="/images/pratyush.jpg" alt="Pratyush Kumar" fill={true} sizes="(max-width: 600px) 70vw, 600px" priority={true} style={{ objectFit: "cover" }}></Image>
        </div>
        <main>
          <Accordion title="EDU">
            <dl className={styles.eduContainer}>
              <dt>Indian Institute of Technology Patna</dt>
              <dd>
                <span>Bachelor of Technology</span>
                <span>Mechanical Engineering (CPI: 8.53)</span>
                <span style={{ textAlign: 'right' }}>Bihar, India</span>
                <span style={{ textAlign: 'right' }}>
                  <time dateTime="2020-05">May 2020</time> - <time dateTime="2024-05">May 2024</time>
                </span>
              </dd>
            </dl>
          </Accordion>
          <Accordion title="ABT" defaultShow={true}>
            <div className={styles.abtContainer}>
              <p>I am Pratyush Kumar, a final-year B.Tech. student at the Indian Institute of Technology (IIT), Patna, India. I am currently pursuing my Bachelor's in Mechanical Engineering and actively looking for full-time work opportunities as a Web Developer.</p>

              <p>I have worked with various frontend and backend technologies like NodeJS, ReactJS, MongoDB, REST APIs, Linux, and Python over the last 4+ years, complemented by my UI/UX design sensibilities. I have a keen eye for visual detail and am passionate about web development. I have also worked as a web development team lead for various events held at my institute including TEDxIITPatna'22.</p>
            </div>
          </Accordion>
          <Accordion title="SKL" defaultShow={true}>
            <div className={styles.sklContainer}>
              Languages <ul>
                <li>JavaScript</li>
                <li>C/C++</li>
                <li>Python</li>
                <li>SQL</li>
              </ul>
              Development Technologies <ul>
                <li>React.js</li>
                <li>Next.js</li>
                <li>REST APIs</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Vue.js</li>
                <li>MongoDB</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>Linux</li>
                <li>SQLite</li>
                <li>TailwindCSS</li>
                <li>SCSS/Sass</li>
                <li>Websockets</li>
              </ul>
              Degree Courses <ul>
                <li>Python Programming</li>
                <li>Data Science</li>
              </ul>
            </div>
          </Accordion>
        </main>
      </div>
    </>
  )
}
