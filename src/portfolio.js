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
  username: "Shubham Patil",
  // title: "Hi all, I'm Shubham",
  title: "Hi, I'm Shubham",
  subTitle: emoji(
    "A passionate Full Stack Software Developer having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink: "https://", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Shubham-p-patil",
  linkedin: "https://www.linkedin.com/in/shubham-pravin-patil/",
  gmail: "shubhamppatil30@gmail.com",
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
  title: "What I do ?",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for web and mobile applications"
    ),
    emoji("⚡ SPA Stacks Web Applications"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "matlab"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
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
      schoolName: "Oregon State University",
      logo: require("./assets/images/osuLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2021 - May 2023",
      desc: "CGPA : 3.95",
      descBullets: [
        "Courses: Deep Learning, Database Management System, Machine Learning, Computer Graphics"
      ]
    },
    {
      schoolName: "Veermata Jijabai Technological Institute",
      logo: require("./assets/images/vjtiLogo.png"),
      subHeader: "Bachelor of Technology in Electronics Engineering",
      duration: "September 2015 - April 2019",
      desc: "CGPA : 7.33",
      descBullets: [
        "Courses: Data Structures, Algorithms, Operating Systems, Computer Networks, Computer Architecture, Image Processing."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Product Developer",
      company: "Pyebook",
      companylogo: require("./assets/images/pyebookLogo.jpeg"),
      date: "Nov 2019 - August 2021",
      desc: "",
      descBullets: [
        "Single-handedly designed and developed a Full Stack Single Page Application using React.js, Node.js, and Express.js",
        "Worked on a development of a interactive e-book that teaches you to code by adapting its contents to your learning style.",
        "Managed a team of two interns on a project and monitored daily tasks and weekly progress.",
        "Established a CI/CD pipeline using Github Actions, Docker, and AWS for better code delivery and package updates."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Sangati",
      companylogo: require("./assets/images/sangatiLogo.jpg"),
      date: "May 2017 – May 2018",
      descBullets: [
        "Developed a Full Stack Single Page Application using Angular.js,Node.js, and Express.js with a user base of over 500 users.",
        "The application focused on connecting blood donors with patients through a centralized system based on K-Means clustering algorithm during these difficult times of Covid-19 pandemic.",
        "Website was deployed using Github Actions, and AWS."
      ]
    },
    {
      role: "Machine Learning Engineer Intern",
      company: "Bloombench",
      companylogo: require("./assets/images/bloombenchLogo.jpg"),
      date: "Jan 2015 – Sep 2015",
      descBullets: [
        "Classified students based on their previous academic records inorder to suggest them prerequisite courses for the course they opted using Self-Organizing Map(SOM) type of an ANN Algorithm",
        "Adaptive test platform was also created based on the aptitude of the student using a probablistic model approach."
      ]
    },
    {
      role: "Prooduct Developer Intern",
      company: "Kossine",
      companylogo: require("./assets/images/kossineLogo.jpg"),
      date: "Jan 2015 – Sep 2015",
      descBullets: [
        "Developed a prototype of an IoT device(Pillow) featuring voice calling, alarm system , music streaming, and reading light.",
        "Performed end-to-end testing on the whole project for seamless execution.",
        "Enabled Raspberry Pi cron jobs to execute client scripts on startup automatically."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/vaccinationChart.jpg"),
      projectName: "Poshan",
      projectDesc:
        "A flutter-based android application for doctors and volunteers to maintain children’s vaccination and related health records in rural areas.",
      footerLink: [
        {
          name: "Visit Website",
          url: "#"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/teaching.png"),
      projectName: "Student Management System",
      projectDesc:
        "A web-based learning management system for educators, and students to access and manage a variety of customize course creation and management tools, course and user analytic and statistics.",
      footerLink: [
        {
          name: "Visit Website",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/mobileManipulator.png"),
      projectName: "SLAM for an Autonomous Mobile Manipulator (AVITRA)",
      projectDesc:
        "AVITRA is a omni-wheeled platform with manipulators and a suite of sensors that allow it to autonomously navigate around obstacles and interact with the physical world.",
      footerLink: [
        {
          name: "Visit Website",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/investing.png"),
      projectName: "Stock Trend Analysis",
      projectDesc:
        "A platform displaying and analyzing the trending news articles and the stock price of the target stock over the years and providing a suggestion on whether to invest in the target stock.",
      footerLink: [
        {
          name: "Visit Website",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/office.png"),
      projectName: "Office Automation",
      projectDesc:
        "Facilitate detection of human presence, automated attendance and,crowd management in emergencies such as fires and give a productivity analysis in offices",
      footerLink: [
        {
          name: "Visit Website",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/rhex.webp"),
      projectName: "R-Hex : All Terrain Robot",
      projectDesc:
        "An all-terrain robot inspired by gait of a cockroach that can assist in rescue operations by capturing vital data from an affected area.",
      footerLink: [
        {
          name: "Visit Website",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/smartFarming.png"),
      projectName: "Pro Farming",
      projectDesc:
        "Pro-Farming was an entrepreneurial attempt to provide farm automation (covering aspects like seed sowing, crop disease detection, soil data collection and analysis) as a service.",
      footerLink: [
        {
          name: "Visit Website",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/editor.png"),
      projectName: "Web Editor For Arduino",
      projectDesc:
        "Arduino create agent was used for developing a connection between the arduino and the web interface. Code Editor was able to save the code and then compile it and upload it to the arduino development boards.",
      footerLink: [
        {
          name: "Visit Website",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/indoorNavigation.png"),
      projectName: "Indoor Navigation For Blind",
      projectDesc:
        "Idea behind the project was to empower visually challenged people to locate themselves inside a complex or building confidently without being assisted by someone to reach the destination.",
      footerLink: [
        {
          name: "Visit Website",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/smartWatch.png"),
      projectName: "Trekkers Watch",
      projectDesc:
        "A smartwatch is probably most aptly described by Wikipedia as “a computerized wristwatch with functionality that goes beyond timekeeping”. Designed a watch that will show time, temperature, and pressure at that altitude along with dispalying the deviation from North Direction",
      footerLink: [
        {
          name: "Visit Website",
          url: "#"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "",

  achievementsCards: [
    {
      title: "Nvidia Jetson Developer Challenge",
      subtitle: "Second in Peoples's Choice Award",
      image: require("./assets/images/nvidiaLogo.png"),
      footerLink: []
    },
    {
      title:
        " DST & Texas Instruments India Innovation Challenge Design Contest",
      subtitle: "SemiFinalist",
      image: require("./assets/images/tiLogo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1pgqp3bz-6oemrGadQT2hx1jAOg8P-NsF/view?usp=sharing"
        }
      ]
    }
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
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
  title: emoji("Contact Me:"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "patilsh@oregonstate.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

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
  twitterDetails
};
