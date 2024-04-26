import {
        mobile,
        creator,
        web,
        javascript,
        typescript,
        html,
        css,
        reactjs,
        redux,
        tailwind,
        nodejs,
        mongodb,
        git,
        figma,
        firebase,
        kotlin,
        eternityDesign,
        monkeyBlog,
        moview,
        blaugranaFurniture,
        postmanExpress,
        threejs,
        backend,
} from '../assets';

export const navLinks = [
        {
                id: '#about',
                title: 'About',
        },
        {
                id: '#work',
                title: 'Works',
        },
        {
                id: '#contact',
                title: 'Contacts',
        },
];

const services = [
        {
                title: 'Front-end Developer',
                icon: web,
        },
        {
                title: 'Back-end Developer',
                icon: backend,
        },
        {
                title: 'Mobile Developer',
                icon: mobile,
        },
        {
                title: 'UI/UX Designer',
                icon: creator,
        },
];

const technologies = [
        {
                name: 'HTML 5',
                icon: html,
        },
        {
                name: 'CSS 3',
                icon: css,
        },
        {
                name: 'JavaScript',
                icon: javascript,
        },
        {
                name: 'TypeScript',
                icon: typescript,
        },
        {
                name: 'React JS',
                icon: reactjs,
        },
        {
                name: 'Redux Toolkit',
                icon: redux,
        },
        {
                name: 'Tailwind CSS',
                icon: tailwind,
        },
        {
                name: 'Node JS',
                icon: nodejs,
        },
        {
                name: 'MongoDB',
                icon: mongodb,
        },
        {
                name: 'Three JS',
                icon: threejs,
        },
        {
                name: 'Git',
                icon: git,
        },
        {
                name: 'Figma',
                icon: figma,
        },
        {
                name: 'Firebase',
                icon: firebase,
        },
        {
                name: 'Kotlin',
                icon: kotlin,
        },
];

const experiences = [
        {
                title: 'Internship - UI/UX Designer',
                companyName: 'Eternity Design',
                icon: eternityDesign,
                iconBg: '#383E56',
                date: 'May 2021 -  September 2021',
                points: [
                        'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
                        'Implementing responsive design and ensuring cross-browser compatibility.',
                ],
        },
        {
                title: 'Internship - Web Developer',
                companyName: 'Eternity Design',
                icon: eternityDesign,
                iconBg: '#E6DEDD',
                date: 'March 2022 - July 2022',
                points: [
                        'Developing and maintaining web applications using React.js and other related technologies.',
                        'Collaborated with senior designers to conduct user research, including surveys and interviews, to gather insights into user behaviors and preferences.',
                        'Participating in code reviews and providing constructive feedback to other developers.',
                ],
        },
];

const projects = [
        {
                name: 'Monkey Blog',
                description:
                        'Web-based platform that allows users facilitate seamless content creation and sharing, it empowers individuals to express their thoughts, ideas, and creativity effortlessly ',
                tags: [
                        {
                                name: 'react',
                                color: 'blue-text-gradient',
                        },
                        {
                                name: 'tailwind',
                                color: 'pink-text-gradient',
                        },
                        {
                                name: 'firebase',
                                color: 'blue-text-gradient',
                        },
                        {
                                name: 'scss',
                                color: 'pink-text-gradient',
                        },
                ],
                image: monkeyBlog,
                source_code_link: 'https://github.com/hha297/monkey-blog',
        },
        {
                name: 'Moview',
                description:
                        'Web application that enables users to explore a diverse range of films, from blockbusters to hidden gems, and make informed decisions with community ratings. ',
                tags: [
                        {
                                name: 'react',
                                color: 'blue-text-gradient',
                        },
                        {
                                name: 'restapi',
                                color: 'green-text-gradient',
                        },
                        {
                                name: 'tailwind',
                                color: 'pink-text-gradient',
                        },
                        {
                                name: 'scss',
                                color: 'pink-text-gradient',
                        },
                ],
                image: moview,
                source_code_link: 'https://github.com/hha297/reactjs-movie',
        },
        {
                name: 'Blaugrana Furniture',
                description:
                        'An app targets people who are FC Barcelona fan and looking for high quality furniture products for their house to prove their love toward the club',
                tags: [
                        {
                                name: 'kotlin',
                                color: 'blue-text-gradient',
                        },
                        {
                                name: 'firebase',
                                color: 'blue-text-gradient',
                        },
                ],
                image: blaugranaFurniture,
                source_code_link: 'https://github.com/Die-SonnenKinder/Blaugrana_Furniture',
        },
        {
                name: 'Postman Express',
                description:
                        'PostmanExpress is composed of three interconnected applications, designed to replicate the functionality of an automated parcel delivery locker system, much like the renowned services offered by Posti or Matkahuolto.',
                tags: [
                        {
                                name: 'react',
                                color: 'blue-text-gradient',
                        },
                        {
                                name: 'restapi',
                                color: 'green-text-gradient',
                        },
                        {
                                name: 'tailwind',
                                color: 'pink-text-gradient',
                        },
                        {
                                name: 'scss',
                                color: 'pink-text-gradient',
                        },
                ],
                image: postmanExpress,
                source_code_link: 'https://github.com/QuirkoTech/PostmanExpress',
        },
];

export { services, technologies, experiences, projects };
