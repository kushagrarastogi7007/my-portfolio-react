import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate, creative and detail-oriented frontend engineer with a strong background in developing responsive and visually appealing web applications. Skilled in HTML5, CSS3, JavaScript, and libraries like React.js.  My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile frontend developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including HTML, CSS ,Javascript ,React . My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
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
    title: "Myntra Functional UI clone",
    image: project1,
    description:
      "A functional e-commerce website with features like product listing, shopping cart.",
    technologies: ["HTML", "CSS", "Javascript"],
    href: "https://myntra-functional-ui-clone.vercel.app/"
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
    title: "Drum Kit",
    image: project3,
    description:
      "an interactive drum kit web application that allows users to play different drum sounds by clicking buttons or pressing corresponding keyboard keys.",
    technologies: ["HTML", "CSS", "Javascript"],
    href: "https://kushagrarastogi7007.github.io/drum-kit-js/"
  },
  
  {
    title: "Country Guide App",
    image: project4,
    description:
      "A platform where Users can search for any country by name and shows comprehensive data for respective country ",
    technologies: ["HTML", "CSS", "Javascript"],
    href: "https://kushagrarastogi7007.github.io/Country-guide-app/"
  },
];

export const CONTACT = {
  address: "Lucknow, India",
  phoneNo: "+91 7007618669 ",
  email: "kushagrarastogi20004@gmail.com",
};
