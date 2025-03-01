import { BookHeart, CalendarFold, MapPinHouse, User } from "lucide-react";
import EventDetail, { Event } from "../EventDetail";

const Version3 = () => {
  const Event: Event[] = [
    {
      id: 1,
      icon: CalendarFold,
      title: "Date",
      content: "Feb 22, 2025 | 9:00 AM",
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
      content: "Temikin Mengistu(chapi), Meron Abate",
    },
    {
      id: 4,
      icon: User,
      title: "Participants",
      content: "300+ developers and tech professionals",
    },
  ];

  return (
    <div className="pt-16">
      <EventDetail
        title="Dev MeetUp v3"
        subTitle="We're Back—Bigger, Bolder, and Better Than Ever!"
        description="Join us for an amazing event! Don't miss out. Event has happened! See you at V4"
        icons={Event}
      />
    </div>
  );
};

export default Version3;
