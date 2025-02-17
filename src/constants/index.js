import {
        mobile,
        creator,
        web,
        javascript,
        typescript,
        html,
        css,
        reactjs,
        tailwind,
        nodejs,
        mongodb,
        git,
        figma,
        firebase,
        kotlin,
        moview,
        blaugranaFurniture,
        slack,
        backend,
        snapshot,
        twitter,
} from '../assets';

export const navLinks = [
        {
                id: 'about',
                title: 'About',
        },
        {
                id: 'work',
                title: 'Work',
        },
        {
                id: 'contact',
                title: 'Contact',
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

const experiences = [];

const projects = [
        {
                name: 'Slack Clone',
                description:
                        'An end-to-end fullstack and real-time slack clone, all with workspaces, channels, 1:1 conversations, threads, reactions, editing and deleting messages as well as member roles.',
                tags: [
                        {
                                name: 'react',
                                color: 'blue-text-gradient',
                        },
                        {
                                name: 'nextjs',
                                color: 'blue-text-gradient',
                        },
                        {
                                name: 'typescript',
                                color: 'blue-text-gradient',
                        },
                        {
                                name: 'tailwind',
                                color: 'pink-text-gradient',
                        },
                        {
                                name: 'convex',
                                color: 'green-text-gradient',
                        },
                ],
                image: slack,
                source_code_link: 'https://github.com/hha297/Slack',
                website_link: 'https://slack-hha2907s-projects.vercel.app/auth',
        },
        {
                name: 'Snapshot',
                description:
                        'A modern social app with a stunning UI with a native mobile feel, a special tech stack, an infinite scroll feature, and amazing performance.',
                tags: [
                        {
                                name: 'react',
                                color: 'blue-text-gradient',
                        },
                        {
                                name: 'nextjs',
                                color: 'blue-text-gradient',
                        },
                        {
                                name: 'typescript',
                                color: 'blue-text-gradient',
                        },
                        {
                                name: 'tailwind',
                                color: 'pink-text-gradient',
                        },
                        {
                                name: 'appwrite',
                                color: 'blue-text-gradient',
                        },
                ],
                image: snapshot,
                source_code_link: 'https://github.com/hha297/Snapshot',
                website_link: 'https://snapshot-zeta-five.vercel.app',
        },
        {
                name: 'Twitter',
                description: 'MERN Stack Project: Build and Deploy a Twitter Clone From Scratch | JWT, Socket.io',
                tags: [
                        {
                                name: 'react',
                                color: 'blue-text-gradient',
                        },
                        {
                                name: 'mongodb',
                                color: 'green-text-gradient',
                        },
                        {
                                name: 'tailwind',
                                color: 'pink-text-gradient',
                        },
                        {
                                name: 'nodejs',
                                color: 'green-text-gradient',
                        },
                        {
                                name: 'expressjs',
                                color: 'green-text-gradient',
                        },
                ],
                image: twitter,
                source_code_link: 'https://github.com/hha297/twitter-clone',
                website_link: 'https://twitter-clone-k8m6.onrender.com',
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
                website_link: 'https://reactjs-movie-hha2907.vercel.app/',
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
];

export { services, technologies, experiences, projects };
