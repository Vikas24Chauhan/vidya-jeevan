import React, { useState } from "react";
import "./Feedback.css";
import DrShrutiRawat from "../../assets/studentsImages/Dr-Shruti-Rawat.png";
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
import DrGarimaSharma from "../../assets/studentsImages/dr-garima-sharma.jpg";

const Feedback = () => {
  const [isPausedRow1, setIsPausedRow1] = useState(false);
  const [isPausedRow2, setIsPausedRow2] = useState(false);

  const testimonials = [
    {
      feedback:
        "This rank wouldn't have been possible without BTR and Dr. Zainab Vora ma'am. Dr. Zainab Vora ma'am has a unique way of explaining concepts — she seamlessly connects topics across subjects, making learning truly integrated BTR transforms the way you approach questions. The problem-solving techniques it teaches are unmatched by any other platform.",
      name: "Dr. Akshitha thatikonda",
      image: DrAkshithaThatikonda,
    },
    {
      feedback:
        "Best concise notes of BTR and Dr. Zainab Vora ma'am Constant guidance throughout this journey is the best thing to study with. She is like a senior who knows more than you know about yourself. She is a mentor,guide, my constant inspiration.",
      name: "Dr. Tanisha Gupta",
      image: DrTanishaGupta,
    },
    {
      feedback:
        "BTR and Dr. Zainab Vora ma'am has played a great role in my success journey. i am so grateful to her for being the guiding light and bringing all 19 subjects in the best crisp and condensed way.",
      name: "Dr. kritika aggarwal",
      image: DrkritikaAggarwal,
    },
    {
      feedback:
        "BTR really helped me stay consistent and built a mind map. Also Dr. Zainab Vora ma'am TnDs were really helpful.",
      name: "Dr. Aravind Krishnan",
      image: DrAravindKrishnan,
    },
    {
      feedback:
        "I was a BTR subscriber for a year. It changed my whole approach to studying and MCQ solving. So grateful for what Dr. Zainab Vora ma'am is doing for us students. My rank went from 25k in NEET 2024 to 431 in NEET 2025.",
      name: "Dr. Prakruti Bhat",
      image: DrPrakrutiBhat,
    },
    {
      feedback:
        "A huge credit goes to BTR! It is like a boost to get a top rank when you have a strong base topped up with pyqs and custom modules.",
      name: "Dr. Shravya",
      image: DrShravya,
    },
    {
      feedback:
        "Loved every bit of BTR Super helpful and enough for preparation.",
      name: "Dr. Arshiya Garg",
      image: DrArshiyaGarg,
    },
    {
      feedback:
        "I was an online BTR subscriber and honestly, Dr. Zainab Vora mam's TnD was a complete game changer for me. The way she guided us, I actually learned how to master MCQ solving. And the effort she puts into her compiled modules, going that extra mile every single time—it really made a huge difference in my prep. Forever grateful ❤️.",
      name: "Dr. Ifrah Ansari",
      image: DrIfrahAnsari,
    },
    {
      feedback:
        "It was great experience, I had taken BTR ONLINE , truly a great learning experience especially, Dr. Zainab Vora ma'am She is just amazing and a great mentor truly Looking forward to meet her atleast once in my lifetime.",
      name: "Dr. Vinoot Kalasappagol",
      image: DrVinootKalasappagol,
    },
    {
      feedback:
        "I studied for NEET pg right after my internship got over, just for 3 months and honeslty without BTR and Dr. Zainab Vora ma'am, nothing would have been possible.",
      name: "Dr. Aparna Warrier",
      image: DrAparnaWarrier,
    },
    {
      feedback: "Very good platform. Hat's off to Dr. Zainab Vora ma'am.",
      name: "Dr. Yogitha Poojari",
      image: DrYogithaPoojari,
    },
    {
      feedback:
        "I would reccommend BTR to anyone starting their pg prep because I could not have done this without ma'am.",
      name: "Dr. Alphonsa Mary Mathew",
      image: DrAlphonsaMaryMathew,
    },
    {
      feedback: "BTR is a full package and it was very helpful.",
      name: "Dr. Faizan Aftab Wani",
      image: DrFaizanAftabWani,
    },
    {
      feedback:
        "BTR is the most important and helpful source in my entire exam preparation.",
      name: "Dr. Sakshita Pal",
      image: DrSakshitaPal,
    },
    {
      feedback:
        "I am deeply indebted to Dr. Zainab Vora ma'am for BTR as well as her overall guidance.",
      name: "Dr. Aveek Chakraborty",
      image: DrAveekChakraborty,
    },
    {
      feedback:
        "I have been a BTR Online Student for 1 year. My entire preparation has been anchored in place by the 2 BTR books and Dr. Zainab Vora ma'am has been an everlasting beacon of light that has guided me through difficult times. I highly recommend following her BTR EnD Cycles and follow her plan exactly how she says.",
      name: "Dr. Avneesh Madan",
      image: DrAvneeshMadan,
    },
    {
      feedback:
        "I owe my success to the one and only Dr. Zainab Vora ma'am. This was my first attempt and with the little time i had , i had to choose my resource wisely to get max output. All of this was possible because of BTR which i gave my heart n soul to master as Dr. Zainab Vora ma'am always said. Her teaching, her advices is something i followed religiously. She is the biggest blessing for neet pg aspirants like us. Thankyou so much ma'am.",
      name: "Dr. Devanshi Pundeer",
      image: DrDevanshiPundeer,
    },
    {
      feedback:
        "BTR was a game changer for me. Dr. Zainab Vora ma'am is a true inspiration. Please give me a chance to thanks her.",
      name: "Dr. Garima Sharma",
      image: DrGarimaSharma,
    },
    {
      feedback:
        "From someone who didnt know how to start the preparation, I came here with blank slate. With no first reading , no rapid revisions nothing. Fresh out of college after internship. I learned what to study and most importantly what not to study. The atmosphere here is welcoming, comforting and also competitive. You come here with empty hands and go back with so much other than the contents of BTR. Dr. Zainab Vora ma'am you will always be mentioned in my every success story speech. Thank you.",
      name: "Dr. Sneha Rani",
      image: DrSnehaRani,
    },
    {
      feedback:
        "I recently attended the 4-day BTR course at Vidya Jeewan, and it was truly an incredible experience. From the exceptional quality of teaching to the delicious food, every aspect was thoughtfully curated. The cleanliness, the welcoming environment, and the overall attention to detail were absolutely impeccable. The atmosphere is filled with such positive energy—it's genuinely uplifting. I appreciated how the entire team went above and beyond to make everyone feel comfortable and supported throughout the journey. I honestly can't think of a single thing to criticize. Thank you Dr. Zainab Vora ma'am.",
      name: "Dr. Shruti Rawat",
      image: DrShrutiRawat,
    },
  ];

  const row1 = testimonials.slice(0, 10);
  const row2 = testimonials.slice(10, 20);

  const TestimonialCard = ({ testimonial }) => (
    <div className="feedback-card">
      <p className="feedback-text">{testimonial.feedback}</p>
      <div className="feedback-author">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="feedback-author-image"
        />
        <div className="feedback-author-info">
          <h4 className="feedback-author-name">{testimonial.name}</h4>
        </div>
      </div>
    </div>
  );

  return (
    <div className="feedback-section">
      <h2 className="feedback-title">From Our Students</h2>

      <div className="feedback-container">
        {/* First Row - Desktop shows first 10, Mobile/Tablet shows all 20 */}
        <div className="feedback-row">
          <div
            className={`feedback-track ${isPausedRow1 ? "paused" : ""}`}
            onMouseEnter={() => setIsPausedRow1(true)}
            onMouseLeave={() => setIsPausedRow1(false)}
          >
            {/* Desktop: First 10 testimonials repeated */}
            <div className="desktop-track">
              {row1.map((testimonial, index) => (
                <TestimonialCard
                  key={`row1-${index}`}
                  testimonial={testimonial}
                />
              ))}
              {row1.map((testimonial, index) => (
                <TestimonialCard
                  key={`row1-duplicate-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </div>

            {/* Mobile/Tablet: All 20 testimonials repeated */}
            <div className="mobile-track">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`mobile-${index}`}
                  testimonial={testimonial}
                />
              ))}
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`mobile-duplicate-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Second Row - Desktop only, shows last 10 */}
        <div className="feedback-row feedback-row-second">
          <div
            className={`feedback-track feedback-track-reverse ${isPausedRow2 ? "paused" : ""}`}
            onMouseEnter={() => setIsPausedRow2(true)}
            onMouseLeave={() => setIsPausedRow2(false)}
          >
            {row2.map((testimonial, index) => (
              <TestimonialCard
                key={`row2-${index}`}
                testimonial={testimonial}
              />
            ))}
            {row2.map((testimonial, index) => (
              <TestimonialCard
                key={`row2-duplicate-${index}`}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>

        <div className="feedback-fog-left"></div>
        <div className="feedback-fog-right"></div>
      </div>

      <div className="feedback-btn">
        <a href="/students">See More</a>
      </div>
    </div>
  );
};

export default Feedback;
