import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";

const Home = () => {
    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    <div className="text-center xl:text-left">
                        <span className="text-xl">Machine Learning Engineer</span>
                        <h1 className="h1 mb-6">
                            Hello, I'm <br /><span className="text-accent">Kashmith Nisakya</span>
                        </h1>
                            <p className="max-w-[500px] mb-9 text-white/80">
                                Passionate about solving real-world problems with data.
                            </p>
                            <div className="flex flex-col xl:flex-row items-center gap-8">
                                <Button variant="outline" size="large" as="a" href="/resume.pdf" download className="uppercase flex items-center gap-2">
                                    <FiDownload className="text-xl"/>
                                    Download Resume
                                </Button>
                            <div className="mb-8 xl:mb-0">
                            <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border-accent rounded flex justify-center item-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Photo /> 
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;

