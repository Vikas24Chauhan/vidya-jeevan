import React from "react";
import Hero from "../components/hero/Hero";
import Marquee from "../components/marquee/Marquee";
import Mentor from "../components/mentor/Mentor";
import Facilities from "../components/facilities/Facilities";
import Events from "../components/events/Events";
import ScrollReveal from "../components/scrollReveal/ScrollReveal";
import Feedback from "../components/feedback/Feedback";

function HomePage() {
  return (
    <div>
      <Hero />
      <Marquee />
      <Mentor />
      <Facilities />
      <Events />
      <ScrollReveal />
      <Feedback />
    </div>
  );
}

export default HomePage;
