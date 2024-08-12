import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto flex flex-col items-center gap-8">
                <span className="text-xl">Machine Learning Engineer</span>
                <h1 className="text-4xl font-semibold text-center">
                    Hi, I'm Kashmith Nisakya<span className="text-accent">.</span>
                </h1>
                <p className="text-center text-lg text-white">
                   Passionate about solving real-world problems with data.
                </p>

                <div className="flex gap-4">
                    {/* add photo */}
                    <img src="/kashmith.jpg" alt="Kashmith" className="w-48 h-48 rounded-full" />
                </div>
                <Button variant="primary" size="large" as="a" href="/resume.pdf" download>
                    <FiDownload className="mr-2" />
                    Download Resume
                </Button>
            </div>
        </section>
    );
}

export default Home;

