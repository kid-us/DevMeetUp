import { v3 } from "../../assets";
import EncryptButton from "./EncryptButton";

const Hero = () => {
  return (
    <div className="flex justify-center items-center h-[87dvh] ">
      <div className="grid grid-cols-2">
        <div>
          {/* <h1 className="text-5xl w-[80%] leading-14 font-extrabold">
            <span className="text-class">Code,</span> Connect, Create: Where
            Developers Meet and Innovate!
          </h1> */}
          <h1 className="text-6xl w-[80%] leading-14 font-extrabold">
            Join the Ultimate Developers Meeting Experience
          </h1>
          {/* <p className="font-light text-sm mt-5 w-[70%]">
            CodeNight, a vibrant hub for over 9,000 developers in Ethiopia.
            Whether online or in-person, we provide a space to learn, share, and
            collaborate on programming ideas, trends, and innovations. Connect
            with like-minded tech enthusiasts, level up your skills, and be part
            of the movement shaping Ethiopia's tech future.
          </p> */}
          <p className="text-gray-800 mt-5 w-[70%] text-sm">
            Connect with fellow developers, share ideas, amd elevate your skills
            at our upcoming meeting. Don't miss this opportunity to network and
            innovate together!
          </p>

          <div className="mt-10">
            <EncryptButton name="Register" />
          </div>
        </div>
        <div>
          <img src={v3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
