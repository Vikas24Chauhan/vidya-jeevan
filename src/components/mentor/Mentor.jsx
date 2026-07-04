import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Mentor.css";

gsap.registerPlugin(ScrollTrigger);

function Mentor() {
  const containerRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  useLayoutEffect(() => {
    if (window.innerWidth < 769) return;

    const c1 = card1Ref.current;
    const c2 = card2Ref.current;
    const c3 = card3Ref.current;

    const r1 = c1.getBoundingClientRect();
    const r2 = c2.getBoundingClientRect();
    const r3 = c3.getBoundingClientRect();

    const c1OffsetX = r2.left - r1.left;
    const c3OffsetX = r2.left - r3.left;

    const ctx = gsap.context(() => {
      gsap.set(c1, {
        x: c1OffsetX,
        rotation: -10,
        scale: 0.9,
        zIndex: 1,
        transformOrigin: "50% 100%",
      });
      gsap.set(c2, {
        x: 0,
        rotation: 3,
        scale: 0.95,
        zIndex: 2,
        transformOrigin: "50% 100%",
      });
      gsap.set(c3, {
        x: c3OffsetX,
        rotation: 8,
        scale: 1,
        zIndex: 3,
        transformOrigin: "50% 100%",
      });

      const tl = gsap.timeline();

      tl.to(
        c1,
        { x: 0, rotation: 0, scale: 1, duration: 1, ease: "power2.out" },
        0,
      )
        .to(
          c2,
          { x: 0, rotation: 0, scale: 1, duration: 1, ease: "power2.out" },
          0,
        )
        .to(
          c3,
          { x: 0, rotation: 0, scale: 1, duration: 1, ease: "power2.out" },
          0,
        )
        .to(
          c1,
          {
            x: c1OffsetX,
            rotation: -10,
            scale: 0.9,
            duration: 1,
            ease: "power2.in",
          },
          1,
        )
        .to(
          c2,
          { x: 0, rotation: 3, scale: 0.95, duration: 1, ease: "power2.in" },
          1,
        )
        .to(
          c3,
          {
            x: c3OffsetX,
            rotation: 8,
            scale: 1,
            duration: 1,
            ease: "power2.in",
          },
          1,
        );

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 60%",
        end: "bottom 30%",
        scrub: 1.5,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="mentor-container" ref={containerRef}>
      <div className="mentor-head">
        <h2 className="mentor-heading">Meet Your Mentors</h2>
        <h3 className="mentor-label">The Minds Behind Your Growth</h3>
        <p className="mentor-para">
          Get to know the passionate experts who will guide you every step of
          the way. Our mentors are industry leaders, educators, and innovators
          dedicated to helping you succeed. With years of hands-on experience
          and a deep commitment to your development, they’re here not just to
          teach-but to inspire, challenge, and elevate your journey.
        </p>
      </div>

      <div className="mentor-cards">
        <div className="mentor-card card1" ref={card1Ref}>
          <img
            src="https://cdn.prod.website-files.com/66f2dc5876d99804a6fe5f6a/696dbd1c6df3fbd4f6beb1ad_Screenshot%202026-01-19%20at%201.28.59%E2%80%AFpm-2.jpg"
            alt=""
          />

          <div className="mentor-content">
            <h3>John Anderson</h3>
            <p>UI/UX Mentor</p>
          </div>
        </div>

        <div className="mentor-card card2" ref={card2Ref}>
          <img
            src="https://cdn.prod.website-files.com/66f2dc5876d99804a6fe5f6a/696dbd1c6df3fbd4f6beb1ad_Screenshot%202026-01-19%20at%201.28.59%E2%80%AFpm-2.jpg"
            alt=""
          />

          <div className="mentor-content">
            <h3>Sarah Williams</h3>
            <p>Frontend Developer</p>
          </div>
        </div>

        <div className="mentor-card card3" ref={card3Ref}>
          <img
            src="https://cdn.prod.website-files.com/66f2dc5876d99804a6fe5f6a/696dbd1c6df3fbd4f6beb1ad_Screenshot%202026-01-19%20at%201.28.59%E2%80%AFpm-2.jpg"
            alt=""
          />

          <div className="mentor-content">
            <h3>Michael Brown</h3>
            <p>Creative Director</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mentor;
