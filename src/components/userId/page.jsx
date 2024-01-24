import { getUser } from "@/lib/data";
import styles from "./userId.module.css";


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
    // console.log(userId);
    // const  slug  = userId;
    // console.log(slug)
    // const user = await getData(userId);
    console.log(userId)
    const user = await getUser(userId);
    console.log(user)


    return (
        <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            {/* <span className={styles.detailValue}>{user.}</span> */}
        </div>
    )
}

export default UserId