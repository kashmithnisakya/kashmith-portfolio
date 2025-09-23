"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-20">
                    <motion.div
                        className="text-center xl:text-left order-2 xl:order-none"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.span
                            className="text-xl bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent font-medium"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            AI/ML Engineer
                        </motion.span>
                        <motion.h1
                            className="h1 mb-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            Hello, I&apos;m <br /><span className="text-accent hover:text-accent/80 transition-colors duration-300">Kashmith Nisakya</span>
                        </motion.h1>
                        <motion.p
                            className="max-w-[800px] mb-9 text-white/80 text-lg leading-relaxed"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            AI/ML Engineer and accomplished graduate from the University of Moratuwa, specializing in Machine Learning, Data Science, and Software Engineering. Proven experience in developing production-ready ML systems, with expertise in MLOps, backend development, and research.
                        </motion.p>
                        <motion.div
                            className="flex flex-col xl:flex-row items-center gap-8"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <motion.a
                                href="./Kashmith_Samaranayaka.pdf"
                                download
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <Button variant="outline" size="large" className="uppercase flex items-center gap-2 hover:bg-accent hover:text-primary transition-all duration-300 hover:shadow-lg hover:shadow-accent/25">
                                    <motion.div
                                        animate={{ rotate: [0, 5, -5, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                    >
                                        <FiDownload className="text-xl"/>
                                    </motion.div>
                                    Download Resume
                                </Button>
                            </motion.a>
                            <motion.div
                                className="mb-8 xl:mb-0"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border-accent rounded flex justify-center item-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 hover:scale-110"/>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="order-1 xl:order-none mb-8 xl:mb-0"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <Photo />
                    </motion.div>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
            >
                <Stats />
            </motion.div>
        </section>
    );
}

export default Home;

