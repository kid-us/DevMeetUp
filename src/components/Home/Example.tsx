import { useRef, useState } from "react";
import { motion } from "framer-motion";

const TARGET_TEXT: string = "Lorem ipsum dolor emit";
const CYCLES_PER_LETTER: number = 2;
const SHUFFLE_TIME: number = 50;
const CHARS: string = "!@#$%^&*():{};|,.<>/?";

const Example: React.FC = () => {
  return (
    <div className="grid min-h-[200px] place-content-center bg-neutral-900 p-4">
      <EncryptButton />
    </div>
  );
};

const EncryptButton: React.FC = () => {
  const intervalRef = useRef<number | null>(null);
  const [text, setText] = useState<string>(TARGET_TEXT);

  const scramble = (): void => {
    let pos = 0;

    intervalRef.current = window.setInterval(() => {
      const scrambled: string = TARGET_TEXT.split("")
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

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = (): void => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setText(TARGET_TEXT);
  };

  return (
    <motion.p
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.975 }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="group relative overflow-hidden rounded-lg border-[1px] border-neutral-500 bg-neutral-700 px-4 py-2 font-mono font-medium uppercase text-neutral-300 transition-colors hover:text-indigo-300"
    >
      <div className="relative z-10 flex items-center gap-2">
        <span>{text}</span>
      </div>
    </motion.p>
  );
};

export default Example;
