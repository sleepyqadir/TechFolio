<h1 align="center">
  <br>
  <a href=""><img src="https://user-images.githubusercontent.com/38910854/87874801-3d84dd00-c9e6-11ea-8b47-0f0106227fb4.png" alt="ArminC AutoExec"></a>
</h1>
<h3 align="center">An Open Sourced Creative Portfolio for Developer and Tech Geeks</h3>
<p align="center">
  <img src="https://forthebadge.com/images/badges/made-with-javascript.svg">
  <img src="https://forthebadge.com/images/badges/built-with-love.svg">
  <img src="https://forthebadge.com/images/badges/makes-people-smile.svg">
</p>
<p align="center">
  <a href="#overview">Over View</a> •
  <a href="#features">Features</a> •
  <a href="#gettingStarted">Getting Started</a> •
  <a href="#installation">Installation</a> •
  <a href="#configuration">Configuration</a> •
  <a href="#deployment">Deployment</a> •
  <a href="#techUsed">Tech Used</a> •
  <a href="#author">Author</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a>
</p>

---

<h1 id="overview">Over View :</h1>
<p>TechFolio is an open-source portfolio for the developer and other geeks to make their artistic and infinite scroll portfolio in just 5 mins and some basic steps from configuration to deployment.</p>
<p>Feel free to open an issue on any kind of bug or glitches you find in the project and to make it better don't hesitate to contribute.</p>
<p>Yes you can contribute to project by adding more features, I'm waiting for your pull request.</p>
<h2 align="center"> <a href="http://abdulqadir.surge.sh/"> Preview </a></h2>

<h1 id="features">Features :</h1>
<p>:large_blue_diamond: Summary and Avatar<br>
:large_blue_diamond: Social Links<br>
:large_blue_diamond: About Me<br>
:large_blue_diamond: Skills Set<br>
:large_blue_diamond: Open-source Projects (connected with github)<br>
:large_blue_diamond: Major Projects<br>
:large_blue_diamond: Experience Timeline<br>
:large_blue_diamond: Contact Me</p>
<p>:wrench: more to come</p>


<h1 id="gettingStarted">Getting Started :</h1>
<p>An overview of TechFolio how to download and run it on your local machine and then configure it for deployment or development.</p>
<p>You are gonna need <a href="">git</a> and <a href="">node-Js</a> installed on your local machine.</p>

**Pre requires:**
```ruby
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
```

<h1 id="installation">Installation :</h1>
<p> All you need to do is to run 4 simple commands in the command line or terminal in the directory where you want to set up it :heart_eyes: </p>

```ruby
# Clone this repository
$ git clone https://github.com/AQadir64/TechFolio.git

# Go into the repository
$ cd techfolio

# Install project dependencies
$ npm install

#Start's development server
$ npm start
```

**Bingo :tada:**

<h1 id="configuration">Configuration :</h1>
<p>
  <a href="#githubSetup">Github Setup</a> • <br>
  <a href="#configFile">Config File</a> •
</p>
<h3>Setting Up Github For Your Open Source Projects:</h3>
<p>Generate a Github personal access token using these <a href="https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token">Instructions</a> Make sure you don't select any scope just generate a simple token </p>
<p>1. Now you need to convert that github accesshttps://docs.github.com/en/enterprise/2.13/user/articles/pinning-items-to-your-profile token to base-64 string for security don't worry its just like eating a piece of cake. go to <a href="https://www.base64encode.org/">Base64 Decode and Encode</a> copy your access code in the box and select the destination character set to ascii and hit the encode green button Bingo :tada: (see the example below)</p> 
<p align="center"><img src="https://user-images.githubusercontent.com/38910854/87902564-62736180-ca73-11ea-9b13-949228bb6409.png" width="600"/> </p>
<p>2. Now create a .env file in the root directory of the project. env file lets you customize your working environment variables. </p>

```ruby

- TechFolio
  - node_modules
  - public
  - src
  - .env         <-- create it here
  - .gitignore
  - package-lock.json
  - package.json
  
```
<p>2.1 In .env file, add key REACT_APP_GITHUB_TOKEN and set in to your github token like this.</p>

```ruby
 // .env

  REACT_APP_GITHUB_TOKEN = "YOUR GITHUB TOKEN HERE" //make sure you have set you base64 converted token.
  
```
<p>Note: Open Source Projects section only show pinned items of your Github. If you haven't pinned your github repos, please follow this <a href="https://docs.github.com/en/enterprise/2.13/user/articles/pinning-items-to-your-profile">Instructions.</a></p>

<h3>Changing Config file:</h3>
<p>You are just one step away from making your techfolio </p>

<p> Shift to <b> > /src/techfolio.js </b> and modify the config as per your need. Make sure you read the notes before each section they will assist you out in make configuration simple for you. </p>

```java

/* 1. Main App */
/* 2. Social Networks */
/* 3. Banner Section  */
/* 4. About Section  */
/* 5. Skills Section */
/* 6. Open Source Section  */
/* 7. Projects Section */
/* 8. Experience Section */
/* 9. Contact Section */

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

const bannerSection = { ..... }

const aboutSection = { ...... }

const skillsSection = { ..... }

const openSourceSection = { .... }

const projectsSection = { ...... }

const experienceSection = { .... }

const contactSection = {......}

```
<h1 id="deployment">Deployment :</h1>
<p> Now All you need to do is to deploy your TechFolio and here are some options to deploy it :smirk: :smirk: </p>

<p> <b>The step below is important! <br> If you skip it, your app will not deploy correctly. </br></p>
<p>Open your package.json and add a homepage field for your project: </p>

```ruby

"homepage": "https://myusername.github.io", // edit my "https://aqadir64.github.io" with your username

````

<p>
  <a href="surge">Surge </a>  • <br>
  <a href="#githubPages">Github Pages</a> • <br>
  <a href="#netlify">Netlify</a> •
</p>

<h3 id="githubPages">Deployment to Surge </h3>
<p> This is one of the easiest ways to deploy your techfolio and i recommend you to read the official documentation of deploying react app on <a href="https://create-react-app.dev/docs/deployment/#surge">surge</a> but Don't worry i'll guide you step by step how you gonna do it </p>

<p><b>1</b> : Build your techflio by running <b>npm run build</b> in your project directory </p>
<p><b>2</b> : Install the Surge CLI if you haven’t already by running <b>npm install -g surge. </b> </p>
<p><b>3</b> : Run the <b>surge</b> command and log in you or create a new account.</p>
<p><b>4</b> : When asked about the project path, make sure to specify the build folder, for example: </p>

```ruby
project path: /path/to/project/build
```
<p><b>5</b> : Last it will ask you about domain name enter it e.g <b>yourname.surge.sh <b> </p>

**Bingo :tada:**


