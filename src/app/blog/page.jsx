import styles from "./blog.module.css"
import PostCard from '@/components/postCard/PostCard'
import { getPosts } from "@/lib/data";

// const getData = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts"); //, {cache:"no-store"}  "used when the data is constantly changing in database, and by default, its caching data"
//   if (!response.ok) {
//     throw new Error("Something went wrong");
//   }
//   return response.json();
// };

const BlogPage = async () => {
  // const posts = await getData();
  const posts = await getPosts();
  //  console.log(posts)
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}

      {/* <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div> */}
      {/* <div className={styles.post}>
        <PostCard />
      </div> */}
    </div>
  )
}

export default BlogPage