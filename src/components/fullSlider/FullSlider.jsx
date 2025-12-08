import React from 'react'
import "./fullSlider.css"

const FullSlider = () => {
  const activities = [
    {
      id: 1,
      title: "Buggy tours",
      subtitle: "in the desert",
      tag: "Easy",
      description: "Explore the terrain on a guided buggy tour that takes you through the desert's vast and open landscapes.",
      image: "src/assets/activities-1.png",
      currentPage: "01",
      totalPages: "03"
    },
    {
      id: 2,
      title: "Breathtaking",
      subtitle: "desert hikes",
      tag: "medium",
      description: "Set out on a hike that offers clear trails, stunning views, and a closer look at the unique desert environment.",
      image: "src/assets/activities-2.png",
      currentPage: "02",
      totalPages: "03"
    },
    {
      id: 3,
      title: "Exciting group",
      subtitle: "rock climbing",
      tag: "Hard",
      description: "Climbing session on natural sandstone formations, designed to be both challenging and safe while fostering teamwork.",
      image: "src/assets/activities-3.png",
      currentPage: "03",
      totalPages: "03"
    }
  ];

  return (
    <div>
        <section className='full-slider'>
                {activities.map((activity) => (
                  <div 
                    key={activity.id}
                    className="image-wrapper" 
                    style={{ backgroundImage: `url('${activity.image}')` }}
                  >
                      <h3>
                          {activity.title}  <br/>{activity.subtitle}
                      </h3>
                      <span className="tag">
                          {activity.tag}
                      </span>
                      <div className="bottom">
                          <p>
                              {activity.description}
                          </p>
                          <div className="page">
                              <span className="active">{activity.currentPage}</span>
                              <span>{activity.totalPages}</span>
                          </div>
                      </div>
                  </div>
                ))}
        </section>
    </div>
  )
}

export default FullSlider
                   