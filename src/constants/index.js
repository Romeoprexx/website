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
    zentryCover,
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
        title: "Data Anaylst",
        company_name: "Alcon Nigeria Ltd",
        icon: starbucks,
        iconBg: "#383E56",
        date: "Jun 2015 - Aug 2018",
        points: [
            "Collect, cleans and interprets data sets in order to solve a problem.",
            "Develop data dashboards, charts and visual aids to support decision-making.",
            "Identify opportunities to process enhancement.",
            "Create and maintain processes to generate accurate and timely reports that help stakeholders understand and act on key data insight.",
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "InterSwitch",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Nov 2019 - Nov 2020",
        points: [
            "Developing and maintaining websites and applications using React.js, Next.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Approaching problems and creating solutions.",
        ],
    },
    {
        title: "Front End Engineer",
        company_name: "Harvoxx Tech Hub",
        icon: shopify,
        iconBg: "#383E56",
        date: "Dec 2020 - Apr 2024",
        points: [
            "Contributed, to and participated in frontend code review, using technologies such as NodeJS, NextJS, and JavaScript.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Slice software initiative into smaller deliverables, i.e. Epics, and Sub-epics.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Green Heart Care Pty Ltd",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2024 - Present",
        points: [
            "Build reactive frontend applications using React (NextJS), and React Native Expo.",
            "Architect, build, and maintain backend logic using tools such as Firebase, NodeJS, MongoDB, ExpressJS.",
            "Manage container workloads using tools such as AWS ECS, Docker, etc.",
            "Contribute, and participate in frontend code review, using technologies such as NodeJS, NextJS, and JavaScrip.",
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
        image: "https://media.licdn.com/dms/image/C4D03AQHlHNepGaEkJg/profile-displayphoto-shrink_800_800/0/1573592761059?e=2147483647&v=beta&t=x6Opnyt13n4NCedHWFoFZ9v1-c1dvgGVPmgxEgmQYYc",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Romeo does.",
        name: "Chris Enogie",
        designation: "COO",
        company: "Harvoxx Tech Hub",
        image: "https://www.harvoxx.com/assets/img/service3.jpg",
    },
    {
        testimonial:
            "After Romeo optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Daren Maskell",
        designation: "Service Manager",
        company: "Green Heart Care Pty",
        image: "https://media.licdn.com/dms/image/v2/C5603AQE6Rya6SDmSYA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1617049379523?e=1741219200&v=beta&t=Ttu8q-TJQngjLmeRs5eeaQzWMN8327vk5k_eZlw4LYY",
    },
];

const projects = [
    {
        name: "Zentry",
        description:
            "Zentry is the game of games ecosystem that extends beyond a gaming universe, featuring a story-driven and evolving product ecosystem, aiming to transform lives. ",
        tags: [
            {
                name: "react.js",
                color: "blue-text-gradient",
            },
            {
                name: "GSAP",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: zentryCover,
        source_code_link: "https://github.com/Romeoprexx/zentry-web",
        view_project_link: "https://zentry-web.netlify.app/",
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
