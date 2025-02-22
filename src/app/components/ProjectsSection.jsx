"use client";
import React, { useState,useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';
import { motion,useInView } from 'framer-motion';


const projectsData = [
    {
        id: 1,
        title: "MERN Stack Vehicle Service Centre Website",
        description: " robust user authentication, password encryption, and comprehensive validation",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 2,
        title: "MERN Stack Online Food Delivery Website",
        description: "Integrated Stripe as a payment gateway, ensuring secure transactions for users during the checkout process",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 3,
        title: " Online Property Management System",
        description: "Utilized MySQL for efficient data management, ensuring reliable storage and retrieval of property related information",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 4,
        title: "  ToDo Task Mobile App",
        description: "Developed a mobile application in Kotlin to manage day-to-day tasks, providing full CRUD operations.",
        image: "/images/projects/4.png",
        tag: ["All", "Mobile"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 5,
        title: " Unity Motors UI/UX Design",
        description: " High Fidelity Prototyping",
        image: "/images/projects/5.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    // {
    //     id: 6,
    //     title: " Unity Motors UI/UX Design",
    //     description: " High Fidelity Prototyping",
    //     image: "/images/projects/5.png",
    //     tag: ["All", "Web"],
    //     gitUrl: "/",
    //     previewUrl: "/"
    // },
    
];


const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const handleTagChange =  (newTag)  => {
    setTag(newTag);
    };
    
    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };
    
    return (
        // <div className="py-12 px-6">
            <section >
            {/* Section Title */}
            <h2 className="text-center text-4xl font-bold text-white mb-8">
                My Projects
            </h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Mobile"
                    isSelected={tag === "Mobile"}
                />
            </div>

            {/* Projects Grid */}
            <ul ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {filteredProjects.map((project,index) => (
                        <motion.li
                            key={index}
                            variants={cardVariants}
                            initial="initial"
                            animate={isInView ? "animate" : "initial"}
                            transition={{duration: 0.3, delay: index = 0.1}}
                        >
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                            />
                            </motion.li>
                ))}
                </ul>
                </section>
        // </div>
    );
};

export default ProjectsSection;