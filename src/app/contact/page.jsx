"use client"
import React, { useEffect, useState } from 'react'
import styles from "./contact.module.css"
import Image from 'next/image'
const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt='contact image' fill className={styles.img} />
      </div>
      <div   className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="text" placeholder='Your Number' />
          <textarea placeholder="Message" name="" id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage;
// const hydrationTestNoSSR= dynamic (() =? import("@components/hydrationTest") , {ssr: false})
// <div suppressHydrationWarning>{a}</div>