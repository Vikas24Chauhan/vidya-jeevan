import React, { useState } from "react";
import "./Reviews.css";
import { reviews } from "../../assets/data/reviewsData";

function Reviews() {
  const [isPausedCol1, setIsPausedCol1] = useState(false);
  const [isPausedCol2, setIsPausedCol2] = useState(false);
  const [isPausedCol3, setIsPausedCol3] = useState(false);

  return (
    <div className="reviews-section">
      <h2>Students Feedback</h2>

      <div className="reviews-container">
        <div className="reviews-column column-1">
          <div
            className={`reviews-track track-up ${isPausedCol1 ? "paused" : ""}`}
            onMouseEnter={() => setIsPausedCol1(true)}
            onMouseLeave={() => setIsPausedCol1(false)}
          >
            {[...reviews[0], ...reviews[0]].map((reviews, index) => (
              <div
                key={index}
                className={`reviews-card reviews-card-color-${(index % 8) + 1}`}
              >
                <p className="reviews-text">{reviews.feedback}</p>
                <div className="reviews-author">
                  <img
                    src={reviews.image}
                    alt={reviews.name}
                    className="reviews-author-image"
                  />
                  <div className="reviews-author-info">
                    <h4 className="reviews-author-name">{reviews.name}</h4>
                    {/* <p className="reviews-author-handle">
                           {reviews.handle}
                         </p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reviews-column column-2">
          <div
            className={`reviews-track track-down ${
              isPausedCol2 ? "paused" : ""
            }`}
            onMouseEnter={() => setIsPausedCol2(true)}
            onMouseLeave={() => setIsPausedCol2(false)}
          >
            {[...reviews[1], ...reviews[1]].map((reviews, index) => (
              <div
                key={index}
                className={`reviews-card reviews-card-color-${(index % 8) + 1}`}
              >
                <p className="reviews-text">{reviews.feedback}</p>
                <div className="reviews-author">
                  <img
                    src={reviews.image}
                    alt={reviews.name}
                    className="reviews-author-image"
                  />
                  <div className="reviews-author-info">
                    <h4 className="reviews-author-name">{reviews.name}</h4>
                    {/* <p className="reviews-author-handle">
                           {reviews.handle}
                         </p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reviews-column column-3">
          <div
            className={`reviews-track track-up ${isPausedCol3 ? "paused" : ""}`}
            onMouseEnter={() => setIsPausedCol3(true)}
            onMouseLeave={() => setIsPausedCol3(false)}
          >
            {[...reviews[2], ...reviews[2]].map((reviews, index) => (
              <div
                key={index}
                className={`reviews-card reviews-card-color-${(index % 8) + 1}`}
              >
                <p className="reviews-text">{reviews.feedback}</p>
                <div className="reviews-author">
                  <img
                    src={reviews.image}
                    alt={reviews.name}
                    className="reviews-author-image"
                  />
                  <div className="reviews-author-info">
                    <h4 className="reviews-author-name">{reviews.name}</h4>
                    {/* <p className="reviews-author-handle">
                           {reviews.handle}
                         </p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="fog-overlay fog-top"></div>
        <div className="fog-overlay fog-bottom"></div>
      </div>
    </div>
  );
}

export default Reviews;
