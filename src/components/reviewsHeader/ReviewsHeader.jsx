import React, { useState, useEffect } from "react";
import "./ReviewsHeader.css";
import DrArushiVahie from "../../assets/studentsImages/Dr-Arushi-Vahie.png";
import DrNavya from "../../assets/studentsImages/Dr-Navya.png";
import DrRajeswariRiya from "../../assets/studentsImages/Dr-Rajeswari-Riya.png";
import DrShrutiRawat from "../../assets/studentsImages/Dr-Shruti-Rawat.png";
import DrShubhDahiya from "../../assets/studentsImages/Dr-Shubh-Dahiya.png";
import DrSnehaRani from "../../assets/studentsImages/Dr-Sneha-Rani.png";
import DrAravindKrishnan from "../../assets/studentsImages/dr-aravind-krishnan.jpg";
import DrkritikaAggarwal from "../../assets/studentsImages/dr-kritika-aggarwal.jpg";
import DrIfrahAnsari from "../../assets/studentsImages/dr-ifrah-ansari.jpg";
import DrPrakrutiBhat from "../../assets/studentsImages/dr-prakruti-bhat.jpg";
import DrArshiyaGarg from "../../assets/studentsImages/dr-arshiya-garg.jpg";
import DrShravya from "../../assets/studentsImages/dr-shravya.jpg";
import DrTanishaGupta from "../../assets/studentsImages/dr-tanisha-gupta.jpg";
import DrAkshithaThatikonda from "../../assets/studentsImages/dr-akshitha-thatikonda.jpg";
import DrVinootKalasappagol from "../../assets/studentsImages/dr-vinoot-kalasappagol.jpg";
import DrYogithaPoojari from "../../assets/studentsImages/dr-yogitha-poojari.jpg";
import DrAparnaWarrier from "../../assets/studentsImages/dr-aparna-warrier.jpg";
import DrAlphonsaMaryMathew from "../../assets/studentsImages/dr-alphonsa-mary-mathew.jpg";
import DrFaizanAftabWani from "../../assets/studentsImages/dr-faizan-aftab-wani.jpg";
import DrSakshitaPal from "../../assets/studentsImages/dr-sakshita-pal.jpg";
import DrAveekChakraborty from "../../assets/studentsImages/dr-aveek-chakraborty.jpg";
import DrAvneeshMadan from "../../assets/studentsImages/dr-avneesh-madan.jpg";
import DrDevanshiPundeer from "../../assets/studentsImages/dr-devanshi-pundeer.jpg";

import DrAkshitaSarin from "../../assets/studentsImages/dr-akshita-sarin.webp";
import DrMuditGoyal from "../../assets/studentsImages/dr-mudit-goyal.webp";
import DrVidushi from "../../assets/studentsImages/dr-vidushi.webp";

function ReviewsHeader() {
  const [visibleProfiles, setVisibleProfiles] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]);
  const [count, setCount] = useState(0);
  const target = 115221;
  const duration = 2000;

  const profileImages = [
    DrVidushi,
    DrMuditGoyal,
    DrAkshitaSarin,
    DrAravindKrishnan,
    DrkritikaAggarwal,
    DrIfrahAnsari,
    DrPrakrutiBhat,
    DrArshiyaGarg,
    DrShravya,
    DrTanishaGupta,
    DrAkshithaThatikonda,
    DrVinootKalasappagol,
    DrYogithaPoojari,
    DrAparnaWarrier,
    DrAlphonsaMaryMathew,
    DrFaizanAftabWani,
    DrSakshitaPal,
    DrAveekChakraborty,
    DrAvneeshMadan,
    DrDevanshiPundeer,
    DrArushiVahie,
    DrNavya,
    DrRajeswariRiya,
    DrShrutiRawat,
    DrShubhDahiya,
    DrSnehaRani,
  ];

  const avatarPositions = [
    { top: "5%", left: "5%" },
    { top: "15%", left: "25%" },
    { top: "5%", left: "60%" },
    { top: "10%", left: "90%" },
    { top: "50%", left: "15%" },
    { top: "45%", left: "90%" },
    { top: "70%", left: "5%" },
    { top: "75%", left: "30%" },
    { top: "75%", left: "75%" },
    { top: "35%", left: "70%" },
  ];

  useEffect(() => {
    const initialProfiles = [];
    const availableIndices = [...Array(profileImages.length).keys()];

    for (let i = 0; i < 10; i++) {
      const randomIdx = Math.floor(Math.random() * availableIndices.length);
      initialProfiles.push(availableIndices[randomIdx]);
      availableIndices.splice(randomIdx, 1);
    }

    setVisibleProfiles(initialProfiles);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleProfiles((prev) => {
        const newProfiles = [...prev];

        const positionToChange = Math.floor(Math.random() * newProfiles.length);

        const availableImages = [];
        for (let i = 0; i < profileImages.length; i++) {
          if (!newProfiles.includes(i)) {
            availableImages.push(i);
          }
        }

        if (availableImages.length > 0) {
          const randomAvailableIdx = Math.floor(
            Math.random() * availableImages.length,
          );
          newProfiles[positionToChange] = availableImages[randomAvailableIdx];
        }

        return newProfiles;
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      const value = Math.min(
        Math.floor((progress / duration) * target),
        target,
      );

      setCount(value);

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="reviews-header-section">
      <div className="reviews-header-card">
        <div className="reviews-header-floating-images">
          {visibleProfiles.slice(0, 10).map((profileIdx, index) => (
            <img
              key={index}
              src={profileImages[profileIdx]}
              alt="BTR Subscribers"
              className="reviews-header-floating-avatar"
              style={{
                top: avatarPositions[index].top,
                left: avatarPositions[index].left,
              }}
            />
          ))}
        </div>

        <h1 className="reviews-header-title">From Our Students</h1>

        <h2 className="reviews-header-student-count">
          {count.toLocaleString()}+
        </h2>

        <p className="reviews-header-student-text">students and counting!</p>
      </div>
    </div>
  );
}

export default ReviewsHeader;
