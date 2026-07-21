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
  jobit,
  tripguide,
  threejs,
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
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Python & Django Developer",
    icon: backend,
  },
  {
    title: "REST API Developer",
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
    title: "Master of Computer Applications (MCA)",
    company_name: "NCRD's Sterling Institute of Management Studies",
    icon: creator, // You can replace with a graduation-cap icon later
    iconBg: "#383E56",
    date: "2024 - 2026",
    points: [
      "Pursuing MCA from Mumbai University.",
      "Current CGPA: 8.7/10.",
      "Focused on Full Stack Development, React.js, Django, REST APIs, and Modern Web Technologies.",
      "Built multiple real-world full-stack projects during the course.",
    ],
  },
  {
    title: "Bachelor of Science (Computer Science)",
    company_name: "V.K. Krishna Menon College",
    icon: web,
    iconBg: "#E6DEDD",
    date: "2021 - 2024",
    points: [
      "Graduated with 7.95 CGPA.",
      "Studied Data Structures, DBMS, Operating Systems, Networking, and Software Engineering.",
      "Strengthened programming fundamentals in JavaScript and Python.",
      "Completed several academic and personal development projects.",
    ],
  },
  {
    title: "Higher Secondary Certificate (Science)",
    company_name: "P.A. Menon College",
    icon: mobile,
    iconBg: "#383E56",
    date: "2021",
    points: [
      "Completed HSC with 81.60%.",
      "Studied Physics, Chemistry, Mathematics, and Computer Science.",
      "Developed strong analytical and logical reasoning skills.",
    ],
  },
  {
    title: "Secondary School Certificate (SSC)",
    company_name: "M.B.S Hindi High School",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "2019",
    points: [
      "Completed SSC with 79%.",
      "Built a strong academic foundation and developed an interest in computers and technology.",
    ],
  },
];
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Discone",
    description:
      "A modern community platform featuring real-time chat, live meetings, audio/video calling, and user authentication.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Socket.io",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/itsdevrajchauhan",
  },

  {
    name: "TicketSphere",
    description:
      "A full-stack Event Ticket Booking platform with React frontend, Django REST backend, JWT authentication, and SQLite database.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "JWT",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/itsdevrajchauhan",
  },

  {
    name: "Movie Search",
    description:
      "A React-based movie search application integrated with the TMDB API for real-time movie and TV show information.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TMDB API",
        color: "green-text-gradient",
      },
      {
        name: "Vite",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/itsdevrajchauhan",
  },

  {
    name: "URL Shortener",
    description:
      "A URL shortening service built using Node.js, Express, MongoDB, and Mongoose with REST API testing using Postman.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/itsdevrajchauhan",
  },
];

export { services, technologies, experiences, testimonials, projects };