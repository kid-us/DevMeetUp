import { useState } from "react";
import Panel from "./Panel";
import Navbar from "../Navbar/Navbar";
import Hero from "./Hero";
import { v1, v2, v3 } from "../../assets";

interface Item {
  id: number;
  title: string;
  Icon: string;
  bg: string;
}

const items: Item[] = [
  {
    id: 1,
    title: "Version 3",
    Icon: v3,
    bg: "bg-[#61DAFB]",
  },
  {
    id: 2,
    title: "Version 2",
    Icon: v2,
    bg: "bg-[#8CC84B]",
  },
  {
    id: 3,
    title: "Version 1",
    Icon: v1,
    bg: "bg-[#F8981D]",
  },
];

const VerticalAccordion = () => {
  const [open, setOpen] = useState<number>(0);

  return (
    <div className="flex flex-col lg:flex-row h-[100dvh] w-full mx-auto shadow overflow-hidden rounded">
      {open === 0 && (
        <div className="container mx-auto">
          <Navbar />
          <Hero />
        </div>
      )}
      <div className=""></div>
      {items.map((item) => (
        <Panel
          key={item.id}
          open={open}
          setOpen={setOpen}
          id={item.id}
          icon={item.Icon}
          title={item.title}
          bg={item.bg}
        />
      ))}

      <button
        onClick={() => setOpen(0)}
        className={`absolute ${
          open === 2 ? "right-36" : open === 3 ? "right-20" : "right-52"
        } bi-house-fill mt-6 w-8 h-8 rounded text-xl lg:inline hidden`}
      ></button>
    </div>
  );
};

export default VerticalAccordion;
