import "./App.css";
import Hero from "./components/hero/Hero";
import Welcome from "./components/welcome/Welcome";
import Choose from "./components/choose/Choose";
import VertSlider from "./components/vertSlider/VertSlider";
import Location from "./components/location/Location";
import HSlider from "./components/hslider/HSlider";
import Discovery from "./components/discovery/Discovery";
import FullSlider from "./components/fullSlider/FullSlider"



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
    </>
  );
}

export default App;
