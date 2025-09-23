"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";


const Header = () => {
  return (
    <motion.header
      className="py-8 xl:py-12 text-white backdrop-blur-sm bg-primary/95 sticky top-0 z-50 border-b border-white/5"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
        <div className="container mx-auto flex justify-between items-center">

            <Link href="/">
                <motion.h1
                  className="text-4xl font-semibold hover:scale-105 transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                    Kashmith<span className="text-accent animate-pulse">.</span>
                </motion.h1>
            </Link>
        
            <div className="hidden xl:flex item-center gap-8">
                <Nav />

                <Link href="/contact">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Button className="bg-accent hover:bg-accent/80 text-primary font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent/25">
                        Hire me
                      </Button>
                    </motion.div>
                </Link>
            </div>

            <div className="xl:hidden">
                <MobileNav />
            </div>
        </div>
    </motion.header>
  );
}

export default Header;