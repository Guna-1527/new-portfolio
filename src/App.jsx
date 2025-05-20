import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Skill from "./pages/Skill";
import CursorGlow from "./components/CursorGlow";

const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Skill />
      <Work />
      <Contact />
      <CursorGlow />
      <ScrollToTop />
    </div>
  );
};

export default App;
