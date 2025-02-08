import EncryptButton from "./EncryptButton";
import ImageChat from "./ImageChat";

const Hero = () => {
  return (
    <div className="h-[87dvh]">
      <div className="shine"></div>
      <div className="grid grid-cols-2">
        <div className="flex justify-center items-center">
          <div>
            <h1 className="text-6xl w-[80%] leading-14 font-extrabold">
              Join the Ultimate Developers Meeting Experience
            </h1>
            <p className="text-gray-800 mt-5 w-[70%] text-sm">
              Connect with fellow developers, share ideas, amd elevate your
              skills at our upcoming meeting. Don't miss this opportunity to
              network and innovate together!
            </p>

            <div className="mt-10">
              <EncryptButton name="Register" />
            </div>
          </div>
        </div>

        <div>
          <ImageChat />
        </div>
      </div>
    </div>
  );
};

export default Hero;
