import Navbar from "../Navbar/Navbar";
import Hero from "./Hero";
import About from "./About";

const SmallDevice = () => {
  return (
    <div className="lg:hidden block">
      <div className="hero-bg">
        <div className="container mx-auto">
          <Navbar />
          <Hero />
        </div>
      </div>
      <div className="container mx-auto mt-14">
        <About />
      </div>
    </div>
  );
};

export default SmallDevice;
