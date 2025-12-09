import welcomeOne from "../../assets/about-1.png";
import welcomeTwo from "../../assets/about-2.png";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div>
      <section className="welcome">
        <h2>
          Welcome to a world of wild California desert with Capsules®, where you
          willdesert with Capsules®, where you will discover exquisite nature
          observing itdiscover exquisite nature observing it from capsule
          houses, nestled in thefrom capsule houses, nestled in the one of the
          most breathtakingone of the most breathtaking destination on the
          United States.
        </h2>
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
