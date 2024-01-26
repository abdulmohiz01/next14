import { auth } from "@/lib/auth";
import Links from "./links/Links";
import styles from "./navbar.module.css"
import Link from "next/link"
const Navbar = async () => {
  const session = await auth();
 
  return (
    <div className={styles.container}>
      <div>
        <Link href="/" className={styles.logo}>Logo</Link>
      </div>
      <div>
        <Links session={session} />
      </div>
    </div>
  )
};

export default Navbar;