import React, { useEffect } from 'react'
import welcomeOne from "../../assets/about-1.png";
import welcomeTwo from "../../assets/about-2.png";
import "./welcome.css";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Welcome = () => {
  useEffect(() => {
    gsap.to('.welcome-heading span', {
      height: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: '.welcome-heading',
        start: 'top 70%',
        end: 'bottom 70%',
        scrub: 1,
        // markers: true,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div>
      <section className="welcome">
        <div className="welcome-heading">
          
          <h2>
            Welcome to a world of wild California desert with Capsules®, where you
            will
            discover exquisite nature observing it from capsule
            houses, nestled in the one of the
            most breathtaking destination on the
            United States.
          </h2>
          <span></span>
        </div>
        <div className="welcome-content">
          <div className="welcome-img">
            <img src={welcomeOne} alt="Welcome to Capsules" />
            <img src={welcomeTwo} alt="Welcome to Capsules" />
          </div>
          <div className="welcome-message">
            <p>
              A place where you can be with yourself and your loved ones. A
              place where you can experience unforgettable desert things.
            </p>
          </div>
        </div>
        <span className="discover">Discover available Capsules®</span>
      </section>
    </div>
  );
};

export default Welcome;
