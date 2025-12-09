import "./App.css";
import Hero from "./components/hero/Hero";
import Welcome from "./components/welcome/Welcome";
import Choose from "./components/choose/Choose";
import VertSlider from "./components/vertSlider/VertSlider";
import Location from "./components/location/Location";
import HSlider from "./components/hslider/HSlider";
import Discovery from "./components/discovery/Discovery";
import FullSlider from "./components/fullSlider/FullSlider"
import Review from "./components/review/Review"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"



function App() {
  return (
    <>
      <Hero />
      <Welcome />
      <Choose />
      <VertSlider />
      <Location />
      <HSlider />
      <Discovery />
      <FullSlider />
      <Review />
      <Hero variant="center" />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
