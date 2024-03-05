import React from 'react'
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Projects } from './components/projects/Projects';
import { Experience } from './components/Experience/Experience';





function App() {
  return (
    <div className={styles.App}>
    <Navbar />
     <Hero />
    <About />
    <Experience/>
    <Projects />
    
   
  </div>
  )
}

export default App
