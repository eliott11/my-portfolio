import {
  motion,
  graphic,
  web,
  javascript,
  typescript,
  html,
  css,
  react,
  vue,
  tailwind,
  nodejs,
  postman,
  git,
  figma,
  cypress,
  dqe,
  johnpaul,
  teaminside,
  portfolio,
  ponggame,
  bibliopus,
  dqeproject,
  emailapi,
  startup,
  threejs,
  github,
  linkedin,
  behance,
} from "../assets";

/* Texts website */

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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End Web Developer",
    icon: web,
  },
  {
    title: "Motion Designer",
    icon: motion,
  },
  {
    title: "Graphic Designer",
    icon: graphic,
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
    name: "Vue.js",
    icon: vue,
  },
  {
    name: "React",
    icon: react,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Cypress",
    icon: cypress,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Figma",
    icon: figma,
  }
];

const experiences = [
  {
    title: "Front-End Developer Vue.js",
    company_name: "John Paul (Accor), Paris | Apprenticeship",
    icon: johnpaul,
    iconBg: "#383E56",
    date: "October 2021 - September 2023 (2 years)",
    points: [
      "Developing and maintaining web applications using Vue.js",
      "Use of development tools (Git, Gitlab, Jira) and mastering the Front End ecosystem (Vue.js, Storybook, Cypress)",
      "Development of new features in a developer team for different projects within the company using Agile methods (SCRUM)",
      "Test of new features and bug-fixing (Cypress, SquashTM)",
      "Collaborating with cross-functional teams including a team of Front-End and Back-End developers, UX/UI Designers and Product Managers to create high-quality products",
    ],
  },
  {
    title: "Motion Designer",
    company_name: "TeamInside Group, Paris | Internship",
    icon: teaminside,
    iconBg: "#E6DEDD",
    date: "February 2021 - July 2021 (6 months)",
    points: [
      "Creation of product visuals and videos in Motion Design (After Effect, Photoshop) for advertising agencies",
      "Mastering the Adobe Suits by having courses once a week with another Motion Designer to learn new graphic and motion design technics",
      "Collaborating with cross-functional teams including motion designers, graphic designers, the marketing team and product managers to create high-quality video production"
    ],
  },
  {
    title: "Graphic & Motion Design Manager",
    company_name: "DQE Software, Paris | Fixed-Term Contract",
    icon: dqe,
    iconBg: "#383E56",
    date: "July 2020 - August 2020 (2 months)",
    points: [
      "Designing new storyboards for promotional video products",
      "Production of dynamic motion design demo videos showcasing the comprehensive suite of software solutions, utilized effectively for exhibitions and client presentations to enhance understanding of the product offerings",
      "Collaborating with cross-functional teams including the marketing team and product managers to create high-quality video products"
    ],
  },
  {
    title: "Marketing Assistant & Graphic Designer",
    company_name: "DQE Software, Paris | Internship",
    icon: dqe,
    iconBg: "#E6DEDD",
    date: "June 2019 - August 2019 (3 months)",
    points: [
      "Creation of advertising banners for exhibitions, e-mail banners ",
      "Social networks management",
      "Creating motion design videos from their storyboards to the final product demos",
    ],
  },
];

const projects = [
  {
    name: "Portfolio Website",
    description:
      "I've made this portfolio website to show my skills in Front-End Web Development, you can consult the project on Github to see how I use React, ThreeJS and Tailwind all together.",
    tags: [
      {
        name: "Vite",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Threejs",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    imagelink: github,
    source_code_link: "https://github.com/eliott11/my-portfolio",
  },
  {
    name: "Email API",
    description:
      "Bridge API that redirect my requests data from my contact form  to the Brevo API. Brevo is a service that send me automatically an email when someone leave me a message through my portfolio contact section.",
    tags: [
      {
        name: "Nitro",
        color: "blue-text-gradient",
      },
      {
        name: "Brevo",
        color: "green-text-gradient",
      },
      {
        name: "Zod",
        color: "pink-text-gradient",
      },
    ],
    image: emailapi,
    imagelink: github,
    source_code_link: "https://github.com/eliott11/email-api",
  },
  {
    name: "Startup Website",
    description:
      "Website about a french startup. Presenting their goal, their history and a complete presentation of the different solutions they offer.",
    tags: [
      {
        name: "Vue",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: startup,
    imagelink: behance,
    source_code_link: "https://www.behance.net/eliottdemont/projects",
  },
  {
    name: "Pong Game",
    description:
      "Little Pong Game in Javascript for training using the DOM. The other player is automatic and follow the ball to return it. You can find the link to play it on the Github repository. Good game!",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "DOM",
        color: "green-text-gradient",
      },
      {
        name: "Gameloop",
        color: "pink-text-gradient",
      },
    ],
    image: ponggame,
    imagelink: github,
    source_code_link: "https://github.com/eliott11/Pong-Game",
  },
  {
    name: "Book App",
    description:
      "Book app for helping people to read more and find new books while assisting local bookshops with their visibility, their logistics and their management.",
    tags: [
      {
        name: "Vue",
        color: "blue-text-gradient",
      },
      {
        name: "Turbo",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: bibliopus,
    imagelink: github,
    source_code_link: "https://github.com/Bibliopus/",
  },
  {
    name: "Motion Design Demo Videos and Banners",
    description:
      "Production of dynamic motion design demo videos showcasing the comprehensive suite of software solutions, utilized effectively for exhibitions and client presentations to enhance understanding of the product offerings.",
    tags: [
      {
        name: "After Effect",
        color: "blue-text-gradient",
      },
      {
        name: "Photoshop",
        color: "green-text-gradient",
      },
      {
        name: "Adobe",
        color: "pink-text-gradient",
      },
    ],
    image: dqeproject,
    imagelink: behance,
    source_code_link: "https://www.behance.net/gallery/125745489/Corporate-Internship-for-DQE-Software",
  },
];

const links = [
  {
    title: "Github",
    href: "https://github.com/eliott11",
    image: github,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/eliott-dt/",
    image: linkedin,
  },
  {
    title: "Behance",
    href: "https://www.behance.net/eliottdemont",
    image: behance,
  },
]

export { services, technologies, experiences, projects, links };