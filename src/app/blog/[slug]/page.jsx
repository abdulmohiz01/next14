import styles from "./singlepost.module.css"
import Image from "next/image"
import UserId from "@/components/userId/page";
import { Suspense } from "react";
import { getPost } from "@/lib/data";


const getData = async (slug) => {
  const response = await fetch(`http://localhost:3000/api/blog/${slug}`); //, {cache:"no-store"}  "used when the data is constantly changing in database, and by default, its caching data"
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  return response.json();
};
export const generateMetadata = async ({params})=> {
  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.get('description')
  }

}

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug);
  // console.log(slug)
  // const post = await getPost(slug);
  // console.log(post.get('description'))     //


  return (
    <div className={styles.container}>
      {post.img &&
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img} />
        </div>}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          {/* <Image src={post.img} alt="" width={50} height={50} className={styles.avatar} /> */}
          {post &&
            <Suspense fallback={<div>Loading...</div>}>
              <UserId userId={post.userId} />
            </Suspense>}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{post.createdAt.toString().slice(0, 16)}</span>
          </div>
        </div>
        <div className={styles.content}>
          {post.description}     {/*  post.get('description') */}
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage