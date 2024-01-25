import { getUser } from "@/lib/data";
import styles from "./userId.module.css";
import Image from "next/image";


// const getData = async (slug) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${slug}`, {cache: "no-store"});

//     if (!res.ok) {
//         throw new Error('Could not find user');
//     }
//     else {
//         return res.json();
//     }
// };
const UserId = async ({ userId }) => {
   // FETCH DATA WITH AN API
  // const user = await getData(userId);

  // FETCH DATA WITHOUT AN API
  const user = await getUser(userId);
    //console.log(user)
  
  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={user.img ? user.img : "/noavatar.png"}
        alt=""
        width={50}
        height={50}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default UserId