"use server"
import connectToDb from "./utils";
import { Post, User } from "./models"
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";

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
export const handleGithubLogin = async () => {
    await signIn("github");
};
export const handleLogout = async () => {
    await signOut();
};
export const Register = async (formData) => {
    const { username, email, password, passwordRepeat, img } = Object.fromEntries(formData);
    if (password !== passwordRepeat) {
        return "Passwords do not match"
    }
    try {
        connectToDb();
        const user = await User.findOne({ username });
        if (user) {
            return "Username already exists";
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            img,
        });

        await newUser.save();
        console.log('user created');

    } catch (error) {
        console.log(error);

        return { error: "Something went wrong" };
    }
}