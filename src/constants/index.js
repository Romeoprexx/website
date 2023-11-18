import {
    mobile,
    backend,
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
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    hi,
    threejs,
    gold,
    portfolio,
    shirt,
    travel,
    metaverse,
    cloth
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Frontend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Frontend Developer",
        company_name: "Stutern",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js, and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Harvoxx Tech Hub",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "April 2021 - Feb 2022",
        points: [
            "Developing and maintaining websites using React.js, Next.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tek Experts",
        icon: shopify,
        iconBg: "#383E56",
        date: "Feb 2022 - Jan 2023",
        points: [
            "Developing and maintaining Andriod and IOS applications using React native and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React.js Developer",
        company_name: "Co-Creation Hub",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Romeo proved me wrong.",
        name: "Adekunle Doyin",
        designation: "CFO",
        company: "Stutern",
        image: "https://www.benjamindada.com/content/images/dadabenblog/2021/05/Adora-Nwodo--Software-Engineer--Microsoft.jpeg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Romeo does.",
        name: "Chris Enogie",
        designation: "COO",
        company: "Harvoxx Tech Hub",
        image: "https://media.licdn.com/dms/image/C4D03AQEY1tyJQ2jV0w/profile-displayphoto-shrink_800_800/0/1661766197176?e=2147483647&v=beta&t=Tia2f0AfucAXsjXXZyJMFxCFX8mUtM2d5htk9JDW9aY",
    },
    {
        testimonial:
            "After Romeo optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "James Bambe",
        designation: "CTO",
        company: "Co-Creation Hub",
        image: "https://media.licdn.com/dms/image/C4D03AQHlHNepGaEkJg/profile-displayphoto-shrink_800_800/0/1573592761059?e=2147483647&v=beta&t=x6Opnyt13n4NCedHWFoFZ9v1-c1dvgGVPmgxEgmQYYc",
    },
];

const projects = [
    {
        name: "Gold's Gym",
        description:
            "Web-based platform that allows users to view more than 1k exercises, search for exercises, browse exercises by categories, watch videos on how to perform them. ",
        tags: [
            {
                name: "react.js",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: gold,
        source_code_link: "https://github.com/Romeoprexx/gym-app",
        view_project_link: "https://fitness-clubs-gym.netlify.app",
    },
    {
        name: "Pixel Movies",
        description:
            "Web-based platform that allows users to search for movies and tv shows, watch trailer, view ratings, check the lists of cinema currently showing the movies, etc.",
        tags: [
            {
                name: "react.js",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: portfolio,
        source_code_link: "https://https://github.com/Romeoprexx/capstone-project-pixels-movies-app",
        view_project_link: "https://pixels-movies.netlify.app",
    },
    {
        name: "Metaverse",
        description:
            "using only VR devices you can easily explore the metaverse world you want, turn your dreams into reality. Let's explore the madness of the metaverse",
        tags: [
            {
                name: "next.js",
                color: "blue-text-gradient",
            },
            {
                name: "three.js",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: metaverse,
        source_code_link: "https://github.com/Romeoprexx/metaverse",
        view_project_link: "https://metaversess.netlify.app/",
    },
    {
        name: "Shirt Customizer",
        description:
            "Web-based platform that allows users to create exclusive and unique shirts with our latest 3D customization tools. Unleash and explore their imagination. ",
        tags: [
            {
                name: "react.js",
                color: "blue-text-gradient",
            },
            {
                name: "three.js",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: cloth,
        source_code_link: "https://github.com/Romeoprexx/t-shirt",
        view_project_link: "https://threejs-shirt-customizer.netlify.app",
    },
    {
        name: "Carhub",
        description:
            "Web-based platform that allows users to streamline thier car rental experience with our effortless booking process.  Find, Book, or Rent a Car quickly",
        tags: [
            {
                name: "next.js",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/Romeoprexx/carhub",
        view_project_link: "https://carhub-showcase.netlify.app",
    },

    {
        name: "Hilink",
        description:
            "A comprehensive travel destination platform that allows users to view camping, hiking, and climbing trials, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "next.js",
                color: "blue-text-gradient",
            },
            {
                name: "typescript",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: hi,
        source_code_link: "https://github.com/Romeoprexx/traveler",
        view_project_link: "https://traveler-rom.vercel.app/",
    },
];

export { services, technologies, experiences, testimonials, projects };