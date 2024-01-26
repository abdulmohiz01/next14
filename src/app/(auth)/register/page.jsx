import { Register } from '@/lib/actions'
import React from 'react'
import styles from "./register.module.css"

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={Register} className={styles.form}>
          <input type="name" placeholder='username' name="username" id="" required/>
          <input type="email" name="email" placeholder='email' id="" required/>
          <input type="password" placeholder="password" name="password" id="" required/>
          <input type="password" name="passwordRepeat" placeholder='Password again' id="" required />
          <button>Register</button>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage