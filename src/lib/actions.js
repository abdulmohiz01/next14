"use server"
import connectToDb from "./utils";
import {Post} from "./models"
import { revalidatePath } from "next/cache";

export const addPost = async (formData) => { //Server function always has to be async whether we are returning async event or not
   
    const { title, description, slug, userId } = Object.fromEntries(formData);
    try {
        connectToDb();
        const newPost = new Post({
            title,
            description,
            slug,
            userId,
        });
        await newPost.save();  //save to db
        revalidatePath("/blog")
        console.log("Saved to database");
    } catch (error) {
        console.log(error)
        return { error: "Failed to add post!" };
    }
}
export const deletePost = async (formData) => { //Server function always has to be async whether we are returning async event or not
    
    const { id } = Object.fromEntries(formData);
    try {
        connectToDb();
        await Post.findByIdAndDelete(id);
        revalidatePath("/blog");
        console.log("Deleted");
    } catch (error) {
        console.log(error)
        return { error: "Failed to delte post!" };
    }
}