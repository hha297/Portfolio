import React from 'react';
import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { fadeIn, textVariant } from '../utils/motion.js';
import { styles } from '../styles.js';

const Tech = () => {
        return (
                <>
                        <motion.div variants={textVariant()}>
                                <p className={styles.sectionSubText}>What I have learnt so far</p>
                                <h2 className={styles.sectionHeadText}>Technologies.</h2>
                        </motion.div>
                        <div className="w-full flex">
                                <motion.p
                                        variants={fadeIn('', '', 0.1, 1)}
                                        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                                >
                                        I am proficient in a diverse range of technologies, including web development
                                        staples like HTML, CSS, and JavaScript, along with modern tools such as React
                                        JS, Redux Toolkit, and Tailwind CSS. My skills extend to backend development
                                        with Node JS and MongoDB, and mobile app development with Kotlin. Additionally,
                                        I effectively use tools like Git, Figma, and Firebase to streamline development
                                        and design processes.
                                </motion.p>
                        </div>
                        <div className="flex flex-row flex-wrap justify-center gap-10 mt-12">
                                {technologies.map((technology) => (
                                        <div className="w-28 h-28" key={technology.name}>
                                                <BallCanvas icon={technology.icon} />
                                        </div>
                                ))}
                        </div>
                </>
        );
};

export default SectionWrapper(Tech, '');
