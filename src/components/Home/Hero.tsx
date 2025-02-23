import { AnimatePresence, motion } from "motion/react";
import EncryptButton from "./EncryptButton";
import { useEffect, useState } from "react";
import { messages } from "../../services/messages";
import { hero } from "../../assets";

const Hero = () => {
  const [index, setIndex] = useState<number | null>(null);
  // const [showScrollAnimation, setShowScrollAnimation] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIndex(0);

      const interval = setInterval(() => {
        setIndex((prevIndex) => {
          if (prevIndex === null || prevIndex >= messages.length - 1) {
            clearInterval(interval);
            // setShowScrollAnimation(true); // Show final message/
            return prevIndex;
          }
          return prevIndex + 1;
        });
      }, 4000); // 3 seconds per message

      return () => clearInterval(interval);
    }, 7000); // 3 seconds initial delay

    return () => clearTimeout(startTimeout);
  }, []);

  return (
    <div className="h-[90dvh]">
      <div className="shine"></div>
      <div className="flex items-center h-full lg:grid lg:grid-cols-2">
        <div className={`relative flex justify-center items-center`}>
          <div>
            <h1 className="lg:text-6xl text-4xl lg:w-[82%] lg:leading-14 font-extrabold text-shadow">
              Join the Ultimate Developers Meeting Experience
            </h1>
            <p className="text-soft-text my-10 l:w-[70%] lg:text-sm">
              Connect with fellow developers, share ideas, amd elevate your
              skills at our upcoming meeting. Don't miss this opportunity to
              network and innovate together!
            </p>

            <div className="lg:mt-5 mt-10">
              <EncryptButton name="Register" />
            </div>
          </div>
        </div>

        {/* Only on Large device */}
        <div className="relative lg:block hidden">
          <img src={hero} alt="Hero" className="w-[100%] relative" />
          <AnimatePresence>
            {index !== null && (
              <motion.div
                key={messages[index].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1 }}
                className={`text-sm ${
                  messages[index].vertical ? "px-3 py-4" : "px-4 py-3"
                }  ${messages[index].style}`}
              >
                <p
                  style={{
                    writingMode: messages[index].vertical
                      ? "vertical-lr"
                      : "initial",
                  }}
                >
                  {messages[index].msg}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Hero;
