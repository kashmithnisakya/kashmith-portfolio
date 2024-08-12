"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full relative">
        <motion.div>
            <div className="w-[315px] h-[315px] xl:w-[600px] xl:h-[498px]">
                <Image
                    src="/assets/me.png"
                    alt="kashmith"
                    layout="fill"
                    objectFit="cover"
                    priority 
                    quality={100}
                    className="object-contain"
                />
            </div>
        </motion.div>
        </div>
    );
}

export default Photo;