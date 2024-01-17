"use client";
import { useState } from "react";
import styles from "./links.module.css";
import Navlink from "./navbarLink/navlink";

const Links = () => {
    const [open, setOpen] = useState(false);

    const links = [
        {
            title: "Homepage",
            path: "/",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Blog",
            path: "/blog",
        },
    ];

    // Temporary
    const session = true;
    const isAdmin = true;

    return (
        <div>
            <div className={styles.links}>
                {links.map(({ title, path }) => (
                    <Navlink item={{ title, path }} key={title} />
                ))}
                {session ? (
                    <>
                        {isAdmin && (
                            <>
                                <Navlink item={{ title: "Admin", path: "/admin" }} />
                                <button className={styles.logout}>Logout</button>
                            </>
                        )}
                    </>
                ) : (
                    <Navlink item={{ title: "Login", path: "/login" }} />
                )}
            </div>
            <button className={styles.menuButton} onClick={()=> setOpen(prev=>!prev)}>Menu</button>
            {
                open && <div className={styles.mobileLinks}>
                    {links.map((link) => (
                        <Navlink item={link} key={link.title} />
                    ))
                    }
                </div>
            }
        </div>
    );
};

export default Links;
