import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { styles } from '../styles';
import { services } from '../contants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
const ServiceCard = ({ index, title, icon }) => {
        return (
                <Tilt className="xs:w-[250px] w-full">
                        <motion.div
                                variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
                                className="w-full green-pink-gradient p-1 rounded-3xl shadow-card"
                        >
                                <div
                                        options={{ max: 45, scale: 1, speed: 4 }}
                                        className="bg-tertiary rounded-3xl py-5 px-12 min-h-72 flex justify-evenly items-center flex-col"
                                >
                                        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
                                        <h3 className="text-white text-2xl font-bold text-center">{title}</h3>
                                </div>
                        </motion.div>
                </Tilt>
        );
};

const About = () => {
        return (
                <>
                        <motion.div variants={textVariant()} className="mt-32">
                                <p className={styles.sectionSubText}>Introduction</p>
                                <h2 className={styles.sectionHeadText}>Overview.</h2>
                        </motion.div>
                        <motion.p
                                variants={fadeIn('', '', 0.1, 1)}
                                className="mt-4 text-secondary text-lg max-w-7xl leading-8"
                        >
                                I'm a skilled software developer with experience in Javascript and TypeScript and also
                                getting acquainted with Kotlin, and get used to in frameworks like React, Node.js,
                                Three.js. I'm a quick learner and willing to collaborate closely with clients to create
                                efficient, scalable, and user-friendly solutions that solve problems. <br></br>
                                <span className="font-bold">Let's work together to bring your ideas to real life.</span>
                        </motion.p>

                        <div className="mt-20 flex flex-wrap gap-10">
                                {services.map((services, index) => (
                                        <ServiceCard key={services.title} index={index} {...services} />
                                ))}
                        </div>
                </>
        );
};

export default SectionWrapper(About, 'about');
