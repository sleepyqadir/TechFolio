/** @format */

import emoji from "react-easy-emoji";

/* 1. Main App */
/* 2. Social Networks */
/* 3. Banner Section  */
/* 4. About Section  */
/* 5. Skills Section */
/* 6. Open Source Section  */
/* 7. Projects Section */
/* 8. Experience Section */
/* 9. Contact Section */

/* wrap your text in emoji("") if you want to show emoji in your text
/*=====================
    1. Main App
    Desc: set what's in the document's head section
==========================*/

const app = {
  title: "Melike Kilic Portfolio",
  // Note : consider leaving null if you dont have any head icon
  // icon: "mel.jpg",
};

/*=====================
    2. Social Networks 
    Desc: your social network links
==========================*/

const socialNetworks = {
  //Note : if you dont need or have any social network just add null value
  github: "https://www.github.com/melkilic",
  linkden: "https://www.linkedin.com/in/melike-kilic/",
  facebook: null,
  instagram: null,
  twitter: "https://twitter.com/melikeekilic",
};

/*=====================
    3. Banner Section
    Desc: techfolio logo, greetings, summary and avatar,
==========================*/

const bannerSection = {
  username: "Melike Kilic",
  bannerHeading: "Hi, there!",
  bannerTagLine: emoji(
    "I am Melike, a recent graduate from Flatiron School and a brand-new junior developer based in Houston, TX.😀"
  ),
  //Note:Simply add you avatar image in src/assets/imgs folder
  //and add the name along with extention e.g xyz.png , abc.svg
  //Note : if you want to use default illustration instead of adding your avatar add defaultAvatar.svg
  bannerAvatar: "me-homepage.jpg",
  resumeLink:
    "https://docs.google.com/document/d/1-Y2Wlbnle-u4WTFK_7Eh7QIU1UhGS_1Fi4SROZ3YLpU/edit?usp=sharing",
};

/*=====================
    4. About Section
    Desc: It's all about you!. this section is designed using the command 
    line concept so it asked you to add the admin of the command line 
    and 2 basic commands (i recommend you to use default commands).
==========================*/

const aboutSection = {
  admin: "melkilic@melkilic",
  firstCommand: " sudo run about.exe",
  secondCommand: " executing about.exe",
  about:
    "How did everything start? Being a language-lover, I knew that languages were so powerful that they were building bridges between people of various cultures. Though, I had no idea about programming languages until very recently when I decided to develop my career in this field. After exposing myself to programming languages for a while, I did realize that programming languages were nothing less than human languages in this sense as they make communication between people and computers possible. That was when I made my mind up to make a career in tech. Linguaphile turned programmer :) ",
};

/*=====================
    5. Skils Section
    Desc: This section hep you set your skills 
==========================*/

const skillsSection = {
  // Recommended : don't add more than 3 skill taglines.
  skillsTagLines: [
    "I am efficient and highly organized. This ensures that I am as productive as possible.",
    "As a perfectionist, I like to be sure that everything is just right and that I pay attention to all the details.",
    "I enjoy solving problems, trouble-shooting issues, and finding solutions in a as short time as possible.",
  ],

  // Recommended : don't add more than 12 skills.
  // Note : go to https://fontawesome.com/icons?d=gallery > select the icon you want to show
  //        > copy its class > paste it as {fontAwesomeClassname: "fab fa-html5"} in SkillsSet

  skillsSet: [
    {
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      fontAwesomeClassname: "fab fa-js",
    },
    {
      fontAwesomeClassname: "fab fa-react",
    },
    // {
    //   fontAwesomeClassname: "fab fa-npm",
    // },
    {
      fontAwesomeClassname: "fab fa-github-square",
    },
    {
      fontAwesomeClassname: "fab fa-bootstrap",
    },
  ],
};

