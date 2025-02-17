import { AnimatePresence, motion } from "motion/react";
import EncryptButton from "./EncryptButton";
import { useEffect, useState } from "react";
import { messages } from "../../services/messages";
import { hero } from "../../assets";

const Hero = () => {
  const [index, setIndex] = useState<number | null>(null);
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIndex(0);

      const interval = setInterval(() => {
        setIndex((prevIndex) => {
          if (prevIndex === null || prevIndex >= messages.length - 1) {
            clearInterval(interval);
            setShowFinalMessage(true); // Show final message
            return prevIndex;
          }
          return prevIndex + 1;
        });
      }, 4000); // 3 seconds per message

      return () => clearInterval(interval);
    }, 7000); // 3 seconds initial delay

    return () => clearTimeout(startTimeout);
  }, []);

  const goodMessage =
    "Joke aside, welcome to the Ethiopian Developer Community! Whether you're a beginner or a seasoned pro, we're here to learn, grow, and support each other in our journey through the world of tech. Let's code, share knowledge, and build something amazing together!";

  const words = goodMessage.split(" ");

  return (
    <div className="h-[87dvh]">
      <div className="shine"></div>
      <div className="grid lg:grid-cols-2">
        <div
          className={`relative flex justify-center items-center ${
            showFinalMessage && "mt-10 transition-all duration-300"
          }`}
        >
          <div>
            <h1 className="lg:text-6xl text-4xl lg:w-[82%] lg:leading-14 font-extrabold text-shadow">
              Join the Ultimate Developers Meeting Experience
            </h1>
            <p className="text-soft-text mt-5 l:w-[70%] lg:text-sm">
              Connect with fellow developers, share ideas, amd elevate your
              skills at our upcoming meeting. Don't miss this opportunity to
              network and innovate together!
            </p>

            {/* Good Message */}
            {showFinalMessage && (
              <p className="lg:block hidden mt-10 text-soft">
                {words.map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ x: -30 }}
                    whileInView={{ x: 0 }}
                    transition={{ type: "spring", delay: index * 0.002 }}
                    className="inline-block mr-2"
                  >
                    {word}
                  </motion.span>
                ))}
              </p>
            )}

            <div className="lg:mt-5 mt-10">
              <EncryptButton name="Register" />
            </div>

            {/* Only on Small device */}
            <div className="lg:hidden block my-12">
              <p className="text-2xl font-bold">Hey Devs 👋</p>
              <p className="mt-3 text-lg">
                Welcome to the Ethiopian Developer Community! Whether you're a
                beginner or a seasoned pro, we're here to learn, grow, and
                support each other in our journey through the world of tech.
                Let's code, share knowledge, and build something amazing
                together!
              </p>
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
