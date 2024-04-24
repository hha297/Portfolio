import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
        return (
                <section className="relative w-full h-screen mx-auto">
                        <div
                                className={`${styles.paddingX} absolute inset-0 top-[160px] max-w-full mx-auto flex flex-row items-start gap-5`}
                        >
                                <div className="flex flex-col justify-center items-center mt-11 mx-24">
                                        <div className="w-5 h-5 rounded-full bg-[#915eff]" />
                                        <div className="w-1 sm:h-60 h-40 violet-gradient" />
                                </div>
                                <div className="">
                                        <h1 className={`${styles.heroHeadText}`}>
                                                Hi, I'm <span className="text-[#915eff]">Hoang Ha</span>
                                        </h1>
                                        <p className={`${styles.heroSubText} text-white-100`}>
                                                <span className="text-secondary font-bold">UI/UX Designer</span> && {''}
                                                <span className="text-secondary font-bold">
                                                        Front-end Web Developer
                                                </span>{' '}
                                                {''}
                                                located in <span className="font-bold text-2xl">Oulu, Finland.</span>
                                        </p>
                                </div>
                        </div>
                        <div className="relative top-[360px] left-72 flex flex-row">
                                <button className=" w-36 h-12 bg-[#915eff] text-white text-xl rounded-xl z-10 hover:text-white hover:bg-[#573899] ">
                                        Contact Me
                                </button>
                                <button className="ml-4 w-36 h-12 bg-transparent border-2 border-[#915eff] text-white text-xl rounded-xl z-10 hover:bg-[#915eff] hover:border-[#915eff]">
                                        Download CV
                                </button>
                        </div>

                        <ComputersCanvas className="relative" />

                        <div className="absolute sm-max:bottom-48 -bottom-32 w-full flex justify-center items-center">
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
