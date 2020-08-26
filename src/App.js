/** @format */

import React from "react";
import "./app.css";
import { Row, Col } from "react-flexbox-grid";
import About from "./Components/About/About";
import Skills from "./Components/Skill/Skills";
import Github from "./Components/Github/Github";
import Header from "./Components/Layout/Header";
import Banner from "./Components/Layout/Banner/Banner";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Layout/Footer";
import SideNav from "./Components/Layout/Navbar/SideNav";
import { ScrollProvider } from "./Context/scroll";
import { isMobile } from "react-device-detect";
import Darkmode from "darkmode-js";
function App() {
  // const options = {
  //   bottom: "32px", // default: '32px'
  //   right: "32px", // default: '32px'
  //   left: "unset", // default: 'unset'
  //   time: "0.5s", // default: '0.3s'
  //   mixColor: "#fff", // default: '#fff'
  //   backgroundColor: "#776d8a", // default: '#fff'
  //   buttonColorDark: "#100f2c", // default: '#100f2c'
  //   buttonColorLight: "#fff", // default: '#fff'
  //   saveInCookies: false, // default: true,
  //   label: "Dark Side🌓", // default: ''
  //   autoMatchOsTheme: true, // default: true
  // };
  // const darkmode = new Darkmode(options);
  // darkmode.showWidget();
  return (
    <ScrollProvider>
      <div className="wrapper">
        <Header />
        <Row>
          {!isMobile && (
            <Col lg={2}>
              <SideNav />
            </Col>
          )}
          <Col lg={10} xs={12}>
            <Banner />
            <About />
            <Skills />
            <Github />
            <Projects />
            <Experience />
            <Contact />
          </Col>
        </Row>
        {/* <Footer /> */}
      </div>
    </ScrollProvider>
  );
}

export default App;
