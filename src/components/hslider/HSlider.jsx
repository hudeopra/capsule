import React, { useEffect } from 'react'
import './hslider.css'
import cap1Square from "../../assets/cap1-square.jpg"
import cap2Square from "../../assets/cap2-square.jpg"
import cap3Square from "../../assets/cap3-square.jpg"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const HSlider = () => {
  const sliderData = [
    {
      id: 1,
      title: "Enjoy the view through—the wide panoramic glass window",
      description: "Get closer to the desert nature than ever before and admire this unique, breathtaking landscape.",
      image: cap3Square,
      currentPage: "01",
      totalPages: "02"
    },
    {
      id: 2,
      title: "Sound of silence — out of the city rush with completely privacy",
      description: "Here, every whisper of nature recharges your soul——your sanctuary of solitude awaits.",
      image: cap2Square,
      currentPage: "02",
      totalPages: "03"
    },
    {
      id: 3,
      title: "Relax yourself in——Wooden Jacuzzi",
      description: "Let the natural textures and gentle bubbles transport you to a realm of pure, handcrafted bliss.",
      image: cap1Square,
      currentPage: "03",
      totalPages: "03"
    }
  ];

  useEffect(() => {
    gsap.to('.hslider', {
      xPercent: -60,
      scrollTrigger: {
        trigger: '.hslider',
        start: 'top 0%',
        end: 'bottom -0%',
        scrub: true,
        // markers: true,
        pin: true,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div>
      <section className="hslider">
        {sliderData.map((item, index) => (
          <div key={item.id} className="item-wrapper">
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
          </div>
        ))}
      </section>
    </div>
  );
};

export default HSlider;
