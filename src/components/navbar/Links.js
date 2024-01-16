import Link from "next/link";
const Links = () => {
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
            path: "/blog"
        }
    ];

    return (
        <div>
            {links.map((links => {
                return (
                    <Link href={links.path} key={links.title}>{links.title}</Link>
                );
            }))}
        </div>
    )
};

export default Links;