export interface KeyNote {
  id: number;
  img: string;
  name: string;
  title: string;
  desc: string;
}

interface Props {
  keyNote: KeyNote[];
}

const KeynoteSpeakers = ({ keyNote }: Props) => {
  return (
    <div className="mt-20">
      <h1 className="text-lg font-extrabold text-center">
        Keynote Speaker{keyNote.length > 1 ? "s" : ""}
      </h1>

      <div className="flex justify-center mt-8">
        <div
          className={`flex gap-5 ${
            keyNote.length === 1 ? "justify-center" : "flex-wrap"
          }`}
        >
          {keyNote.map((k) => (
            <div key={k.id} className="card-bg rounded-xl p-5 max-w-sm">
              <div className="flex gap-x-4">
                <img
                  src={k.img}
                  alt={k.name}
                  className="rounded-full w-16 h-16 border"
                />
                <div className="mt-1">
                  <p className="uppercase text-lg">{k.name}</p>
                  <p className="text-sm text-soft-text text-center">
                    {k.title}
                  </p>
                </div>
              </div>
              <p className="mt-6 text-soft-text">{k.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeynoteSpeakers;
