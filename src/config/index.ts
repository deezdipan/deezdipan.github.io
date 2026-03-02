import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Dipan Baral — Mobile & Web Developer",
  author: "Dipan Baral",
  description:
    "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/LinkedinHeadshot.jpeg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    //{ text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/dipan-baral/" },
    { text: "Github", href: "https://github.com/deezdipan" },
    //{ text: "Youtube", href: "https://github.com/immois/astro-zen" },
    //{ text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Dipan Baral",
    specialty: "Software Engineer",
    summary:
      "Developer based in New York, NY. I specialize in front-end architecture, AI-driven user experiences, and developing scalable digital solutions for complex problems.",
    email: "dipanbaral05@gmail.com",
  },
  experience: [
    {
      company: "RK Blueprints",
      position: "Project Manager (HRIT)",
      startDate: "June 2025",
      endDate: "August 2025",
      summary: [
        "Earned promotion to Project Manager by architecting a 3-tier web platform for futureHR, integrating an AI chatbot toautomate employee inquiries and system navigation.",
        "Streamlined HR workflows in Freshservice using rule-based ticket routing and system configurations, reducing manualhandling and increasing response efficiency.",
        "Engineered technical enablement content for platform integrations involving Workday, Salesforce, and Allbound, improving cross-departmental tool adoption.",
      ],
    },  
    {
      company: "UB@XLAB",
      position: "Software Engineer Intern",
      startDate: "January 2025",
      endDate: "April 2025",
      summary: [
        "Developed responsive front-end architecture for SOAP .AI using HTML, CSS, and JavaScript, focusing on expert-user accessibility and human-AI interaction accuracy.",
        "Integrated D3.js visualizations to model behavioral ontologies and render complex datasets, significantly increasing data interpretability for researchers.",
        "Collaborated with Ph.D. researchers to refine UI logic and test user flows, optimizing the interface for high-fidelity behavioral analysis."
      ],
    },
    {
      company: "The Allert Group",
      position: "Software Engineer Intern",
      startDate: "June 2023",
      endDate: "August 2023",
      summary: [
        "Engineered client-side features to render and interact with structured datasets, focusing on efficient state management and responsive UI behavior.",
        "Applied secure coding practices and networking fundamentals to support vulnerability assessments of emerging technology firms and designed scalable data visualization workflows to transform raw carbon-footprint data.",
      ],
    },
  ],
  projects: [
    {
      name: "UniMind",
      summary: "An AI-powered wellness companion built with React and Flask that integrates mood journaling, academic tracking, and persistent emotional memory to support student mental health.",
      //linkPreview: "/",
      //linkSource: "https://github.com/immois/astro-zen",
      image: "/WaitLessCourses.png",
    },
    {
      name: "WaitLess Courses",
      summary: "A student-centric course discovery platform that simplifies the enrollment process by providing real-time waitlist data and intuitive search features to help students navigate University at Buffalo's course offerings more efficiently.",
      //linkPreview: "/",
      //linkSource: "https://github.com/immois/astro-zen",
      image: "/UniMind-Front-Page.png",
    },
    // {
    //   name: "ClonTagram",
    //   summary: "A social network that replicates the features of Instagram",
    //   //linkPreview: "/",
    //   //linkSource: "https://github.com/immois/astro-zen",
    //   image: "/clone-ig.png",

    //   //I deleted div containing the "Source" and "Preview" links from Projects.astro
    // },
  ],
  about: {
    description: `
    Senior Computer Science student at UB and aspiring AI/ML specialist with a proven 
    track record in full-stack development and project leadership. From architecting AI 
    interfaces for accessibility to managing sustainability research, I bridge the gap 
    between complex data and user-centric design. Projected to graduate in August 2026, 
    I am currently focused on building secure, intelligent applications that push the 
    boundaries of modern software engineering.`,
    image: "/LinkedinHeadshot.jpeg",
  },
};

// #5755ff
