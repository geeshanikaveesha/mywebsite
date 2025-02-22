"use client";
import React, { useTransition ,useState} from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
    title: "Skills",
        id: "skills",
        content: (
        <ul className='list-disc pl-2'>
            <ul>
    <li><strong>Frontend:</strong> JavaScript, React, HTML, CSS</li>
    <li><strong>Backend:</strong> Node.js, Express</li>
    <li><strong>Database:</strong> MySQL, MongoDB</li>
    <li><strong>Version Control:</strong> Git</li>
  </ul>
            
        </ul>
        )
    },
    {
        title: "Education",
            id: "education",
            content: (
            <ul className='list-disc pl-2'>
                <li>Sri Lanka Institute of Information Technology</li>
                <li> B. Sc (Hons) in Information Technology | Specialized in Information Technology (Undergraduate)</li>
                <li>Web Development , Mobile Application Development and UI/UX Design</li>
                
            </ul>
            )
    },
    {
        title: "Certifications",
            id: "certifications",
            content: (
            <ul className='list-disc pl-2'>
                <li> IBM |Developing Front-End Apps with React</li>
                <li>IBM |Developing Back-End Apps with Node.js and Express</li>
                <li>Microsoft |Career Essentials in Generative AI by Microsoft and LinkedIn</li>
                <li> Microsoft |Career Essentials in Software Development by Microsoft and LinkedIn</li>
                <li> University of Moratuwa |Python for beginners</li>
            </ul>
            )
        }
]
const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending,startTransition ] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id); 
         })
    }
    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/Hero.png" width={500} height={500} />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        I am an enthusiastic Information Technology undergraduate with a passion for creating interactive and responsive web applications.
                        I specialize in modern technologies such as JavaScript, Phython React, Next.js, Node.js, Express, MYSQL, HTML, CSS, and  Git.
                        I enjoy bringing ideas to life through code, ensuring functionality and visual appeal go hand in hand.
                        I am a quick learner who continuously seeks opportunities to expand my knowledge and improve my skill set.
                        I thrive in collaborative environments and am excited to work alongside talented teams to create innovative applications that make a difference.
                        Whether it's developing robust back-end systems or crafting engaging user interfaces, I am committed to delivering high-quality results.
                    </p>
                    <div className='flex flex-row justify-start mt-8'>
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {"  "}
                            Skills {"  "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {"  "}
                            Education {"  "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            {"  "}
                            Certifications {"  "}
                        </TabButton>
                    </div>
                    <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}
                    </div>
            </div>
        </div>
    </section>
    )
};

export default AboutSection;