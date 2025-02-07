import { useState } from "react";
import Panel from "./Panel";

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
  const [open, setOpen] = useState<number>(items[0].id);

  return (
    <section className="">
      <div className="flex flex-col lg:flex-row h-[100dvh] w-full mx-auto shadow overflow-hidden rounded">
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
      </div>
    </section>
  );
};

export default VerticalAccordion;