/*=====================
    6. Open Source Section
    Desc: This section hlep you configure your github repos section 
==========================*/
const openSourceSection = {
  education: [
    {
      educationTitle: "Flatiron School",
      educationDesc:
        " Throughout the fifteen weeks, the 9-hour-per-day immersive course, I have learned how to write/read/debug code and gained hands-on practice. The program also included pair-programming sessions and group projects where I have improved my ability to collaborate and participate in teamwork effectively.  ",
      educationDuration: "03/2020-06/2020",
      educationTags: ["Flatiron School", "Junior Web Developer", "Houston"],
    },
    {
      educationTitle: "GED",
      educationDesc:
        "When I arrived in the U.S., I didn't have a high school diploma, and I had a 2 years gap. Instead of going to school for two years, which was something I wasn't ready after everything I had been through, I took and passed all the GED tests in two months. That filled the gap.",
      educationDuration: "06/2019-08/2019",
      educationTags: ["GED Diploma", "August 2019", "San Antonio"],
    },
    {
      educationTitle: "Fleeing my country & No external education data",
      educationDesc:
        "After 10th grade, my family and I had to run away due to political reasons. We fled the country by a fisherman's boat and lived in Greece for almost two years. During my time in Greece, I couldn't go to school.",
      educationDuration: "09/2017-05/2019",
      educationTags: ["refugee", "greece", "turkey"],
    },
    {
      educationTitle: "Turk Telekom Social Sciences High School",
      educationDesc:
        "I have studied the first three years of high school, which included a year of IB Diploma Programme  (An assessed program for students aged 16 to 19. Leading universities across the globe respect it.)",
      educationDuration: "09/2014-05/2017",
      educationTags: [
        "International Baccalaureate",
        "09/2014-05/2017",
        "Ankara, Turkey",
      ],
    },
  ],
  //Note :  don't edit the githubToken
  // githubToken: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,

  // githubUserName: "melkilic",
  // //Note :  no of open source projects you want to show.
  // numberOfRepos: 6,
};

/*=====================
    7. Projects Section
    Desc: This section hlep you configure your major projects.
==========================*/

const projectsSection = {
  projects: [
    {
      projectName: "Covid TrackR",
      projectBio:
        "A real-time tracking app where you can display the overall COVID-19 information in the U.S, detailed information about the states, and view the hospital information based on the location you type.",
      projectUrl: "https://www.youtube.com/watch?v=7Sklsae1jFA&t=10s",
      projectImg: "./assets/imgs/final1.png",
      stackList: [
        "React",
        "Redux",
        "Chart",
        "Ruby on Rails",
        "Mapbox",
        "Google Maps",
      ],
    },
    {
      projectName: "Shoptastic",
      projectBio:
        "An e-commerce app for purchasing products online. View our products, search them by categories, display the store locations, save your items to the cart, and let shopping be more fun on Shoptastic!",

      projectUrl: "https://www.youtube.com/watch?v=cYX3iiiI_n8&t=1s",
      projectImg: "./assets/imgs/final.png",
      stackList: [
        "React.js",
        "Target API",
        "Ruby on Rails",
        "React Google Maps",
        "React Bootstrap",
      ],
    },
    {
      projectName: "CineMass",
      projectBio:
        "An alternative website to IMDB where you can create your profile, browse movies, find movies based on their genre, and add movies to your watchlist!",

      projectUrl: "https://www.youtube.com/watch?v=HkpFnpbXXlE",
      projectImg: "./assets/imgs/dummy-project.png",
      stackList: ["Ruby on Rails", "Vanilla JavaScript", "Bootstrap"],
    },
  ],
};

/*=====================
    8. Experience Section
    Desc: This section help you configure your experience.
==========================*/

const experienceSection = {
  experiences: [
    {
      experienceTitle: "In job search",
      experienceDesc:
        "I have graduated from Flatiron in June, and am currently looking for a position where I can contribute to the company I work for, and sharpen my coding skills every day. ",
      experienceDuration: "Current",
      experienceTags: ["Flatiron School", "Junior Web Developer"],
    },
    {
      experienceTitle: "Teacher Assistant @ Raindrop Foundation",
      experienceDesc:
        "I had the privilege of working for Raindrop Foundation in a teacher assistant/volunteer role in my free time, where I learned valuable skillssuch as instructional techniques, lesson planning and grading.",
      experienceDuration: "06/2019-03/2020",
      experienceTags: [
        "Raindrop Foundation",
        "06/2019-03/2020",
        "Teacher Assistant",
      ],
    },
  ],
};

/*=====================
    9. Contact Section
    Desc: This section help you configure your contact.
==========================*/

const contactSection = {
  contactTagline: "You can reach me here:",
  // Note : add your all contacts in the contactList seperating with *,* .
  contactList: ["(832) 324-2374", "mk.melikekilic@gmail.com"],
};

// Bingo :))

export {
  app,
  socialNetworks,
  bannerSection,
  aboutSection,
  skillsSection,
  openSourceSection,
  projectsSection,
  experienceSection,
  contactSection,
};
