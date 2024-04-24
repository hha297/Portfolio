import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName) =>
        function HOC() {
                return (
                        <motion.section
                                variants={staggerContainer()}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.75 }}
                                className={`${styles.padding} max-w-7xl mx-auto`}
                        >
                                <span className="hash-span" id={idName}>
                                        &nbsp;
                                </span>
                                <Component />
                        </motion.section>
                );
        };

export default SectionWrapper;
