import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Events.css";

gsap.registerPlugin(ScrollTrigger);

function Events() {
  const containerRef = useRef(null);
  const trackOneRef = useRef(null);

  const images = [
    "https://conceptualorthopedics.com/wp-content/uploads/2026/06/CO-PG.webp",
    "https://conceptualorthopedics.com/wp-content/uploads/2026/06/CO-Trauma-FOundation.webp",
    "https://conceptualorthopedics.com/wp-content/uploads/2026/06/Pinnacle-course.webp",
    "https://conceptualorthopedics.com/wp-content/uploads/2026/06/DNB-OSCE-COURSE.webp",
    "https://conceptualorthopedics.com/wp-content/uploads/2026/06/01-6.webp",
    "https://conceptualorthopedics.com/wp-content/uploads/2026/06/CORA-1.webp",
    "https://conceptualorthopedics.com/wp-content/uploads/2026/06/CO-HAND-MICROSURGICAL-SKILLS.webp",
    "https://conceptualorthopedics.com/wp-content/uploads/2026/06/01-8.webp",
  ];

  const carouselImages = [...images, ...images];

  const upcomingEvents = [
    {
      id: 1,
      image:
        "https://conceptualorthopedics.com/wp-content/uploads/2026/06/CO-PG.webp",
      date: "12 Jul",
      title: "DNB/OSCE Mock Exam",
    },
    {
      id: 2,
      image:
        "https://conceptualorthopedics.com/wp-content/uploads/2026/06/CO-Trauma-FOundation.webp",
      date: "20 Jul",
      title: "CORA Offline Workshop",
    },
    {
      id: 3,
      image:
        "https://conceptualorthopedics.com/wp-content/uploads/2026/06/Pinnacle-course.webp",
      date: "02 Aug",
      title: "CRISP Bootcamp",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trackOne = trackOneRef.current;

      gsap.set(trackOne, { xPercent: 0 });

      const tweenOne = gsap.to(trackOne, {
        xPercent: -50,
        duration: 30,
        ease: "none",
        repeat: -1,
      });

      tweenOne.pause();

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        onEnter: () => tweenOne.play(),
        onLeave: () => tweenOne.pause(),
        onEnterBack: () => tweenOne.play(),
        onLeaveBack: () => tweenOne.pause(),
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="events-container" ref={containerRef}>
      <div className="events-head">
        <h2 className="events-heading">Learn Online or Offline</h2>
        <h3 className="events-label">Hybrid Training Hub</h3>
      </div>

      <div className="events-carousel-track-wrapper">
        <div
          className="events-carousel-track events-carousel-track-one"
          ref={trackOneRef}
        >
          {carouselImages.map((img, index) => (
            <div className="events-carousel-item" key={`row1-${index}`}>
              <img
                className="events-carousel-image"
                src={img}
                alt={`event ${index}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="events-upcoming">
        <h3 className="events-upcoming-heading">Upcoming Events</h3>
        <div className="events-upcoming-grid">
          {upcomingEvents.map((event) => (
            <div className="events-upcoming-card" key={event.id}>
              <div className="events-upcoming-image-wrapper">
                <img
                  className="events-upcoming-image"
                  src={event.image}
                  alt={event.title}
                />
                <span className="events-upcoming-date">{event.date}</span>
              </div>
              <h4 className="events-upcoming-title">{event.title}</h4>
              <p className="events-upcoming-venue">{event.venue}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;
