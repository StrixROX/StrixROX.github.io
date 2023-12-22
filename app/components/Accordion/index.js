'use client'

import styles from './style.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react'

const stylesjoin = (...args) => args.filter(el => el !== null).join(' ')

export default function Accordion({ children, defaultShow, title }) {
  const [show, setShow] = useState(defaultShow ?? false)

  function toggleShow() {
    setShow(prev => !prev);
  }

  return (
    <div className={styles.componentWrapper}>
      <div className={styles.title} onClick={() => toggleShow()}>
        <span>{title}</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={stylesjoin(styles.toggleShow, show ? styles.show : null)}
        />
      </div>
      <div className={stylesjoin(styles.accordion, show ? styles.show : null)}>
        <div className={styles.accordionContent}>
          {children}
        </div>
      </div>
    </div>
  )
}