import { useState } from "react";
import Panel from "./Panel";
import Navbar from "../Navbar/Navbar";
import Hero from "./Hero";

interface Item {
  id: number;
  title: string;
  Icon: string;
}

const items: Item[] = [
  {
    id: 1,
    title: "Version 3",
    Icon: "bi-gear-fill",
  },
  {
    id: 2,
    title: "Version 2",
    Icon: "bi-gear-fill",
  },
  {
    id: 3,
    title: "Version 1",
    Icon: "bi-gear-fill",
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
        />
      ))}
      <button
        onClick={() => setOpen(0)}
        className="absolute right-48 bg-black text-white  bi-house-fill mt-3 w-8 h-8 rounded"
      ></button>
    </div>
  );
};

export default VerticalAccordion;
