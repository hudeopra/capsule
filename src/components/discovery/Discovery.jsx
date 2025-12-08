import React from "react";
import './discovery.css'
const Discovery = () => {
  const activityLevels = [
    {
      id: 1,
      title: "Easy",
      duration: "3-5h duration",
      percent: '40%',
    },
    {
      id: 2,
      title: "Medium",
      duration: "8-12h duration",
      percent: '80%'
    },
    {
      id: 3,
      title: "Hard",
      duration: "24h duration",
      percent: '60%'
    }
  ];

  return (
    <div>
      <section className="discovery">
        <span>Ready for an adventure?</span>
        <h2>Discover the desert activities</h2>
        <div className="discovery-content">
            <div className="levels">
              <p>Offered Capsules® activities have different levels of difficulty:</p>
                {activityLevels.map((level) => (
                  <div className="level" key={level.id}>
                      <div className="level-title">
                          <h4>{level.title}</h4>
                          <span>{level.duration}</span>
                      </div>
                      <div className="level-bar">
                          <span className="bar-level" style={{ width: level.percent }}></span>
                      </div>
                  </div>
                ))}
            </div>
            <div className="discovery-message">
                <p>
                    We want to make sure your stay is exciting and enjoyable. That's why we
offer a variety of activities with different
levels of engagement. Whether you seek
thrills or tranquility, there's something for
everyone to make your desert stay truly memorable.

                </p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Discovery;
