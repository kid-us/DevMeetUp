import { AnimatePresence, motion } from "motion/react";
import { v3 } from "../../assets";
import { useEffect, useState } from "react";

interface Message {
  id: number;
  style: string;
  msg: string;
  vertical?: boolean;
}

const messages: Message[] = [
  {
    id: 1,
    msg: "I use JavaScript for the Frontend",
    style:
      "rounded-l-xl rounded-tr-2xl shadow-[2px_2px_2px_0px_black] absolute top-0 left-5 bg-yellow-400",
  },
  {
    id: 2,
    msg: "I use JavaScript for the Backend",
    style:
      "rounded-l-xl rounded-tr-2xl shadow-[2px_2px_2px_0px_black] absolute top-0 left-5 bg-yellow-400",
  },
  {
    id: 3,
    msg: "I use JavaScript for Mobile Apps",
    style:
      "rounded-l-xl rounded-tr-2xl shadow-[2px_2px_2px_0px_black] absolute top-0 left-5 bg-yellow-400",
  },
  {
    id: 4,
    msg: "I use JavaScript for Desktop Apps",
    style:
      "rounded-l-xl rounded-tr-2xl shadow-[2px_2px_2px_0px_black] absolute top-0 left-5 bg-yellow-400",
  },
  {
    id: 5,
    msg: "I use JavaScript for Databases",
    style:
      "rounded-l-xl rounded-tr-2xl shadow-[2px_2px_2px_0px_black] absolute top-0 left-5 bg-yellow-400",
  },
  {
    id: 6,
    msg: "Wait, what? Shut up!",
    style:
      "rounded-l-xl rounded-br-2xl shadow-[2px_2px_2px_0px_black] absolute top-80 -left-10 bg-blue-500",
  },
  {
    id: 7,
    msg: "Oh, I forgot. I use TypeScript!",
    style:
      "rounded-l-xl rounded-tr-2xl shadow-[2px_2px_2px_0px_black] absolute top-0 left-5 bg-yellow-400",
  },
  {
    id: 8,
    msg: "By the way, I use Arch.",
    style:
      "rounded-b-xl rounded-tr-2xl shadow-[2px_2px_2px_0px_black] absolute top-40 right-0 bg-violet-400",
    vertical: true,
  },
  {
    id: 9,
    msg: "Come on, man, you’ve told us that like 10 times.",
    style:
      "rounded-r-xl rounded-tl-2xl shadow-[2px_2px_2px_0px_black] absolute -top-4 right-10 bg-teal-500",
  },
  {
    id: 10,
    msg: "I code with PHP.",
    style:
      "rounded-l-xl rounded-br-2xl shadow-[2px_2px_2px_0px_black] absolute top-80 -left-10 bg-blue-500",
  },
  {
    id: 11,
    msg: "That’s why you’re the oldest among us.",
    style:
      "rounded-b-xl rounded-tr-2xl shadow-[2px_2px_2px_0px_black] absolute top-40 right-0 bg-violet-400",
    vertical: true,
  },
  {
    id: 12,
    msg: "You code with PHP and told me to shut up??",
    style:
      "rounded-l-xl rounded-tr-2xl shadow-[2px_2px_2px_0px_black] absolute top-0 left-5 bg-yellow-400",
  },
  {
    id: 13,
    msg: "Yep, I simply have a Lambo, so I can say that to anyone.",
    style:
      "rounded-l-xl rounded-br-2xl shadow-[2px_2px_2px_0px_black] absolute top-80 -left-10 bg-blue-500",
  },
  {
    id: 15,
    msg: "Python is the best.",
    style:
      "rounded-b-xl rounded-tr-2xl shadow-[2px_2px_2px_0px_black] absolute top-40 right-0 bg-violet-400",
    vertical: true,
  },
  {
    id: 16,
    msg: "But it’s not fast.",
    style:
      "rounded-l-xl rounded-tr-2xl shadow-[2px_2px_2px_0px_black] absolute top-0 left-5 bg-yellow-400",
  },
  {
    id: 17,
    msg: "Come on, you use JavaScript for everything. Shut up!",
    style:
      "rounded-b-xl rounded-tr-2xl shadow-[2px_2px_2px_0px_black] absolute top-40 right-0 bg-violet-400",
    vertical: true,
  },
  {
    id: 18,
    msg: "You again!",
    style:
      "rounded-l-xl rounded-tr-2xl shadow-[2px_2px_2px_0px_black] absolute top-0 left-5 bg-yellow-400",
  },
  {
    id: 19,
    msg: "Let me tell you a joke.",
    style:
      "rounded-r-xl rounded-tl-2xl shadow-[2px_2px_2px_0px_black] absolute -top-4 right-10 bg-teal-500",
  },
  {
    id: 20,
    msg: "A company wants a full-stack developer and...",
    style:
      "rounded-r-xl rounded-tl-2xl shadow-[2px_2px_2px_0px_black] absolute -top-4 right-10 bg-teal-500",
  },
  {
    id: 21,
    msg: "And the requirements are: Node, React, Python, Flutter, PHP, and Go...",
    style:
      "rounded-r-xl rounded-tl-2xl shadow-[2px_2px_2px_0px_black] absolute -top-4 right-10 bg-teal-500",
  },
  {
    id: 22,
    msg: "And the compensation says: Unpaid Intern 😂😂🤣🤣",
    style:
      "rounded-r-xl rounded-tl-2xl shadow-[2px_2px_2px_0px_black] absolute -top-4 right-10 bg-teal-500",
  },
  {
    id: 23,
    msg: "😭😭 I applied for that job.",
    style:
      "rounded-l-xl rounded-br-2xl shadow-[2px_2px_2px_0px_black] absolute bottom-0 -left-10 bg-teal-500",
  },
  {
    id: 24,
    msg: "HTML is a programming language, right?",
    style:
      "rounded-r-xl rounded-bl-2xl shadow-[2px_2px_2px_0px_black] absolute -bottom-5 right-0 bg-teal-500",
  },
  {
    id: 25,
    msg: "Never mind, it’s better I shut up.",
    style:
      "rounded-r-xl rounded-bl-2xl shadow-[2px_2px_2px_0px_black] absolute -bottom-5 right-0 bg-teal-500",
  },
];

const ImageChat = () => {
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIndex(0);

      const interval = setInterval(() => {
        setIndex((prevIndex) =>
          prevIndex !== null ? (prevIndex + 1) % messages.length : 0
        );
      }, 3000); // 3s visible + 1s fade transition

      return () => clearInterval(interval);
    }, 5000); // 5 seconds initial delay

    return () => clearTimeout(startTimeout);
  }, []);

  return (
    <div className="relative">
      <img src={v3} alt="Hero" className="w-[100%] relative" />
      <AnimatePresence>
        {index !== null && (
          <motion.div
            key={messages[index].id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
            className={`text-white text-sm px-4 py-3 ${messages[index].style}`}
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
  );
};

export default ImageChat;
