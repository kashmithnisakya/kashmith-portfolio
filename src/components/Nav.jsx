"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const link = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Projects",
        path: "/projects",
    },
    {
        name: "Resume",
        path: "/resume",
    },
    {
        name: "Publications",
        path: "/publications",
    },
    {
        name: "Contact",
        path: "/contact",
    },
];

const Nav = () => {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <nav className="flex gap-8">
            {link.map((link, index) => {
                return (
                    <Link 
                        href={link.path}
                        key={index}  
                        className={`${
                            link.path === pathname && "text-accent border-b-2 border-accent"} 
                            capitalize font-medium hover:text-accent transition-all`}>
                                {link.name}
                    </Link>
                );
            })}
        </nav>
    );
    }

export default Nav;