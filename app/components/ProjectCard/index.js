import styles from './style.module.css'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const stylesjoin = (...args) => args.join(" ")

const icons = {
  github: <FontAwesomeIcon icon={faGithub} />,
  preview: <FontAwesomeIcon icon={faArrowUpRightFromSquare} />,
}

function zeroPadding(num, len) {
  num = String(num)
  while (num.length < len) {
    num = "0" + num
  }

  return num
}

export default function ProjectCard({ index, title, thumbnailSrc, thumbnailPosition, githubLink, previewLink }) {
  return (
    <div className={styles.projectCard}>
      <h1 className={styles.index}>/{zeroPadding(index, 2)}</h1>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.thumbnail}>
        <Image src={thumbnailSrc} alt={title} fill={true} sizes="(max-width: 600px) 70vw, 600px" priority={true} style={{ objectFit: "cover", objectPosition: (thumbnailPosition ?? "center top") }}></Image>
      </div>
      <div className={styles.links}>
        <div className={stylesjoin(styles.icon, styles.github)}>
          <a href={githubLink} target='_blank' title="Open source code in new tab">{icons.github}</a>
        </div>
        <div className={stylesjoin(styles.icon, styles.preview)}>
          <a href={previewLink} target='_blank' title="Open preview in new tab">{icons.preview}</a>
        </div>
      </div>
    </div>
  )
}