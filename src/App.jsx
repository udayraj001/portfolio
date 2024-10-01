import React from "react";
import "./App.css";
import Skills from "./skills";
// Assuming Navbar is the Right component
import Header from "./Header";
import Experience from "./Experience";
import Work from "./Work";
import Navbar from "./Navbar";
import Contact from "./footer";

function App() {
  return (
    <>
      <div className="w-full">
        <Navbar />
        <section id="about">
          <Header />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="work">
          <Work />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;

// https://drive.google.com/drive/folders/1GLFGK45zfXvmDqmMW_b0Tz7nNytNDeQt?usp=drive_link
