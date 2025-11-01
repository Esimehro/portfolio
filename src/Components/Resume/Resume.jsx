import React, { useState } from "react";
import styles from "./Resume.module.css";
import amalaCloud from "../../assets/amalaCloud.png";
import serviceProvider from "../../assets/sps.png";
import individual from "../../assets/individual.png";
import ptech from "../../assets/prioclentech.png";
import jkbofx from "../../assets/jbfox.png";
import cornieHealth from "../../assets/cornie.png";

const Resume = () => {
  const [activeBio, setActiveBio] = useState("education");

  const educationItems = [
    {
      period: "2012-2017",
      title: "Delta State University, Abraka",
      subtitle: "B.Sc. Chemistry Education",
    },
    {
      period: "2017-2018",
      title: "National Youth Service Corps",
      subtitle: "Nigerian Metrological Agency. Kano State.",
    },
  ];

  const workHistoryItems = [
    {
      period: "Nov. 2024 - Present",
      company: "Amala Cloud Solutions Ltd.",
      position: " SOFTWARE ENGINEER I",
      // description: 'Currently working as MERI stock web and mobile developer and also an online instructor on udemy.',
      responsibilities: [
        "Translated high-fidelity UI/UX designs into scalable and responsive web applications, optimizing load time and maintainability.",
        " Crafted, updated, and maintained client websites and web applications, enhancing webpresence and increasing user retention based on client recommendations",
        "Implemented Zustand for easy and efficient state management.",
        " Configured CI/CD pipelines using Github actions for seamless update of application and reduced downtime.",
        " Deployed test and live environments on Google Cloud Platform and Azure for streamlined maintenance and updates and availability.",
        " Engaged in team training, product discovery, code reviews, and brainstorming sessions to enhance communication, cooperation, and drive company objectives.",
      ],
    },
    {
      period: "Oct. 2023 - Nov. 2024",
      company: "Acumen Digital.",
      position: "Frontend Developer",
      // description: 'Worked on various client projects focusing on responsive web applications and user interface development.',
      responsibilities: [
        "Designed and implemented responsive features and queries to provide a consistent and seamless user experience across diverse mobile device sizes.",
        " Contributed to designing and developing web-based user interfaces, delivering highly responsive web applications using React.js.",
        " Teamed up with backend developers and product managers to create high-performing, fully functional websites. Crafted modular, reusable components with Vue.js and React.js to boost code maintainability and scalability.",
        " Developed and maintained WordPress websites to meet client’s requirement.",
      ],
    },
    {
      period: "Aug. 2022 - Oct. 2023",
      company: "Lotus Beta Analytics",
      position: "Frontend Developer",
      // description: 'Started my professional career working on small to medium scale web applications.',
      responsibilities: [
        "Developed and optimised responsive web applications using React, CSS, SCSS, TypeScript, and Next.js, enhancing user experience and improving load times.",
        " Engineered custom SharePoint solutions using SharePoint Framework (SPFx) and React, boosting team productivity and streamlining information sharing.",
        " Designed and implemented comprehensive admin dashboards using React, providing real-time insights into user activity and enabling data-driven decision-making.",
        "Utilized SharePoint content management capabilities alongside custom React components to enhance information sharing and collaboration across the organization.",
        " Contributed to the development of reusable components and libraries, accelerating project delivery times and ensuring consistency across applications",
        "Optimized application performance through code refactoring and implementation of best practices, resulting in an improvement in overall system efficiency.",
      ],
    },
    {
      period: "Sept. 2021 - Aug. 2022",
      company: "Scillafield Solutions Limited",
      position: "Frontend Developer",
      // description: 'Worked on various freelance projects building websites and web applications for small businesses.',
      responsibilities: [
        "Built and optimized secure, user-friendly applications using React.js, driving significant advancements in performance and user satisfaction",
        " Developed and deployed responsive interfaces with React.js, Vue.js, and Bootstrap, ensuring consistent functionality across diverse devices and browsers.",
      ],
    },
    {
      period: "Oct. 2020 - Aug. 2021",
      company: "Stutern Graduate Accelerator",
      position: "Frontend Developer",
      // description: 'Worked on various freelance projects building websites and web applications for small businesses.',
      responsibilities: [
        " Teamed up with backend developers and product managers to create high-performing, fully functional websites. Crafted modular, reusable components with Vue.js and React.js to boost code maintainability and scalability.",
        " Built and optimized dynamic web components and applications, creating engaging and responsive user interfaces with HTML, CSS, JavaScript, and top-tier frameworks such as React.JS, Vue.JS, and TypeScript",
      ],
    },
  ];

  const programmingSkills = [
    { name: "React/React Native", level: 90 },
    { name: "JavaScript/TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "HTML/CSS", level: 95 },
    { name: "Python", level: 75 },
  ];

  const projects = [
    {
      name: "amalaCloud Website",
      description:
        "amalaCloud is a dual-sided platform that simplifies financial decisions for users through product comparison and data control, while equipping businesses with secure, efficient data and identity management tools.",
      image: amalaCloud,
      liveLink: "https://amala.cloud/",
      technologies: ["React", "hobspot", "Tailwind CSS", "Framer Motion"],
    },
    {
      name: "Cornie Health App",
      description:
        "The Cornie Health app is a patient-centric portal that simplifies access to healthcare. It empowers users to book appointments, manage prescriptions, access lab results, and connect with providers, all through a single, user-friendly platform. The app is part of a broader FHIR-based ecosystem designed to coordinate care and deliver a more efficient and personalized healthcare experience.",
      image: cornieHealth,
      liveLink:
        "https://app.corniehealth.com/login?bookingsite=true&redirect=%2F&homepage=true",
      technologies: ["Vue,js", "TypeScript", " Pinia", "Tailwind CSS"],
    },
    {
      name: "amalaCloud Service Provider App",
      description:
        "A platform that equips service providers with essential tools to distribute financial products, and automated solutions for identity verification, address management, and data compliance.",
      image: serviceProvider,
      liveLink: "https://sps.amala.cloud/provider/login",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
    },
    {
      name: "amalaCloud Individual App",
      description:
        "amalaCloud empowers individuals with a central dashboard to compare financial products like loans and insurance, and to securely manage their personal data.",
      image: individual,
      liveLink: "https://individual.amala.cloud/individual/login",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
    },
    {
      name: "Prioclen Tech Website",
      description:
        "Prioclen Technologies is a full-service software development and IT solutions company. They specialize in building custom web and mobile applications, providing managed cybersecurity services, and offering end-to-end IT infrastructure support (PIM) to help businesses scale and secure their operations.",
      image: ptech,
      liveLink: "https://prioclen.tech/",
      technologies: ["Next.js", "Tailwind CSS", "Gsap"],
    },
    {
      name: "JKBOFX Trading Platform",
      description:
        "JKBOFX is an educational website offering comprehensive forex trading resources. It provides a trading academy with expert-led courses, daily market signals, and automated trading tools (Expert Advisors) to equip both new and experienced traders with the knowledge and tools for success.",
      image: jkbofx,
      liveLink: "https://jkbofx.com/",
      technologies: ["Vue.js", "TypeScript", "Tailwind CSS"],
    },
  ];

  const interests = [
    "Reading",
    "Writing",
    "Traveling",
    "Learning new technologies and tools",
    "Listening to music",
    "Discovering new places",
  ];

  const bioDetails = [
    { id: "education", label: "Education", content: "education" },
    { id: "work-history", label: "Work History", content: "work-history" },
    {
      id: "programming-skills",
      label: "Programming Skills",
      content: "programming-skills",
    },
    { id: "projects", label: "Projects", content: "projects" },
    { id: "interests", label: "Interests", content: "interests" },
  ];

  const renderContent = () => {
    switch (activeBio) {
      case "education":
        return (
          <div className={styles.timeline}>
            {educationItems.map((item, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineContent}>
                  <div className={styles.timelinePeriod}>{item.period}</div>
                  <div className={styles.timelineDetails}>
                    <h3 className={styles.timelineTitle}>{item.title}</h3>
                    <p className={styles.timelineSubtitle}>{item.subtitle}</p>
                  </div>
                </div>
                {index < educationItems.length - 1 && (
                  <div className={styles.timelineConnector}></div>
                )}
              </div>
            ))}
          </div>
        );

      case "work-history":
        return (
          <div className={styles.workHistoryContainer}>
            <div className={styles.workHistoryScroll}>
              {workHistoryItems.map((work, index) => (
                <div key={index} className={styles.workItem}>
                  <div className={styles.workHeader}>
                    <div className={styles.workDetails}>
                      <h3 className={styles.companyName}>{work.company}</h3>
                      <p className={styles.jobTitle}>{work.position}</p>
                      <p className={styles.workDescription}>
                        {work.description}
                      </p>
                    </div>
                    <div className={styles.workPeriod}>{work.period}</div>
                  </div>

                  <div className={styles.workResponsibilities}>
                    <h4 className={styles.responsibilitiesTitle}>
                      Key Responsibilities:
                    </h4>
                    <ul className={styles.responsibilitiesList}>
                      {work.responsibilities.map(
                        (responsibility, respIndex) => (
                          <li
                            key={respIndex}
                            className={styles.responsibilityItem}
                          >
                            {responsibility}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "programming-skills":
        return (
          <div className={styles.skillsContainer}>
            <div className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>
                LANGUAGES & FRAMEWORKS
              </h3>
              <div className={styles.skillsList}>
                {[
                  "JavaScript (ES6+)",
                  "TypeScript",
                  "C#",
                  ".NET",
                  "React.js",
                  "Vue.js",
                  "SPFx",
                ].map((skill, index) => (
                  <span key={index} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>FRAMEWORK/LIBRARIES</h3>
              <div className={styles.skillsList}>
                {[
                  "React.js",
                  "Angular.js",
                  "Vue.js",
                  "SPFx",
                  "Next.js",
                  "Tailwind CSS",
                  "Bootstrap",
                  "WordPress",
                ].map((skill, index) => (
                  <span key={index} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>
                FRONTEND & UI DEVELOPMENT
              </h3>
              <div className={styles.skillsList}>
                {[
                  "Tailwind",
                  "CSS3",
                  "SASS",
                  "Redux Toolkit",
                  "Zustand",
                  "Figma",
                  "WordPress",
                  "Elementor",
                  "Bootstrap",
                  "MUI",
                  "React Query",
                  "Vuex",
                  "Pinia",
                ].map((skill, index) => (
                  <span key={index} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>
                DEVELOPMENT & DevOps
              </h3>
              <div className={styles.skillsList}>
                {[
                  "Azure",
                  "Google Cloud Platform (GCP)",
                  "CI/CD (Github Actions)",
                  "Git",
                ].map((skill, index) => (
                  <span key={index} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>CORE COMPETENCIES</h3>
              <div className={styles.skillsList}>
                {[
                  "Attention to detail",
                  "Time management",
                  "Team player",
                  "Effective Communication",
                  "Problem-solving",
                  "Leadership",
                  "Client relationship management",
                  "Experience in using Microsoft 365",
                ].map((skill, index) => (
                  <span key={index} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );

      case "projects":
        return (
          <div className={styles.projectsContainer}>
            {projects.map((project, index) => (
              <div key={index} className={styles.projectItem}>
                <div className={styles.projectImage}>
                  <img
                    src={project.image}
                    alt={project.name}
                    className={styles.projectScreenshot}
                  />
                  <div className={styles.projectOverlay}>
                    <button
                      className={styles.projectButton}
                      onClick={() => window.open(project.liveLink, "_blank")}
                    >
                      View Live Project
                    </button>
                  </div>
                </div>
                <div className={styles.projectDetails}>
                  <h3 className={styles.projectName}>{project.name}</h3>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>
                  <div className={styles.projectTech}>
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={styles.projectLinks}>
                    <button
                      className={styles.liveButton}
                      onClick={() => window.open(project.liveLink, "_blank")}
                    >
                      View Live Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case "interests":
        return (
          <div className={styles.interestsContainer}>
            {interests.map((interest, index) => (
              <div key={index} className={styles.interestItem}>
                {interest}
              </div>
            ))}
          </div>
        );

      default:
        return (
          <div className={styles.timeline}>
            {educationItems.map((item, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineContent}>
                  <div className={styles.timelinePeriod}>{item.period}</div>
                  <div className={styles.timelineDetails}>
                    <h3 className={styles.timelineTitle}>{item.title}</h3>
                    <p className={styles.timelineSubtitle}>{item.subtitle}</p>
                  </div>
                </div>
                {index < educationItems.length - 1 && (
                  <div className={styles.timelineConnector}></div>
                )}
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <div id="resume" className={styles.container}>
      <div className={styles.resumeWrapper}>
        {/* Header Section */}
        <header className={styles.header}>
          <h3 className={styles.title}>Resume</h3>
          <p className={styles.subtitle}>My Formal Bio Details</p>
        </header>

        <div className={styles.content}>
          {/* Left Column - Bio Details */}
          <div className={styles.leftColumn}>
            <div className={styles.bioSection}>
              <h2 className={styles.sectionTitle}>Bio Details</h2>
              <ul className={styles.bioList}>
                {bioDetails.map((item) => (
                  <li
                    key={item.id}
                    className={`${styles.bioItem} ${
                      activeBio === item.id ? styles.bioItemActive : ""
                    }`}
                    onClick={() => setActiveBio(item.id)}
                  >
                    <span className={styles.bioText}>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Dynamic Content */}
          <div className={styles.rightColumn}>
            <div className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>
                {bioDetails.find((item) => item.id === activeBio)?.label}
              </h2>
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
