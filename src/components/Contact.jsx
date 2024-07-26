import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles.js';
import { EarthCanvas, StarsCanvas } from './canvas/';

import { slideIn } from '../utils/motion.js';
import { useRef, useState } from 'react';
import SectionWrapper from '../hoc/SectionWrapper.jsx';
import toast from 'react-hot-toast';

const Contact = () => {
        const formRef = useRef();
        const [form, setForm] = useState({
                name: '',
                email: '',
                message: '',
        });
        const [loading, setLoading] = useState(false);
        const [errorMessage, setErrorMessage] = useState('');

        const handleChange = (e) => {
                const { name, value } = e.target;
                setForm({ ...form, [name]: value });
        };
        const handleSubmit = (e) => {
                e.preventDefault();
                const Errors = {
                        name: !form.name ? 'Name is required' : '',
                        email: !form.email ? 'Email is required' : '',
                };
                if (!form.name || !form.email) {
                        setErrorMessage(Errors);
                        return;
                }
                setLoading(true);
                emailjs.send(
                        import.meta.env.VITE_EMAILJS_SERVICE_ID,
                        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                        {
                                from_name: form.name,
                                to_name: 'Dang Hoang Ha',
                                from_email: form.email,
                                to_email: 'ha.dh290702@gmail.com',
                                message: form.message,
                        },
                        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                ).then(
                        () => {
                                setLoading(false);
                                toast.success('Thank you. I will get back to you as soon as possible.');

                                setForm({ name: '', email: '', message: '' });
                        },
                        (error) => {
                                setLoading(false);
                                console.error(error);

                                toast.error('Ahh, something went wrong. Please try again.');
                        },
                );
        };

        return (
                <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
                        <motion.div
                                variants={slideIn('left', 'tween', 0.2, 1)}
                                className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
                        >
                                <p className={styles.sectionSubText}>Get in touch</p>
                                <h3 className={styles.sectionHeadText}>Contact.</h3>
                                <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
                                        <label className="flex flex-col">
                                                <span className="text-white font-medium mb-4">Name</span>
                                                <input
                                                        type="text"
                                                        name="name"
                                                        value={form.name}
                                                        onChange={handleChange}
                                                        placeholder={"What's your name?"}
                                                        className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                                                />
                                                {errorMessage.name && (
                                                        <p className="text-red-500 mt-2">{errorMessage.name}</p>
                                                )}
                                        </label>
                                        <label className="flex flex-col">
                                                <span className="text-white font-medium mb-4">Email</span>
                                                <input
                                                        type="email"
                                                        name="email"
                                                        value={form.email}
                                                        onChange={handleChange}
                                                        placeholder={"What's your email address?"}
                                                        className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                                                />
                                                {errorMessage.email && (
                                                        <p className="text-red-500 mt-2">{errorMessage.email}</p>
                                                )}
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
                                                {loading ? 'Sending...' : 'Send'}
                                        </button>
                                </form>
                        </motion.div>
                        <motion.div
                                variants={slideIn('right', 'tween', 0.2, 1)}
                                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
                        >
                                <EarthCanvas />
                        </motion.div>
                </div>
        );
};

export default SectionWrapper(Contact, 'contact');
