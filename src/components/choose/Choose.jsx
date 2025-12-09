import React from "react";
import "./choose.css";

const Choose = () => {
  return (
    <div>
      <section className="choose">
        <h2>Choose the one you like best</h2>
        <div className="choose-content">
          <div className="choose-message">
            <p>
              You can choose one of three premium capsule houses in our offer.
              Each of our capsules provides the highest quality and meets the
              standards adjusted to your needs. Choose the one you like.
            </p>
          </div>
          <div className="choose-points">
            <span>All Capsules® houses—has built based on the same rules:</span>
            <ul>
              <li>Sustainable</li>
              <li>Nature—Care</li>
              <li>Smart</li>
              <li>Privacy</li>
              <li>Spacious</li>
              <li>Glassed-in</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Choose;
