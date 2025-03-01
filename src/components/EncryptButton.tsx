import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  name: string;
}

const CYCLES_PER_LETTER: number = 2;
const SHUFFLE_TIME: number = 50;
const CHARS: string = "!@#$%^&*():{};|,.<>/?";

const EncryptButton = ({ name }: Props) => {
  const intervalRef = useRef<number | null>(null);
  const [text, setText] = useState<string>(name);

  const scramble = (): void => {
    let pos = 0;

    intervalRef.current = window.setInterval(() => {
      const scrambled: string = name
        .split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex: number = Math.floor(
            Math.random() * CHARS.length
          );
          return CHARS[randomCharIndex];
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= name.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = (): void => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setText(name);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.975 }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="bg-btn py-3 text-sm font-mono transition-colors hover:shadow-none text-btn-color w-48 text-center rounded"
    >
      <div className="relative z-10 gap-2 font-semibold">
        <span>{text}</span>
      </div>
    </motion.button>
  );
};

export default EncryptButton;
