import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
        return (
                <section className="relative w-full h-screen mx-auto">
                        <div
                                className={`absolute inset-0 top-[120px]  max-w-screen-2xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
                        >
                                <div className="flex flex-col justify-center items-center mt-5">
                                        <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
                                        <div className="w-1 sm:h-80 h-40 violet-gradient" />
                                </div>
                                <div className="">
                                        <h1 className={`${styles.heroHeadText} text-white`}>
                                                Hi, I'm <span className="text-[#915eff]">Hoang Ha</span>
                                        </h1>
                                        <p className={`${styles.heroSubText} text-white-100`}>
                                                <span className="text-secondary font-bold">UI/UX Designer</span> && {''}
                                                <span className="text-secondary font-bold">Web Developer</span>{' '}
                                                <br className="block sm:hidden" />
                                                located in{' '}
                                                <span className="font-bold text-2xl ml-1">Oulu, Finland.</span>
                                        </p>
                                </div>
                        </div>

                        <ComputersCanvas />

                        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                                <a href="#about">
                                        <div className="w-[36px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1">
                                                <motion.div
                                                        animate={{ y: [0, 24, 0] }}
                                                        transition={{
                                                                duration: 1.5,
                                                                repeat: Infinity,
                                                                repeatType: 'loop',
                                                        }}
                                                        className="w-4 h-4 rounded-full bg-secondary my-1"
                                                />
                                        </div>
                                </a>
                        </div>
                </section>
        );
};

export default Hero;
