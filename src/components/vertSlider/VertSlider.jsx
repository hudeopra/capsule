import React, { useEffect } from 'react'
import './vertslider.css'
import banner from "../../assets/banner.png"
import cap2 from "../../assets/cap2.png"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const VertSlider = () => {
    const sliderData = [
        {
            id: 1,
            title: "Classic Capsule ®",
            description: "Classic Capsule® boasts refined aesthetics and a modern interior, creating an intimate retreat in a desert landscape.",
            backgroundImage: banner
        },
        {
            id: 2,
            title: "TerraceCapsule ®",
            description: "The most prestige capsule with the biggest terrace and jacuzzi with an amazing view of Los Angeles.",
            backgroundImage: cap2
        },
        {
            id: 3,
            title: "DesertCapsule ®",
            description: "With its striking architecture and upscale amenities, Desert Capsule® offers an exclusive retreat in the heart of the desert.",
            backgroundImage: banner
        }
    ];

    useEffect(() => {
        const vsliders = gsap.utils.toArray('.slider-item');

        vsliders.forEach((message) => {
        // Loop creates individual ScrollTrigger for each card
            ScrollTrigger.create({
                trigger: message,
                start: 'top top',
                pin: true,
                pinSpacing: false,
                endTrigger: '.vslider',
                end: 'bottom bottom',                
                // markers: true,
                id: 'card-',  
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

  return (
    <div>
        <section className="vslider">
            <div className="fixed">
                {/* <span className="fixed-scroll">{ `(scroll)`}</span> */}
                <span className="slidernav">

                </span>
            </div>
            <div className="vsliders">
                
            {sliderData.map((item) => (
                <div 
                    key={item.id}
                    className="slider-item" 
                    style={{ backgroundImage: `url('${item.backgroundImage}')` }}
                >  
                    <h3>{item.title}</h3>
                    <div className="button">
                        <span className="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="@w-[20]"><rect width="22" height="2" transform="matrix(-1 8.42937e-08 8.42937e-08 1 23 11)" fill="rgba(42, 39, 37, 1)"></rect><rect width="22" height="2" transform="translate(12.999 0.999512) rotate(90)" fill="rgba(42, 39, 37, 1)"></rect></svg>
                        </span>
                        <p>
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
            </div>
        </section>
    </div>
  )
}

export default VertSlider