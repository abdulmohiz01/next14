import styles from "./postCard.module.css"
import Image from "next/image"
import Link from "next/link"
const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/9162803/pexels-photo-9162803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill alt="" className={styles.img} />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.id}`}>Read More</Link>
      </div>
    </div>
  )
}

export default PostCard;