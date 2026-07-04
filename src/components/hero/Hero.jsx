import React, { useState, useEffect } from "react";
import "./Hero.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      src: "https://cdn.dribbble.com/userupload/46355808/file/f2274fc9ca13235e117b03ebf82f2320.jpg",
      alt: "BTR Subscriber Students with Dr. Zainab Vora",
    },
    {
      src: "https://cdn.dribbble.com/userupload/46295962/file/3f356f62229b14733e4bee0c87aef9c2.webp",
      alt: "BTR Subscriber Students with Dr. Zainab Vora",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);

  const tl = gsap.timeline();

  useGSAP(() => {
    tl.from(".hero-heading", {
      x: 0,
      duration: 0.5,
      delay: 0.5,
      opacity: 0,
      ease: "power1.in",
    });

    tl.from(".hero-sub-heading", {
      x: 0,
      duration: 0.5,
      opacity: 0,
      ease: "power1.in",
    });

    tl.from(".hero-para", {
      x: 0,
      duration: 0.5,
      opacity: 0,
      ease: "power1.in",
    });
  });

  return (
    <div>
      <section className="btr-header">
        {/* Background Images */}
        <div className="hero-background-images">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`hero-background-image ${
                currentImage === index ? "active" : ""
              }`}
              loading="lazy"
            />
          ))}
        </div>

        {/* Overlay */}
        <div className="hero-overlay"></div>

        {/* Content */}
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-heading">
              <span>Welcome to</span> <br /> Vidya Jeevan
            </h1>
            <h2 className="hero-sub-heading">The Experience Centre</h2>
            <p className="hero-para">
              A Place That Feels Like Home. <br />
              A next-gen learning centre designed with only one thing in mind:
              YOU - the student. <br />
              Whether you’re preparing for competitive exams or building
              lifelong discipline, we give you the tools, the space, and the
              inspiration to grow in every way.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
