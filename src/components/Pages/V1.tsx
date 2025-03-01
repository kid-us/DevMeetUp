import { BookHeart, CalendarFold, MapPinHouse, User } from "lucide-react";
import EventDetail, { Event } from "../EventDetail";
import KeynoteSpeakers, { KeyNote } from "../KeynoteSpeakers";
import { chapi } from "../../assets";

const Version1 = () => {
  const event: Event[] = [
    {
      id: 1,
      icon: CalendarFold,
      title: "Date",
      content: "Sep 10, 2023 | 9:00 AM",
    },
    {
      id: 2,
      icon: MapPinHouse,
      title: "Venue",
      content: "Addis Amba Hotel, Addis Ababa",
    },
    {
      id: 3,
      icon: BookHeart,
      title: "Organizers",
      content: "Temikin Mengistu(chapi), Meron Abate",
    },
    {
      id: 4,
      icon: User,
      title: "Participants",
      content: "100+ developers and tech professionals",
    },
  ];

  const keyNoteSpeakers: KeyNote[] = [
    {
      id: 1,
      name: "Temkin Mengistu(Chapi)",
      img: chapi,
      title: "Senior Backend Developer",
      desc: "Specialize in building robust, scalable backend systems and automating development workflows. Expertise in Django, Docker, Python, NodeJS",
    },
  ];

  return (
    <div className="pt-16">
      <EventDetail
        title="Dev MeetUp v1"
        subTitle="Everything started here :)"
        description="Self sponsered by Chapi and in colab with Meron, the first dev meetup
        featured Join an exciting day of tech talks, workshops, and networking
        opportunities!"
        icons={event}
      />

      <KeynoteSpeakers keyNote={keyNoteSpeakers} />
    </div>
  );
};

export default Version1;
