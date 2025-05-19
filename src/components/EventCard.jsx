import React from "react";
import { MoreHorizontal, Clock, MapPin } from "lucide-react";

const EventCard = ({ event }) => {
  return (
    <div className="p-4 rounded-lg shadow-lg border border-gray-800 ">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-700 pb-2">
        <p className="text-yellow-400 text-xs font-bold">{event.date}</p>
        <button className="text-gray-400 hover:text-white">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Event Title */}
      <h3 className="mt-2 font-bold text-lg">{event.title}</h3>

      {/* Organizer */}
      <p className="text-gray-400 text-sm mt-1">
        Organized by{" "}
        <a href="#" className="text-blue-400 font-bold hover:underline">
          {event.organizer}
        </a>
      </p>

      {/* Attendees */}
      <p className="text-xs text-gray-500 mt-1">
        {event.attendees} people going
      </p>

      {/* Time & Location */}
      <div className="mt-2 text-xs text-gray-400 space-y-1">
        <p className="flex items-center gap-1">
          <Clock size={14} className="text-gray-500" />
          {event.time}
        </p>
        <p className="flex items-center gap-1">
          <MapPin size={14} className="text-gray-500" />
          {event.location}
        </p>
      </div>
    </div>
  );
};

const EventsList = ({ events }) => {
  return (
    <div className="max-w-lg mx-auto mt-6 space-y-4">
      {events.length > 0 ? (
        events.map((event, index) => <EventCard key={index} event={event} />)
      ) : (
        <p className="text-gray-400 text-center">No upcoming events.</p>
      )}
    </div>
  );
};

export default EventsList;
