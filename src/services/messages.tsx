interface Message {
  id: number;
  style: string;
  msg: string;
  vertical?: boolean;
}

// Message
export const messages: Message[] = [
  {
    id: 1,
    msg: "I use JavaScript for the Frontend",
    style:
      "rounded-l-xl rounded-tr-2xl shadow-[2px_2px_2px_0px_black] absolute top-0 left-5 bg-[#61DAFB] text-black",
  },
  {
    id: 2,
    msg: "I use JavaScript for the Backend",
    style:
      "rounded-l-xl rounded-tr-2xl shadow-[2px_2px_2px_0px_black] absolute top-0 left-5 bg-[#61DAFB] text-black",
  },
  {
    id: 3,
    msg: "I use JavaScript for Mobile Apps",
    style:
      "rounded-l-xl rounded-tr-2xl shadow-[2px_2px_2px_0px_black] absolute top-0 left-5 bg-[#61DAFB] text-black",
  },
  {
    id: 4,
    msg: "I use JavaScript for Desktop Apps",
    style:
      "rounded-l-xl rounded-tr-2xl shadow-[2px_2px_2px_0px_black] absolute top-0 left-5 bg-[#61DAFB] text-black",
  },
  {
    id: 5,
    msg: "I use JavaScript for Databases",
    style:
      "rounded-l-xl rounded-tr-2xl shadow-[2px_2px_2px_0px_black] absolute top-0 left-5 bg-[#61DAFB] text-black",
  },
  {
    id: 6,
    msg: "Wait, what? Shut up!",
    style:
      "rounded-l-xl rounded-br-2xl shadow-[2px_2px_2px_0px_black] absolute top-80 -left-10 bg-[#F8981D]",
  },
  {
    id: 7,
    msg: "Oh, I forgot. I use TypeScript!",
    style:
      "rounded-l-xl rounded-tr-2xl shadow-[2px_2px_2px_0px_black] absolute top-0 left-5 bg-[#61DAFB] text-black",
  },
  {
    id: 8,
    msg: "By the way, I use Arch.",
    style:
      "rounded-b-xl rounded-tr-2xl shadow-[2px_2px_2px_0px_black] absolute top-40 right-2 bg-[#306998] text-white",
    vertical: true,
  },
  {
    id: 9,
    msg: "Come on, man, you’ve told us that like 10 times.",
    style:
      "rounded-r-xl rounded-tl-2xl shadow-[2px_2px_2px_0px_black] absolute -top-4 right-10 bg-[#8CC84B] text-white",
  },
  {
    id: 10,
    msg: "I code with PHP.",
    style:
      "rounded-l-xl rounded-br-2xl shadow-[2px_2px_2px_0px_black] absolute top-80 -left-10 bg-[#F8981D]",
  },
  {
    id: 11,
    msg: "That’s why you’re the oldest among us.",
    style:
      "rounded-b-xl rounded-tr-2xl shadow-[2px_2px_2px_0px_black] absolute top-40 right-2 bg-[#306998] text-white",
    vertical: true,
  },
  {
    id: 12,
    msg: "You code with PHP and told me to shut up??",
    style:
      "rounded-l-xl rounded-tr-2xl shadow-[2px_2px_2px_0px_black] absolute top-0 left-5 bg-[#61DAFB] text-black",
  },
  {
    id: 13,
    msg: "Yep, I simply have a Lambo, so I can say that to anyone.",
    style:
      "rounded-l-xl rounded-br-2xl shadow-[2px_2px_2px_0px_black] absolute top-80 -left-10 bg-[#F8981D]",
  },
  {
    id: 15,
    msg: "Python is the best.",
    style:
      "rounded-b-xl rounded-tr-2xl shadow-[2px_2px_2px_0px_black] absolute top-40 right-2 bg-[#306998] text-white",
    vertical: true,
  },
  {
    id: 16,
    msg: "But it’s not fast.",
    style:
      "rounded-l-xl rounded-tr-2xl shadow-[2px_2px_2px_0px_black] absolute top-0 left-5 bg-[#61DAFB] text-black",
  },
  {
    id: 17,
    msg: "Come on, you use JavaScript for everything. Shut up!",
    style:
      "rounded-b-xl rounded-tr-2xl shadow-[2px_2px_2px_0px_black] absolute top-40 right-2 bg-[#306998] text-white",
    vertical: true,
  },
  {
    id: 18,
    msg: "You again!",
    style:
      "rounded-l-xl rounded-tr-2xl shadow-[2px_2px_2px_0px_black] absolute top-0 left-5 bg-[#61DAFB] text-black",
  },
  {
    id: 19,
    msg: "Let me tell you a joke.",
    style:
      "rounded-r-xl rounded-tl-2xl shadow-[2px_2px_2px_0px_black] absolute -top-4 right-10 bg-[#8CC84B] text-white",
  },
  {
    id: 20,
    msg: "A company wants a full-stack developer and...",
    style:
      "rounded-r-xl rounded-tl-2xl shadow-[2px_2px_2px_0px_black] absolute -top-4 right-10 bg-[#8CC84B] text-white",
  },
  {
    id: 21,
    msg: "And the requirements are: Node, React, Python, Flutter, PHP, and Go...",
    style:
      "rounded-r-xl rounded-tl-2xl shadow-[2px_2px_2px_0px_black] absolute -top-4 right-10 bg-[#8CC84B] text-white",
  },
  {
    id: 22,
    msg: "And the compensation says: Unpaid Intern 😂😂🤣🤣",
    style:
      "rounded-r-xl rounded-tl-2xl shadow-[2px_2px_2px_0px_black] absolute -top-4 right-10 bg-[#8CC84B] text-white",
  },
  {
    id: 23,
    msg: "😭😭 I applied for that job.",
    style:
      "rounded-l-xl rounded-br-2xl shadow-[2px_2px_2px_0px_black] absolute bottom-0 -left-10 bg-[#181717] text-white",
  },
  {
    id: 24,
    msg: "HTML is a programming language, right?",
    style:
      "rounded-r-xl rounded-bl-2xl shadow-[2px_2px_2px_0px_black] absolute -bottom-5 right-3 bg-[#007ACC] text-white",
  },
  {
    id: 25,
    msg: "Never mind, it’s better I shut up.",
    style:
      "rounded-r-xl rounded-bl-2xl shadow-[2px_2px_2px_0px_black] absolute -bottom-5 right-3 bg-[#007ACC] text-white",
  },
  {
    id: 26,
    msg: "ሊመቱኝ ነው እንዴ",
    style:
      "rounded-r-xl rounded-bl-2xl shadow-[2px_2px_2px_0px_black] absolute -bottom-5 right-3 bg-[#007ACC] text-white",
  },
  {
    id: 27,
    msg: "",
    style: "",
  },
];
