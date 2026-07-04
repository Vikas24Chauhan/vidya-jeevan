import { useState } from "react";
import "./App.css";
import Hero from "./components/hero/Hero";
import Marquee from "./components/marquee/Marquee";
import Mentor from "./components/mentor/Mentor";
import Facilities from "./components/facilities/Facilities";
import Events from "./components/events/Events";
import ScrollReveal from "./components/scrollReveal/ScrollReveal";
import Feedback from "./components/feedback/Feedback";

function App() {
  return (
    <>
      <Hero />
      <Marquee />
      <Mentor />
      <Facilities />
      <Events />
      <ScrollReveal />
      <Feedback />
    </>
  );
}

export default App;
