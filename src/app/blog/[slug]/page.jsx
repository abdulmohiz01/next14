import styles from "./singlepost.module.css"
import Image from "next/image"
import UserId from "@/components/userId/page";
import { Suspense } from "react";
import { getPost } from "@/lib/data";


// const getData = async (slug) => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`); //, {cache:"no-store"}  "used when the data is constantly changing in database, and by default, its caching data"
//   if (!response.ok) {
//     throw new Error("Something went wrong");
//   }
//   return response.json();
// };

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  // const post = await getData(slug);
   console.log(params)
  const post = await getPost(slug);
  

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={post.img} alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          <Image src={post.img} alt="" width={50} height={50} className={styles.avatar} />
          {post &&
            <Suspense fallback={<div>Loading...</div>}>
              <UserId userId={post.id} />
            </Suspense>}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>21/01/2024</span>
          </div>
        </div>
        <div className={styles.content}>
          {post.description}
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage