import styles from "./footer.module.css"
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        Almohiz
      </div>
      <div className={styles.text}>
        Almohiz creative thoughts
      </div>
    </div>
  )
};

export default Footer;