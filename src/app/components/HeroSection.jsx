"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

 
const HeroSection = () => {
    return (
        <section className="lg-py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0 , scale:0.5}}
                    animate={{ opacity: 1 ,scale:1}}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg-leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                            Hello,I&apos;m {" "}
                        </span>
                        <br></br>
                        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Kaveesha',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
        'Mobile Developer',
        1000,
        'UI/UX Designer',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
                            
                    </h1>
                    <p className="text-[#ADB7BE] text-lg text-base sm:text-lg mb-6 lg:text-xl">
                        Crafting innovative digital experiences through clean design, robust code, and creative problem-solving. Explore my work and see the impact of passion and precision in action.
                    </p>
                    <div>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white">
                            Hire Me
                        </button>
                        <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
  <a
    href="/Kaveesha_CV.pdf"
    download="Kaveesha_CV"
    className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"
  >
    Download CV
  </a>
</button>

                    </div>
                </motion.div>
                <motion.div
                initial={{ opacity: 0, scale:0.5}}
                animate={{ opacity: 1,scale:1}}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[500px] h-[500px] lg:w-[400px] lg:h-[400px] flex items-center justify-center relative">
    <Image
        src="/images/my.png"
        alt="hero image"
        className="rounded-full"
        width={300}
        height={300}
    />
</div>

                    
                     </motion.div>
                </div>
        </section>
    )
};
export default HeroSection;
