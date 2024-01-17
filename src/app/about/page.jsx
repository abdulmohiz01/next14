import React from 'react'
import Image from 'next/image'
import styles from "./about.module.css"

const AboutPage = () => {
  return (
    <div>
    <div className={styles.imgContainer}></div>
    <Image src="/about.png" fill/>
    </div>
  )
}

export default AboutPage