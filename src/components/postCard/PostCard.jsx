import styles from "./postCard.module.css"
import Image from "next/image"
import Link from "next/link"
const PostCard = ({ post }) => {
  //console.log(post + "hereeee")
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img &&
          <div className={styles.imgContainer}>
            <Image src={post.img} fill alt="post image" className={styles.img} />
          </div>}
        <span className={styles.date}>{post.createdAt.toString().slice(0, 16)}</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.get('description')}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>Read More</Link>
      </div>
    </div>
  )
}

export default PostCard;