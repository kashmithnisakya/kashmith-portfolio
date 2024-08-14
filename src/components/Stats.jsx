"use client";

import Countup from "react-countup";


const stats =[
    {
        num: 1,
        text: "Years of Experience",
    },
    {
        num: 10,
        text: "Projects Completed",
    },
    {
        num: 8,
        text: "Technologies Mastered",
    },
    {
        num: 242,
        text: "Code Commits",
    },
];


const Stats = () => {
  return (
    <section className="pt-4 pd-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((stat, index) => (
                    <div key={index} className="flex-1 flex items-center gap-4 justify-center xl:justify-start">
                        <Countup end={stat.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold"/>
                        <span className={`${
                        stat.text.length > 6 ? "max-w-[100px]" : "max-w-[150px]"
                            } landing-snug text-white/80`}>{stat.text}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}

export default Stats;