import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles.js';
import { EarthCanvas } from './canvas/';

import { slideIn } from '../utils/motion.js';
import { useRef, useState } from 'react';
import SectionWrapper from '../hoc/SectionWrapper.jsx';

const Contact = () => {
        const formRef = useRef();
        const [form, setForm] = useState({
                name: '',
                email: '',
                message: '',
        });
        const [loading, setLoading] = useState(false);

        const handleChange = (e) => {};
        const handleSubmit = (e) => {};

        return (
                <div className="xl:mt-12 xl:flex-row flex-col-reverse gap-10 overflow-hidden">
                        <motion.div
                                variants={slideIn('right', 'tween', 0.2, 1)}
                                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
                        >
                                <EarthCanvas />
                        </motion.div>
                        <motion.div
                                variants={slideIn('left', 'tween', 0.2, 1)}
                                className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
                        >
                                <p className={styles.sectionSubText}>Get in touch</p>
                                <h3 className={styles.sectionHeadText}>Contact.</h3>
                                <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
                                        <label className="flex flex-col">
                                                <span className="text-white font-medium mb-4">Your Name</span>
                                                <input
                                                        type="text"
                                                        name="name"
                                                        value={form.name}
                                                        onChange={handleChange}
                                                        placeholder={"What's your name?"}
                                                        className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                                                />
                                        </label>
                                        <label className="flex flex-col">
                                                <span className="text-white font-medium mb-4">Your Email</span>
                                                <input
                                                        type="email"
                                                        name="email"
                                                        value={form.email}
                                                        onChange={handleChange}
                                                        placeholder={"What's your email address?"}
                                                        className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                                                />
                                        </label>
                                        <label className="flex flex-col">
                                                <span className="text-white font-medium mb-4">Message</span>
                                                <textarea
                                                        rows="4"
                                                        name="message"
                                                        value={form.message}
                                                        onChange={handleChange}
                                                        placeholder={'What do you want to say?'}
                                                        className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                                                />
                                        </label>
                                        <button
                                                type="submit"
                                                className="bg-blaugrana py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
                                        >
                                                {loading ? 'Sending' : 'Send'}
                                        </button>
                                </form>
                        </motion.div>
                </div>
        );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Contact, 'contact');
