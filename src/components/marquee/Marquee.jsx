import React, { useEffect, useRef } from "react";
import "./Marquee.css";
import gsap from "gsap";

function Marquee() {
  const marqueeRef = useRef();

  useEffect(() => {
    const tween = gsap.to(marqueeRef.current, {
      xPercent: -50,
      duration: 15,
      repeat: -1,
      ease: "none",
    });

    const handleWheel = (e) => {
      if (e.deltaY > 0) {
        tween.timeScale(1);
      } else {
        tween.timeScale(-1);
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      tween.kill();
    };
  }, []);

  return (
    <section className="marquee-container">
      <div className="marquee-track" ref={marqueeRef}>
        <div className="marquee-line">
          <img
            src="https://vidyajeevan.com/wp-content/uploads/2026/04/corebtr.webp"
            alt=""
          />
        </div>

        <div className="marquee-line">
          <img
            src="https://vidyajeevan.com/wp-content/uploads/2026/04/ec.png"
            alt=""
          />
        </div>

        <div className="marquee-line">
          <img
            src="https://vidyajeevan.com/wp-content/uploads/2026/04/co.png"
            alt=""
          />
        </div>

        <div className="marquee-line">
          <img
            src="https://vidyajeevan.com/wp-content/uploads/2026/04/cs.png"
            alt=""
          />
        </div>

        {/* DUPLICATE SET */}
        <div className="marquee-line">
          <img
            src="https://vidyajeevan.com/wp-content/uploads/2026/04/ca.png"
            alt=""
          />
        </div>

        <div className="marquee-line">
          <img
            src="https://vidyajeevan.com/wp-content/uploads/2026/04/cr.png"
            alt=""
          />
        </div>

        <div className="marquee-line">
          <img
            src="https://vidyajeevan.com/wp-content/uploads/2026/04/cobg.png"
            alt=""
          />
        </div>

        <div className="marquee-line">
          <img
            src="https://vidyajeevan.com/wp-content/uploads/2026/04/cm.png"
            alt=""
          />
        </div>

        <div className="marquee-line">
          <img
            src="https://vidyajeevan.com/wp-content/uploads/2026/04/cp.png"
            alt=""
          />
        </div>

        <div className="marquee-line">
          <img
            src="https://vidyajeevan.com/wp-content/uploads/2026/04/corebtr.webp"
            alt=""
          />
        </div>

        <div className="marquee-line">
          <img
            src="https://vidyajeevan.com/wp-content/uploads/2026/04/ec.png"
            alt=""
          />
        </div>

        <div className="marquee-line">
          <img
            src="https://vidyajeevan.com/wp-content/uploads/2026/04/co.png"
            alt=""
          />
        </div>

        <div className="marquee-line">
          <img
            src="https://vidyajeevan.com/wp-content/uploads/2026/04/cs.png"
            alt=""
          />
        </div>

        {/* DUPLICATE SET */}
        <div className="marquee-line">
          <img
            src="https://vidyajeevan.com/wp-content/uploads/2026/04/ca.png"
            alt=""
          />
        </div>

        <div className="marquee-line">
          <img
            src="https://vidyajeevan.com/wp-content/uploads/2026/04/cr.png"
            alt=""
          />
        </div>

        <div className="marquee-line">
          <img
            src="https://vidyajeevan.com/wp-content/uploads/2026/04/cobg.png"
            alt=""
          />
        </div>

        <div className="marquee-line">
          <img
            src="https://vidyajeevan.com/wp-content/uploads/2026/04/cm.png"
            alt=""
          />
        </div>

        <div className="marquee-line">
          <img
            src="https://vidyajeevan.com/wp-content/uploads/2026/04/cp.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Marquee;
