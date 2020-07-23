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
  title: "AbdulQadir Portfolio",
  // Note : consider leaving null if you dont have any head icon
  icon: "ayin_qoph.png",
  description: "An ordinary karachitte Web Developer, Mobile Shutterbug, and Writer.",
};

/*=====================
    2. Social Networks 
    Desc: your social network links
==========================*/

const socialNetworks = {
  //Note : if you dont need or have any social network just add null value
  github: "https://github.com/AQadir64",
  linkden: null,
  facebook: "https://www.facebook.com/profile.php?id=100006896625330",
  instagram: "https://www.instagram.com/_ayin_qoph/",
  twitter: null,
};

/*=====================
    3. Banner Section
    Desc: techfolio logo, greetings, summary and avatar,
==========================*/

const bannerSection = {
  username: "Abdul Qadir",
  bannerHeading: "Marhabaan.",
  bannerTagLine: emoji(
    "An ordinary karachitte Web Developer, Mobile Shutterbug, and Writer 😀 Who loves to play with different stacks and love to give breath to Ui/Ux designs."
  ),
  //Note:Simply add you avatar image in src/assets/imgs folder 
  //and add the name along with extention e.g xyz.png , abc.svg
  //Note : if you want to use default illustration instead of adding your avatar add defaultAvatar.svg
  bannerAvatar: "avatar.jpeg",
  resumeLink:
    "https://drive.google.com/file/d/1C9wylYtAU9NbZaBwmQ6uGmNWmWS8_I6F/view?usp=sharing",
};

/*=====================
    4. About Section
    Desc: It's all about you!. this section is designed using the command 
    line concept so it asked you to add the admin of the command line 
    and 2 basic commands (i recommend you to use default commands).
==========================*/

const aboutSection = {
  admin: "ayin_qoph@ayin_qoph",
  firstCommand: " sudo run about.exe",
  secondCommand: " executing about.exe",
  about:
    "Computer Science Student and Full Stack Developer. Passionate about solving problems that will benefit others in the area of IT or in real life. from haven't think about computer science and then picking it as a carrier back in 2017 I have discovered a lot in this system. But outside it, I'm just an ordinary karachitte man who loves to do mobile photography and write thoughts.",
};

/*=====================
    5. Skils Section
    Desc: This section hep you set your skills 
==========================*/

const skillsSection = {
  // Recommended : don't add more than 3 skill taglines.
  skillsTagLines: [
    "Excitable towards giving breath to different mockup PSDs and web designs using Html / Css and Scss.",
    "Love to Build Scalable web and native application using React with the several stacks, packages, and services.",
    "Also Passionate towards other stuff like WordPress development, python scripting, and Dev-Ops.",
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
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      fontAwesomeClassname: "fab fa-js",
    },
    {
      fontAwesomeClassname: "fab fa-react",
    },
    {
      fontAwesomeClassname: "fab fa-node",
    },
    {
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      fontAwesomeClassname: "fab fa-wordpress",
    },
    {
      fontAwesomeClassname: "fab fa-python",
    },
    {
      fontAwesomeClassname: "fab fa-linux",
    },
    {
      fontAwesomeClassname: "fab fa-docker",
    },
  ],
};

/*=====================
    6. Open Source Section
    Desc: This section hlep you configure your github repos section 
==========================*/
const openSourceSection = {
  
  //Note :  don't edit the githubToken
  githubToken: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,

  githubUserName: "AQadir64",
  //Note :  no of open source projects you want to show.
  numberOfRepos: 6,
};

/*=====================
    7. Projects Section
    Desc: This section hlep you configure your major projects.
==========================*/

const projectsSection = {
  projects: [
    {
      projectName: "BubuSoft",
      projectBio:
        "DREAM BIG, ACT NOW ––– is the new motto. BabuSoft a bird’s eye view of the tech industry for all the novel ideas that you can turn into reality",

      projectUrl: "https://babusoft.netlify.app/",
      stackList: ["React", "Ant Design", "Sass", "Device Detect"],
    },
    {
      projectName: "E-Trans Pakistan",
      projectBio:
        "E-Trans Pakistan emerge as first in its class within the city of Karachi in Sindh, offering chauffeur-driven services.",

      projectUrl: "https://etranspakistan.com/",
      stackList: ["Wordpress", "plugins", "css"],
    },
    {
      projectName: "Covid-19 Tracker",
      projectBio:
        "Covid-19 is an real-time web application which give real-time update about the corono-virus cases in the world build on ReactJs",

      projectUrl: "https://orthocovid-19.netlify.app/",
      stackList: ["React", "Ant Design", "Sass", "AmCharts", "GeoData"],
    },

    {
      projectName: "Cheating Detector",
      projectBio:
        "Cheating Detector Desktop app checks the similarity b/w different PDFs,documents ,images and text",

      projectUrl: "/",
      stackList: ["Electron", "Python", "Open Cv", "OCR", "Flask"],
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
      experienceTitle: "React Boot Camper",
      experienceDesc:
        "Successfully learned to React from 0%. Developed and Implement different React projects in the group. Improved communication skills while interacting with people of a different caliber.",
      // Recommended : don't add full date.
      experienceDuration: "12/18-05/19",
      // Recommended : don't add more than 3 tags.
      experienceTags: ["Panacloud", "5 months", "karachi"],
    },
    {
      experienceTitle: "Wordpress Intern",
      experienceDesc:
        "Improved remotely managing skills by giving 20+ hours per week. Expanded knowledge of creating static and responsive sites using WordPress.",
      experienceDuration: "10/19-11/19",
      experienceTags: ["Interns Pk", "1.5 month", "Remote"],
    },
    {
      experienceTitle: "Competition Manager",
      experienceDesc:
        "Manages the competition team and Ensures everyone is satisfied. Design and develop innovative competition for ITEC and reexamines it.",
      experienceDuration: "Current",
      experienceTags: ["ACM", "12/2018-5/2019", "NEDUET"],
    },
  ],
};

/*=====================
    9. Contact Section
    Desc: This section help you configure your contact.
==========================*/

const contactSection = {
  contactTagline:
    "Hey Folks, Love to see you sliding here, Y'all can reach me.",
  // Note : add your all contacts in the contactList seperating with *,* .
  contactList: ["03461826315", "a.qadir67@outlook.com"],
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
