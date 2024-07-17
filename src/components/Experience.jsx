import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
const Experience = () => {
        return (
                <>
                        <motion.div variants={textVariant()}>
                                <p className={styles.sectionSubText}>What I have done so far</p>
                                <h2 className={styles.sectionHeadText}>Work Experiences.</h2>
                        </motion.div>
                        <div className="mt-20 flex flex-col">
                                <VerticalTimeline>
                                        {experiences.map((experience, index) => (
                                                <ExperienceCard key={index} experience={experience} />
                                        ))}
                                </VerticalTimeline>
                        </div>
                </>
        );
};

const ExperienceCard = ({ experience }) => (
        <VerticalTimelineElement
                contentStyle={{ background: '#1d1836', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid #232631' }}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                        <div className="flex justify-center items-center w-full h-full">
                                <img
                                        src={experience.icon}
                                        alt={experience.companyName}
                                        className="w-full h-full object-contain rounded-full"
                                />
                        </div>
                }
        >
                <div>
                        <h3 className="text-white text-2xl font-bold">{experience.title}</h3>
                        <h3 className="text-secondary mt-2 font-semibold text-xl">{experience.companyName}</h3>
                </div>
                <ul className="mt-5 list-disc ml-4 space-y-2">
                        {experience.points.map((point, index) => (
                                <li key={`experience-point-${index}`} className="text-white-100 pl-4 tracking-wider">
                                        {point}
                                </li>
                        ))}
                </ul>
        </VerticalTimelineElement>
);

export default SectionWrapper(Experience, 'work');
