import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
//import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/worldinfo.png";
import project9 from "../assets/projects/project-9.png";

export const HERO_CONTENT = `I am a passionate, creative and detail-oriented frontend engineer with a strong background in developing responsive and visually appealing web applications. Skilled in HTML5, CSS3, JavaScript, and libraries like React.js.  My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile frontend developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including HTML, CSS ,Javascript ,React . My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Oct 2024 - Present",
    role: "Web Developer Intern",
    company: "Abhyaz",
    description: `Designed and optimized website layouts using Zoho Sites to enhance user interface consistency and achieve a 20% reduction in page load times. Analyzed heatmaps and user session recordings to implement data-driven navigation improvements, resulting in a 10% decrease in bounce rates. Collaborated with cross-functional teams to meet and exceed project deadlines, boosting overall productivity by 25%.`,
    technologies: ["CSS", "Javascript", "Zoho Sites", "Zoho Pagesense"],
  },
  {
    year: "Nov 2022 - Dec 2022",
    role: "Web Developer Intern",
    company: "The Sparks Foundation",
    description: `Worked on minor web development projects during a one-month internship at The Sparks Foundation,focusing on frontend development with HTML, CSS, and JavaScript.`,
    technologies: ["HTML", "CSS", "Javascript",],
  },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "QuickAI App",
    image: project9,
    description:
      "It is a full-stack AI-powered content generation platform designed to help users create high-quality text and enhanced images in seconds. Built using React, Node.js, Express, and Clerk authentication, it integrates advanced AI models like Gemini for natural language, providing a seamless user experience.",
    technologies: [ "React.js", "Node.js", "Express.js", "Clerk", "NeonDB", "Gemini API" ],
    href: "https://quick-ai-taupe-beta.vercel.app/"
  },
  {
    title: "Myntra Functional UI clone",
    image: project1,
    description:
      "A functional e-commerce website with features like product listing, shopping cart.",
    technologies: ["HTML", "CSS", "Javascript"],
    href: "https://myntra-functional-ui-clone.vercel.app/"
  },
  {
    title: "Paste App",
    image: project6,
    description:
      "The app is a clipboard management tool built with React and Vite, allowing users to store and paste multiple pieces of content efficiently. It offers an intuitive interface for quick access to stored items, emphasizing a smooth user experience.",
    technologies: ["Tailwind CSS", "Reactjs", "Redux"],
    href: "https://react-paste-app-five.vercel.app/"
  },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "ReactJs", "TailwindCSS"],
    href: "https://my-portfolio-react-dun.vercel.app/"
  },

  {
    title: "WorldInfo App",
    image: project7,
    description:
      "React World Info is a React.js-based web app that fetches and displays global data using a REST API with Axios. It includes search, filters, and sorting (ascending/descending) for better organization. The UI is styled with CSS for a seamless user experience.",
    technologies: ["CSS", "Javascript", "React.js", "REST API"],
    href: "https://react-world-info.vercel.app/"
  },

  {
    title: "LeetMetric App",
    image: project5,
    description:
      "LeetMetric is an app that provides detailed analytics of a user's LeetCode profile, showcasing stats, tracking progress, and highlighting strengths and weaknesses to help optimize coding practice.",
    technologies: ["HTML", "CSS", "Javascript"],
    href: "https://kushagrarastogi7007.github.io/JS-basic-projects/Leetmetric-App/"
  },

  {
    title: "Drum Kit",
    image: project3,
    description:
      "an interactive drum kit web application that allows users to play different drum sounds by clicking buttons or pressing corresponding keyboard keys.",
    technologies: ["HTML", "CSS", "Javascript"],
    href: "https://kushagrarastogi7007.github.io/drum-kit-js/"
  },
  
  // {
  //   title: "Country Guide App",
  //   image: project4,
  //   description:
  //     "A platform where Users can search for any country by name and shows comprehensive data for respective country ",
  //   technologies: ["HTML", "CSS", "Javascript"],
  //   href: "https://kushagrarastogi7007.github.io/Country-guide-app/"
  // },
];

export const CONTACT = {
  address: "Lucknow, India",
  phoneNo: "+91 7007618669 ",
  email: "kushagrarastogi20004@gmail.com",
};
