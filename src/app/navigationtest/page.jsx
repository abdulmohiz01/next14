"use client"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const NavigationTestPage = () => {

    const router = useRouter();
    const pathname = usePathname();
    const query = useSearchParams();
    const q = query.get("q");

    const handleClick = () => {
        // console.log("clicked");
        // console.log(pathname);
        // console.log(query);
        // router.push("/");   //Redirects to another page
        // router.replace("/"); //It doesnt stores the previous page in memory
        // router.forward();
    }
    return (
        <div>
            {/* {router.push("/")} */}
            <Link href="/" prefetch={false}>Click here</Link>
            <button onClick={handleClick}>Button</button>
        </div>
    )
}

export default NavigationTestPage