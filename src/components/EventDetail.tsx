import React from "react";
import CardInfo from "./CardInfo";

export interface Event {
  id: number;
  icon: React.ElementType;
  title: string;
  content: string;
}

interface Props {
  title: string;
  subTitle: string;
  icons: Event[];
  description: string;
}

const EventDetail = ({ description, icons, subTitle, title }: Props) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-x-9">
        <div>
          <h1 className="lg:text-3xl text-2xl font-extrabold text-shadow">
            {title}
          </h1>
          <p className="text-soft-text my-5 uppercase">{subTitle}</p>
          <p className="mt-5 text-soft-text">{description}</p>
        </div>

        <div className="col-span-2 grid grid-cols-2 gap-5  rounded-xl overflow-hidden">
          {icons.map((icon) => (
            <CardInfo
              key={icon.id}
              icon={icon.icon}
              title={icon.title}
              content={icon.content}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default EventDetail;
