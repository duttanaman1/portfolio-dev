/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Naman Dutta",
  title: "Hi all, I'm Naman",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of Credit Cards Platform and Product Development with Reactjs & SpringBoot. As a proficient software developer, I excel in a range of crucial skills, including test-driven techniques, agile methodologies, software development using microservices, CI/CD, and quality assurance practices, as well as data structures, responsive web design, and DevOps. "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/duttanaman1",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "duttanaman1@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Working on a cards platform using Spring Boot, React, and Jenkins. We add new client features, onboard partners, and update our source project."
    ),
    emoji(
      "⚡ Worked in a vast microservices architecture, handling system design solutions, version upgrades, oauth migration, and UI modernization."
    ),
    emoji(
      "⚡ Improved code by adopting engineering techniques, utilizing security and DevOps tools and optimizing caching while removing degraded functionalities"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Redux",
      fontAwesomeClassname: "fa fa-atom"
    },
    {
      skillName: "Springboot",
      fontAwesomeClassname: "fa fa-leaf"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Postman",
      fontAwesomeClassname: "fa fa-rocket"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "JUnit Testing",
      fontAwesomeClassname: "fas fa-microscope"
    },
    {
      skillName: "Microservices",
      fontAwesomeClassname: "fa fa-network-wired"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "VIT University",
      logo: require("./assets/images/vitlogo.png"),
      subHeader: "Bachelor in Technology: Computer Science",
      duration: "July 2017 - March 2021",
      desc: "Graduation in Computer Science with current CGPA 8.61",
      descBullets: []
    },
    {
      schoolName: "Modern Indian School",
      logo: require("./assets/images/MIS_logo.png"),
      subHeader: "High School",
      duration: "2015 - 2017",
      desc: "Highest Score in Computer Science in CBSE 12 class"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "React", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Springboot",
      progressPercentage: "75%"
    },
    {
      Stack: "DevOps",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Barclays",
      companylogo: require("./assets/images/barclays_logo.png"),
      date: "August 2021 – Present",
      desc: "Led critical migration projects, collaborating seamlessly across diverse teams to achieve an exceptional 60% reduction in CPU utilization by introducing Camel 3.0, enhancing code quality by 80%, and ensuring strict adherence to company standards and regulations."
      // descBullets: [
      //   "Led critical migration projects, adopting OAuth 2.0 and version upgrades to ensure core system stability, while also developing new client-specific features for enhanced functionality.",
      //   "Collaborated seamlessly across diverse teams encompassing Backend, Frontend, Infrastructure, and Support, facilitating the delivery of integrated solutions.",
      //   "Achieved a remarkable 60% reduction in CPU utilization by introducing Camel 3.0 into Spring Boot projects, significantly improving REST API performance and system scalability.",
      //   "Elevated overall product excellence by enhancing code quality 80%, using security and DevOps tools (SonarQube, Veracode, Jenkins, Openshift, etc.), while optimizing caching and removing degraded functionalities.",
      //   "Proficient in ensuring strict adherence to company regulations, policies, and standards, while meticulously verifying all contents for potential escalations."
      // ]
    },
    {
      role: "Full Stack Developer - Intern",
      company: "Technica Solutions",
      companylogo: require("./assets/images/techniqaSolutions_logs.png"),
      date: "April 2020 – May 2020",
      desc: "Developed and deployed multiple enterprise resource planning projects with advanced authentication (Cookie, session, JWT, Google, Facebook), integrated secure payment systems (Google Pay, Paytm), and utilized innovative technologies (FaceAPI, Web Audio Analyser Tools) for enhanced user experiences."
    },
    {
      role: "Web Developer - Intern",
      company: "10 Orbits",
      companylogo: require("./assets/images/tenOrbits_logo.png"),
      date: "June 2019 – July 2019",
      desc: "Demonstrated a strong work ethic and commitment to project success, dedicating over 45 hours weekly to building web components, crafting custom templates, and contributing to graphical design while also enhancing technical skills in MVC concepts, UIUX Designing and technical documentation."
    },
    {
      role: "Public Relation Executive: Board Member",
      company: "IEEE SSIT",
      companylogo: require("./assets/images/IEEESSITVIT_logo.png"),
      date: "March 2018 – March 2018",
      desc: "Successfully drove 150% growth through strategic marketing and sponsorship management, organized major events and recruitments, led a 100+ member chapter as Board Chair, actively contributed to the Student Outreach Program and collaborated with other chapters, and provided essential support in technical documentation, website integration, and project management."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      projectName: "Partner Bridge Portal",
      projectDesc:
        "Developed for partners and businesses teams to effortlessly launch new products or incorporate additional features into existing products."
    },
    {
      projectName: "Build your own Credit Card",
      projectDesc:
        "Feature integration allowing customers to select from various combinations of benefits and rewards to customize their own credit card."
    },
    {
      projectName: "Apply Credit Card Simulator",
      projectDesc:
        "Assisted with adding few new features into the existing Simulator which helps the developers to effectily apply for credit cards with auto generated data."
    },
    {
      projectName: "Automatic Attendance System",
      projectDesc:
        "Designed system using LBPH algorithm, Haar Cascade classification, tkinter, OpenCV and Firebase in python that generates Excel sheet of attendees based on facial recognition."
    },
    {
      projectName: "StartUp Web Application",
      projectDesc:
        "Constructed an advance ecommerce website using React JS, Redux, Express JS, Node JS and MongoDB in microservices architecture with product recommendation system, google maps API for location, time series analysis and payment integration."
    },
    {
      projectName: "Traffic Accident Detection",
      projectDesc:
        "Pioneered an application using Arduino coding, python libraries: ImageAI & SMTP, image processing, IaaS; continuous integration of data in php website and firebase database."
    },
    {
      projectName: "Online Examination Management System",
      projectDesc:
        "Web application customized using PHP, MySQL, JQuery and SCSS; FACE API and Web Audio Analyzer libraries."
    },
    {
      projectName: "Crime Prediction System",
      projectDesc:
        "Developed using Django framework and Machine Learning to analyze and predict crime."
    },
    {
      projectName: "Login System using Gesture Recognition",
      projectDesc:
        "Built gesture login using OpenCV, Otsu thresholding and Cosine Laws in python."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Docker Essential Training",
      subtitle: "Linkedin Learning",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.linkedin.com/learning/certificates/d23e21833d90d5fcffcacd7cb0451db7348d521de0bc3c63132ae9da288dad63"
        }
      ]
    },
    {
      title: "Learning Jenkins",
      subtitle: "Linkedin Learning",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.linkedin.com/learning/certificates/ce8235969e6a8085a788d24dc867a7aa09a2e87b361c624c8b598c1d686f427b"
        }
      ]
    },
    {
      title: "Learning SOLID Programming Principles",
      subtitle: "Linkedin Learning",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.linkedin.com/learning/certificates/9e99f432acf8e11e076bc7b10810d94be600c706bf550f8fb4fff3c8e1ec41b5"
        }
      ]
    },
    {
      title: "Postman Essential Training",
      subtitle: "Linkedin Learning",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.linkedin.com/learning/certificates/b3aa0ff91ba037e3aadf2a0b62d585dda3cc398bed692e5980fcda20e783a04e"
        }
      ]
    },
    {
      title: "Tailwind CSS Essential Training",
      subtitle: "Linkedin Learning",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.linkedin.com/learning/certificates/3600be36d3f5998510d3b458481e3f65dfeacca1fe54a3fa15202119f587bcf8"
        }
      ]
    },
    {
      title: "Financial Accounting ",
      subtitle: "National Association of State Board of Accountancy (NASBA)",
      footerLink: [
        {
          name: "View Certificate part 1",
          url: "https://www.linkedin.com/learning/certificates/bc71b141a4000da9067e6013f85160e10764afed0a548c1d061ecbcdce93d53c"
        },
        {
          name: "View Certificate part 2",
          url: "https://www.linkedin.com/learning/certificates/0c3b24dd1de87a86bc680cb86eba1f84359aedfc20f8692c99989054cb88cd56"
        }
      ]
    },

    {
      title: "Software Architecture: Breaking a Monolith into Microservices",
      subtitle: "Linkedin Learning",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.linkedin.com/learning/certificates/2ab16f1863358780698ad8b0ad90090024e3ad6db3f1f6c87c3e5d88e7054ba2"
        }
      ]
    },

    {
      title: "Java Design Patterns: Structural",
      subtitle: "Linkedin Learning",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.linkedin.com/learning/certificates/73e341361fd83c429c415ffaf1df70cef212c168686a49a70d014d79b33d6b42"
        }
      ]
    },
    {
      title: "React: Design Patterns",
      subtitle: "Linkedin Learning",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.linkedin.com/learning/certificates/93bd6d2fe9c9fc6c6f8d913507f22cb0d87dfcca3a6fa6db51d98843d363437b"
        }
      ]
    },
    {
      title: "Software Design: Code and Design Smells",
      subtitle: "Linkedin Learning",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.linkedin.com/learning/certificates/cf4abeed2c4d3cecae3df066e2cc0b401e1674729f372fc92dfa3a198cd4e1c3"
        }
      ]
    },
    {
      title: "Spring Framework Specialization",
      subtitle: "Coursera",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/BRWS7938WAQ4"
        }
      ]
    },
    {
      title: "Spring - Cloud Overview",
      subtitle: "Coursera",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/certificate/MAKKQ6V9ZP4V"
        }
      ]
    },
    {
      title: "Spring - Ecosystem and Core",
      subtitle: "Coursera",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/certificate/WQED5SLNRYKW"
        }
      ]
    },
    {
      title: "Spring Data Repositories",
      subtitle: "Coursera",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/certificate/SHRNLCLY29CU"
        }
      ]
    },
    {
      title: "Spring MVC, Spring Boot and Rest Controllers",
      subtitle: "Coursera",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/certificate/YWVYRPHSBVY3"
        }
      ]
    },
    {
      title: "Software Testing Tutorial",
      subtitle: "Great Learning",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://olympus1.mygreatlearning.com/course_certificate/BUSUYPAM"
        }
      ]
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      subtitle: "Coursera",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/certificate/LHZL8LUAZHVD"
        }
      ]
    },
    {
      title: "Blockchain: Foundations and Use Cases",
      subtitle: "Coursera",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/certificate/F7YJXL6KL8R9"
        }
      ]
    },
    {
      title: "Communication Foundations",
      subtitle: "Linkedin Learning",
      footerLink: [
        {
          name: "View Certificate",
          url: ""
        }
      ]
    },
    {
      title: "Increasing Collaboration on Your Team",
      subtitle: "Coursera",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.linkedin.com/learning/certificates/9ec4f582c8772ceb945e01d6c470789b84635b1a80799676efeb1a3a4b55fa7f"
        }
      ]
    },
    {
      title: "Data Structures in C++",
      subtitle: "Udemy",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.udemy.com/certificate/UC-a59fcffe-fd54-4893-b7a8-c03dc69b8942/"
        }
      ]
    },
    {
      title: " Fundamentals of Network Security",
      subtitle: "Coursera",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.udemy.com/certificate/UC-2d906430-a029-4b40-9656-95923db72963/"
        }
      ]
    },
    {
      title: "Elements of AI",
      subtitle: "University of Helsinki and Reaktor",
      footerLink: [
        {
          name: "View Certificate",
          url: "Complete course of SQL Database Programming"
        }
      ]
    },
    {
      title: "Complete course of SQL Database Programming",
      subtitle: "Coursera",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.udemy.com/certificate/UC-1673bb18-8596-4e41-a8ed-0cac32842683/"
        }
      ]
    },
    {
      title: "Excel Charts and Graphs : Master Data Visualization",
      subtitle: "Udemy",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.udemy.com/certificate/UC-59dd65bc-4a7d-48ba-9db7-2711b81d43c3/"
        }
      ]
    },
    {
      title: "Statistics & Probability for Data Science",
      subtitle: "Udemy",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.udemy.com/certificate/UC-7374655d-643b-49e7-be0d-2fc811e6b259/"
        }
      ]
    },
    {
      title: "Support Vector Machines in Python: SVM Concepts & Code ",
      subtitle: "Udemy",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.udemy.com/certificate/UC-ecd9ee34-9758-4c94-9f3d-f7f4849d333b/"
        }
      ]
    },
    {
      title: "The Hands On Machine Learning Course",
      subtitle: "Udemy",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.udemy.com/certificate/UC-26b349e0-175a-45e5-9559-41dc0477280c/"
        }
      ]
    },
    {
      title: "Getting Started with Azure",
      subtitle: "Coursera",
      footerLink: [
        {
          name: "View Certificate",
          url: "http://coursera.org/verify/N2PLAQM9CHZ2"
        }
      ]
    },
    {
      title: "Modern JavaScript for React JS - ES6",
      subtitle: "Udemy",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.udemy.com/certificate/UC-45a17413-9a27-4509-ae57-fb120108e6d6/"
        }
      ]
    },
    {
      title: "JavaScript: Coding Challenge Bootcamp - 2020",
      subtitle: "Udemy",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.udemy.com/certificate/UC-e8e75d0d-5fb7-4b84-a419-6b04996f3556/"
        }
      ]
    },
    {
      title: "Bootstrap & jQuery - Certification Course for Beginners",
      subtitle: "Udemy",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.udemy.com/certificate/UC-63e5375b-b9b5-4a7b-a802-297207f31cfc/"
        }
      ]
    },
    {
      title: "Single Page Web Applications with AngularJS",
      subtitle: "Coursera",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/certificate/G6TCFFWFA8RS"
        }
      ]
    },
    {
      title: "Machine Learning",
      subtitle: "Coursera",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/verify/MNDJ9KHPAYFT"
        }
      ]
    },
    {
      title: "Advanced Styling with Responsive Design",
      subtitle: "Coursera",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/certificate/CVRRZZ39U3LR"
        }
      ]
    }

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   // image: require("./assets/images/pwaLogo.webp"),
    //   // imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.linkedin.com/pulse/relational-database-management-system-naman-dutta/",
      title: "Relational Database Management System",
      description:
        "Choosing a database used to be a straightforward decision. There were only a few options to choose from. Much of the world runs on relational databases. In fact, they’re at the core of many mission-critical applications, some of which you may use in your day-to-day life."
    },
    {
      url: "https://www.linkedin.com/pulse/move-decentralization-blockchain-naman-dutta/",
      title: "Move to Decentralization: Blockchain",
      description:
        "Blockchains are architecturally decentralized because their infrastructure has no central point of failure but, blockchains are logically centralized."
    },
    {
      url: "https://www.linkedin.com/pulse/brief-history-blockchain-naman-dutta/",
      title: "The Brief, Brief History of Blockchain",
      description:
        "Although the concept of a blockchain was first fully actualized in Satoshi Nakamoto's Bitcoin Whitepaper, the underlying component technologies draw from years of research across cryptography, computing, and economics."
    },
    {
      url: "https://www.linkedin.com/pulse/competitive-programming-algorithms-every-coder-must-know-naman-dutta/",
      title: "Competitive programming algorithms every coder must know",
      description:
        "Competitive programming isn’t just about typing out code. It is a sport, perhaps even a form of art."
    },
    {
      url: "https://www.linkedin.com/pulse/what-major-differences-between-python-r-data-science-naman-dutta/",
      title:
        "What are the major differences between Python and R for data science?",
      description:
        "Both Python and R have vast software ecosystems and communities, so either language is suitable for almost any data science task. That said, there are some areas in which one is stronger than the other."
    },
    {
      url: "https://www.linkedin.com/pulse/5-common-encryption-algorithms-unbreakables-future-naman-dutta/",
      title:
        "5 Common Encryption Algorithms and the Unbreakables of the Future",
      description:
        "While security is an afterthought for many PC users, it’s a major priority for businesses of any size. Even if you don’t have millions to lose, protecting what you do have should be a high priority. There are several forms of security technology available, but encryption is one that everyday computer users should know about. Encryption is an interesting piece of technology that works by scrambling data so it is unreadable by unintended parties."
    },
    {
      url: "https://www.linkedin.com/pulse/what-javascript-framework-choose-naman-dutta/",
      title: "What JavaScript framework to choose?",
      description:
        "Anyone starting their career as a developer always faces a problem of which programming language, framework or tool to learn and choose. For JavaScript developers, Angular, React, and Vue are the most popular frameworks."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 7339210265",
  email_address: "duttanaman1@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
