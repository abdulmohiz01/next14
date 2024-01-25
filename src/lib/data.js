// const users = [
//     { id: 1, name: 'John Doe' },
//     { id: 2, name: 'Jane Smith' }];


// const posts = [
//     { id: 1, title: "Post 1", body: ".......", userId: 1 },
//     { id: 2, title: "Post 2", body: ".......", userId: 2 },
//     { id: 3, title: "Post 3", body: ".......", userId: 3 },
//     { id: 4, title: "Post 4", body: ".......", userId: 4 },
// ];

import { Post, User } from "./models";
import connectToDb from "./utils";
import { unstable_noStore as noStore } from "next/cache";


export const getPosts = async () => {
    try {
        connectToDb();
        const posts = await Post.find();

        // Log the description of each post
        posts.forEach(post => {
            const description = post.get('description');
            if (description) {
                console.log(description);
            } else {
                console.log("Description not available");
            }
        });

        return posts;

    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch posts!");
    }
};


export const getPost = async (slug) => {
    try {
        //console.log(slug)
        connectToDb();
        const post =  await Post.findOne({slug: slug});
        // console.log(post);
        return post;
        
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch post!")
    }

};
export const getUser = async (id) => {
    noStore();
    try {
      connectToDb();
      const user = await User.findById(id);
    // console.log(user.username)
      return user;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch user!");
    }
  };
export const getUsers = async () => {
    try {
        connectToDb();
        const users =  await User.find();
        // console.log(users);
        return users;
        
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch users!")
    }
};
