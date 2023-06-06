import React from "react";
import TitleSection from "./TitleSection";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";


function App(){
    return(
        <div>
        <TitleSection />
        <AboutMe />
        <Projects />
        <Education />
        <Contact />
        <Footer />
        </div>
    )
}

export default App;