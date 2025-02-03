import { v3 } from "../../assets";
import Sidebar from "./Sidebar";

const Hero = () => {
  return (
    <>
      <div className="hero"></div>
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="lg:absolute top-0 lg:mt-40 mt-36 w-[77%] h-[90vh] border-3 border-zinc-800 rounded-xl overflow-hidden shadow shadow-teal-500">
            <div className="grid grid-cols-12">
              <Sidebar />
              <div className="col-span-9 bg-[#101012] w-full h-full px-5">
                <div className="w-full bg-[#101012] h-10 pt-3">
                  <p className="text-xs italic text-yellow-200">
                    {" "}
                    <span className="bi-image"></span> v3-coming-soon.png{" "}
                    <span className="bi-x"></span>
                  </p>
                </div>
                <img
                  src={v3}
                  alt="v3 cover photo"
                  className="object-contain rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
