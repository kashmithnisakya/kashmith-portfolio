"use client";

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';



const links = [
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

const MobileNav = () => {
    const pathname = usePathname();

    return <Sheet>
        <SheetTrigger>
            <CiMenuFries className="text-4xl" />
        </SheetTrigger>
        <SheetContent>

        <nav className="flex flex-col gap-4">
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Kashmith<span className="text-accent">.</span>
                </h1>
            </Link>
        </nav>
        <nav className="flex flex-col gap-4">
            {links.map((link, index) => {
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className={`${
                            link.path === pathname && "text-accent border-b-2 border-accent"
                        } capitalize font-medium hover:text-accent transition-all`}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
        </SheetContent>
    </Sheet>;
    }

export default MobileNav;