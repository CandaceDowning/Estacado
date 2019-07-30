import React from "react";
import "./App.scss";
import Landing from "./Components/Landing/Landing";
import NavBar from "./Components/NavBar/NavBar";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Media from "./Components/Media/Media";
import Events from "./Components/Events/Events";

function App() {
  return (
    <div id='App'>
      <Landing />
      <NavBar />
      <About />
      <Contact />
      <Media />
      <Events />
    </div>
  );
}

export default App;
