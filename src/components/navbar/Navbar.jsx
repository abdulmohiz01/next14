import Links from "./links/Links";
import styles from "./navbar.module.css"
import Link from "next/link"
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div>
        <Link href="/"className={styles.logo}>Logo</Link>
      </div>
      <div>
        <Links />
      </div>
    </div>
  )
};

export default Navbar;