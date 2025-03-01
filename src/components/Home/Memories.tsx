import {
  m1,
  m2,
  m3,
  m4,
  m5,
  m6,
  m7,
  m8,
  m9,
  m10,
  m11,
  m12,
  m13,
  m14,
} from "../../assets";
import "./slider.css";

interface Memories {
  id: number;
  img: string;
}

const Memories = () => {
  const memories1: Memories[] = [
    { id: 1, img: m1 },
    { id: 2, img: m2 },
    { id: 3, img: m3 },
    { id: 4, img: m4 },
    { id: 5, img: m5 },
    { id: 6, img: m6 },
    { id: 7, img: m7 },
  ];

  const memories2: Memories[] = [
    { id: 8, img: m8 },
    { id: 9, img: m9 },
    { id: 10, img: m10 },
    { id: 11, img: m11 },
    { id: 12, img: m12 },
    { id: 13, img: m13 },
    { id: 14, img: m14 },
  ];

  return (
    <div className="pt-20">
      <p className="uppercase text-color font-medium text-center mb-10">
        <span className="bi-stars me-2"></span> Memories
      </p>

      {/* Forward Marquee */}
      <div
        className="marquee fadeout-horizontal"
        style={{ "--num-items": memories1.length } as React.CSSProperties}
      >
        <div className="marquee-track">
          {memories1.map((m) => (
            <div
              className="marquee-item"
              style={{ "--item-position": m.id } as React.CSSProperties}
            >
              <img
                src={m.img}
                alt={`Memories-${m.id}`}
                className="h-full w-full object-cover object-center rounded hover:scale-95 hover:rotate-2 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Reverse */}
      <div
        className="marquee fadeout-horizontal mt-10"
        style={
          {
            "--num-items": memories2.length,
            "--direction": "reverse",
          } as React.CSSProperties
        }
      >
        <div className="marquee-track">
          {memories2.map((m) => (
            <div
              className="marquee-item"
              style={{ "--item-position": m.id } as React.CSSProperties}
            >
              <img
                src={m.img}
                alt={`Memories-${m.id}`}
                className="h-full w-full object-cover object-center rounded hover:scale-95 hover:rotate-2 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Memories;
