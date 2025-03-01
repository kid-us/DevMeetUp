import { BookHeart, CalendarFold, MapPinHouse, User } from "lucide-react";
import EventDetail, { Event } from "../EventDetail";

const Version2 = () => {
  const Event: Event[] = [
    {
      id: 1,
      icon: CalendarFold,
      title: "Date",
      content: "Mar 15, 2024 | 9:00 AM",
    },
    {
      id: 2,
      icon: MapPinHouse,
      title: "Venue",
      content: "ALX Hub, Addis Ababa",
    },
    {
      id: 3,
      icon: BookHeart,
      title: "Organizers",
      content: "CodeNight Community Admins",
    },
    {
      id: 4,
      icon: User,
      title: "Participants",
      content: "200+ developers and tech professionals",
    },
  ];

  return (
    <div className="pt-16">
      <EventDetail
        title="Dev MeetUp v2"
        subTitle="We are Back with Bigger Blast :)"
        description="Join us for an exciting day of tech talks, workshops, and networking opportunities!"
        icons={Event}
      />
    </div>
  );
};

export default Version2;
