import React from "react";
import './hslider.css'

const HSlider = () => {
  const sliderData = [
    {
      id: 1,
      title: "Enjoy the view through—the wide panoramic glass window",
      description: "Get closer to the desert nature than ever before and admire this unique, breathtaking landscape.",
      image: "src/assets/cap3-square.jpg",
      currentPage: "01",
      totalPages: "02"
    },
    {
      id: 2,
      title: "Sound of silence — out of the city rush with completely privacy",
      description: "Here, every whisper of nature recharges your soul——your sanctuary of solitude awaits.",
      image: "src/assets/cap2-square.jpg",
      currentPage: "02",
      totalPages: "03"
    },
    {
      id: 3,
      title: "Relax yourself in——Wooden Jacuzzi",
      description: "Let the natural textures and gentle bubbles transport you to a realm of pure, handcrafted bliss.",
      image: "src/assets/cap1-square.jpg",
      currentPage: "03",
      totalPages: "03"
    }
  ];

  return (
    <div >
      <section className="hslider">
        {sliderData.map((item, index) => (
          <React.Fragment key={item.id}>
            <div className="item box">
              <h3>{item.title}</h3>
              <div className="bottom">
                <div className="page">
                  <span className="active">{item.currentPage}</span>
                  <span>{item.totalPages}</span>
                </div>
                <p>{item.description}</p>
              </div>
            </div>
            {index < sliderData.length - 1 && <img className="box" src={item.image} alt="" />}
          </React.Fragment>
        ))}
      </section>
    </div>
  );
};

export default HSlider;
