import Navbar from "../Navbar/Navbar";
import Hero from "./Hero";
import About from "./About";

const SmallDevice = () => {
  return (
    <div className="container mx-auto lg:hidden block">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default SmallDevice;
