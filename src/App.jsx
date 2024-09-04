import { useState } from "react";
import "./App.css";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contacts/Contact";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  const [toggleTheme, setToggleTheme] = useState(false)



  return (
    <>
      <Navbar toggleTheme={toggleTheme} />
      <Banner />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Sidebar />
    </>
  );
};

export default App;
