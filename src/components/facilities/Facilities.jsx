import React, { useEffect, useRef } from "react";
import "./Facilities.css";

function Facilities() {
  const cardsContainerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const initializeScrollEffects = () => {
      const cardsContainer = cardsContainerRef.current;
      const cards = cardsRef.current;

      if (!cardsContainer || cards.length === 0) return;

      cardsContainer.style.setProperty(
        "--cards-count",
        cards.length.toString(),
      );
      cardsContainer.style.setProperty(
        "--card-height",
        `${cards[0].clientHeight}px`,
      );

      cards.forEach((card, index) => {
        if (!card) return;

        const offsetTop = 20 + index * 20;
        card.style.paddingTop = `${offsetTop}px`;

        if (index === cards.length - 1) return;

        const toScale = 1 - (cards.length - 1 - index) * 0.1;
        const nextCard = cards[index + 1];
        const cardInner = card.querySelector(".card-inner");

        if (!nextCard || !cardInner) return;

        const handleScroll = () => {
          const nextCardRect = nextCard.getBoundingClientRect();
          const containerRect = cardsContainer.getBoundingClientRect();

          const cardHeight = card.clientHeight;
          const windowHeight = window.innerHeight;

          const offsetTopPx = offsetTop;
          const offsetBottom = windowHeight - cardHeight;

          const elementTop = nextCardRect.top - containerRect.top;
          const elementBottom = nextCardRect.bottom - containerRect.top;

          const start = offsetTopPx;
          const end = offsetBottom;

          let percentageY = 0;

          if (elementTop <= start) {
            percentageY = 100;
          } else if (elementBottom >= end) {
            percentageY = 0;
          } else {
            percentageY =
              ((start - elementTop) /
                (end - start - elementTop + elementBottom)) *
              100;
            percentageY = Math.max(0, Math.min(100, percentageY));
          }

          const scale = valueAtPercentage({
            from: 1,
            to: toScale,
            percentage: percentageY,
          });

          const brightness = valueAtPercentage({
            from: 1,
            to: 0.6,
            percentage: percentageY,
          });

          cardInner.style.transform = `scale(${scale})`;
          cardInner.style.filter = `brightness(${brightness})`;
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        return () => {
          window.removeEventListener("scroll", handleScroll);
          window.removeEventListener("resize", handleScroll);
        };
      });
    };

    const valueAtPercentage = ({ from, to, percentage }) => {
      return from + (to - from) * (percentage / 100);
    };

    const cleanupFunctions = initializeScrollEffects();

    return () => {
      if (cleanupFunctions) {
        cleanupFunctions.forEach((cleanup) => cleanup && cleanup());
      }
    };
  }, []);

  const addToCardsRef = (el, index) => {
    cardsRef.current[index] = el;
  };

  const cardData = [
    {
      id: 1,
      image:
        "https://vidyajeevan.com/wp-content/uploads/2026/04/Collage-1-5.webp",
      alt: "beautiful campus",
      title: "Beautiful Campus",
      sub_title: "Calm, Green Campus for Focused Learning",
      desc: "At Vidya Jeevan, we believe learning is not limited to textbooks - it's an experience that shapes your mindset, confidence, and future. </br> We are a student-first learning centre that offers structured guidance for competitive exams along with life-oriented mentorship. Whether it's preparing for the next big test or understanding the 'why' behind what you're learning - we're here to make sure your journey is deep, empowering, and truly impactful. </br>Our name says it all: </br>Vidya - Knowledge Jeevan - Life Because we don't just teach, we prepare you for life.",
    },
    {
      id: 2,
      image:
        "https://vidyajeevan.com/wp-content/uploads/2026/04/Collage-1.webp",
      alt: "sabr auditorium",
      title: "SABR Auditorium",
      sub_title:
        "CO PG, Pinnacle Trauma Foundation, DNB/OSCE, Hand & Microsurgical, CORA and CRISP offline course",
      desc: "Our SABR Auditorium is designed to host high-impact academic sessions, workshops, and premium offline courses tailored for serious aspirants.</br> From CO PG, Pinnacle Trauma Foundation, DNB/OSCE preparation, Hand & Microsurgical training, CORA, to CRISP programs, this space brings together top educators and focused learners under one roof. </br> It's not just a hall - it's where concepts become clarity, and preparation turns into performance.",
    },
    {
      id: 3,
      image:
        "https://vidyajeevan.com/wp-content/uploads/2026/04/Collage-1-1.webp",
      alt: "cbt room",
      title: "CBT Room",
      sub_title: "Real Practice Zone for DNB exams",
      desc: "Step into a simulation of the actual exam environment. Our CBT Room is built to replicate the real DNB exam interface and conditions. </br>This allows aspirants to practice in a pressure-controlled setting, improve time management, and eliminate exam-day anxiety. Because success isn't just about knowledge - it's about how well you perform when it matters most.",
    },
    {
      id: 4,
      image:
        "https://vidyajeevan.com/wp-content/uploads/2026/04/Collage-1-2.webp",
      alt: "dedicated library cubicles & personal workstations",
      title: "Dedicated Library Cubicles & Personal Workstations",
      sub_title: "For Focused Self Studies",
      desc: "Every serious aspirant needs a distraction-free space - and that's exactly what we provide. </br>Our dedicated cubicles and personal workstations are designed for deep focus, long study hours, and consistent productivity.</br>Whether you're revising high-yield topics or solving MCQs, this is your personal zone to stay disciplined, consistent, and ahead.",
    },
    {
      id: 5,
      image:
        "https://vidyajeevan.com/wp-content/uploads/2026/04/Collage-1-3.webp",
      alt: "cafeteria (not just chole bhature)",
      title: "Cafeteria (Not Just Chole Bhature)",
      sub_title: "Healthy, Hygienic Meals to Fuel long Study Hours",
      desc: "Preparation demands energy - and we make sure you get the right kind.</br>Our cafeteria goes beyond typical snacks, offering balanced, hygienic, and nutritious meals that keep you active and focused throughout the day.</br>Because a healthy body supports a sharp mind.",
    },
    {
      id: 6,
      image:
        "https://vidyajeevan.com/wp-content/uploads/2026/04/Collage-1-4.webp",
      alt: "cafe tikdda",
      title: "Cafe TIKDDA",
      sub_title: "Refreshment & Chill Zone for Relaxed Breaks",
      desc: "Every intense study session needs a refreshing pause. Cafe TIKDDA is your go-to space to unwind, recharge, and connect.</br>Whether it’s a quick coffee, a light snack, or a casual conversation - this space helps you reset without losing momentum.",
    },
    {
      id: 7,
      image:
        "https://vidyajeevan.com/wp-content/uploads/2026/04/Collage-1-2.webp",
      alt: "B&CO",
      title: "B&CO",
      sub_title: "A Refreshing Open Cafe with Hygienic & Nourishing Food",
      desc: "B&CO offers an open, vibrant café experience where fresh air meets fresh food.</br>With a focus on hygiene, quality, and taste, it’s the perfect spot to relax between study sessions while enjoying nourishing meals. Because the right environment can refresh your mind just as much as good food fuels your body.",
    },
  ];

  return (
    <div className="facilities-container">
      <div className="facilities-head">
        <h2 className="facilities-heading">Learn Online or Offline</h2>
        <h3 className="facilities-label">Hybrid Training Hub</h3>
        <p className="facilities-para">
          Your One-Stop Destination for Intensive, Structured & Result-Oriented
          Clinical Preparation State-of-the-Art Facilities
        </p>
      </div>

      <div className="facilities-cards" ref={cardsContainerRef}>
        {cardData.map((card, index) => (
          <div
            key={card.id}
            className="facilities-card"
            data-index={index}
            ref={(el) => addToCardsRef(el, index)}
          >
            <div className="facilities-card-inner">
              <div className="facilities-card-image-container">
                <img
                  className="facilities-card-image"
                  src={card.image}
                  alt={card.alt}
                />
              </div>
              <div className="facilities-card-content">
                <h4 className="facilities-card-title">{card.title}</h4>
                <h5 className="facilities-card-subtitle">{card.sub_title}</h5>
                <p
                  className="facilities-card-desc"
                  dangerouslySetInnerHTML={{ __html: card.desc }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="facilities-space-bottom" />
    </div>
  );
}

export default Facilities;
