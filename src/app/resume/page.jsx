"use client";

import { motion } from "framer-motion";

const Resume = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <motion.h1
                className="text-4xl font-bold mb-8 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Resume
            </motion.h1>
            <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <p className="text-lg mb-6 text-white/80 max-w-md">Download my latest resume to learn more about my experience and qualifications.</p>
                <motion.a
                    href="./Kashmith_Samaranayaka.pdf"
                    download
                    className="inline-flex items-center px-8 py-4 bg-accent hover:bg-accent/80 text-primary font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <motion.svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </motion.svg>
                    Download Resume (PDF)
                </motion.a>
            </motion.div>
        </div>
    );
}

export default Resume;