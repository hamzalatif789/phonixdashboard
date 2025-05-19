import React, { useState } from "react";

import {
  FaImage,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTags,
  FaGlobe,
} from "react-icons/fa";
import {
  MoreHorizontal,
  Heart,
  MessageCircle,
  Share2,
  Reply,
  Users,
  UserCheck,
  Image,
  Calendar,
  Gamepad2,
  Settings,
  Clock,
  MapPin,
} from "lucide-react";

import assetProfile from "@/assets/images/23.webp";
import assetCover from "@/assets/images/11.png";

import one11 from "@/assets/images/11.png";
import one12 from "@/assets/images/12.png";
import one13 from "@/assets/images/13.png";
import one14 from "@/assets/images/14.png";
import one15 from "@/assets/images/15.png";
import one16 from "@/assets/images/16.png";
import EventsList from "./EventCard";
import PostFeed from "./PostFeed";
import PostCard from "./PostCard";
import SecondndPostFeed from "./2ndpostfeed";

const SocialOne = ({ event }) => {
  const photos = [one11, one12, one13, one14, one15, one16];

  const [coverImage, setCoverImage] = useState(assetCover);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(URL.createObjectURL(file));
    }
  };
  const messages = [
    {
      id: 1,
      name: "Stanly Drinkwater",
      message: "When you gonna pay me back, don’t leave me hanging",
      avatar: assetProfile, // Replace with actual image
      status: "online",
    },
    {
      id: 2,
      name: "Milind Mikuja",
      message: "But the mare fact that she said that makes",
      avatar: assetCover,
      status: "online",
    },
    {
      id: 3,
      name: "Josef Stravinsky",
      message: "Oi Cult.",
      avatar: assetProfile,
      status: "offline",
    },
    {
      id: 4,
      name: "Martina Scorcese",
      message: "Thanks for that. Sincerely.",
      avatar: assetCover,
      status: "online",
    },
    {
      id: 5,
      name: "Meekona Zikon",
      message: "I am Outside, Come here, Lets smoke...",
      avatar: assetProfile,
      status: "online",
    },
  ];

  const sampleEvents = [
    {
      date: "MON, FEB 21 - MARCH 23",
      title: "Master Class on FILM Studies THESIS on Makers",
      organizer: "IAFM - International Academy of Film and Media",
      attendees: "64",
      time: "12:30 PM - 10 PM",
      location: "Tavern on the Green, New York",
    },
    {
      date: "FRI, APRIL 10 - APRIL 12",
      title: "AI & Machine Learning Conference 2025",
      organizer: "TechWorld Expo",
      attendees: "230",
      time: "9:00 AM - 6:00 PM",
      location: "Silicon Valley Convention Center, CA",
    },
    {
      date: "SAT, MAY 15 - MAY 18",
      title: "React.js Developer Meetup",
      organizer: "React Dev Community",
      attendees: "180",
      time: "10:00 AM - 5:00 PM",
      location: "Google HQ, Mountain View",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full p-4 ">
      {/* LEFT COLUMN - Profile Info */}
      <div className="hidden md:block col-span-1 max-w-full md:max-w-[250px]">
        <div className="max-w-lg w-full sm:w-[90%] md:w-[80%] lg:w-full rounded-2xl shadow-lg overflow-hidden bg-white">
          {/* Cover Image */}
          <div className="relative mb-7 min-h-[130px] sm:min-h-[160px]">
            <div
              className="relative rounded-t-lg bg-cover bg-center min-h-[130px] sm:min-h-[160px] flex items-end"
              style={{
                backgroundImage: `linear-gradient(0deg, #000 -3%, rgba(0, 0, 0, 0) 83%), url(${coverImage})`,
              }}
            >
              <input
                type="file"
                id="upload-cover"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
              <label
                htmlFor="upload-cover"
                className="absolute bottom-2 right-2 text-white cursor-pointer p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 transition"
              >
                📷
              </label>
            </div>

            {/* Profile Image */}
            <div className="absolute bottom-[-20px] left-4 sm:left-6">
              <input type="file" id="upload-profile" className="hidden" />
              <label
                htmlFor="upload-profile"
                className="cursor-pointer flex items-center justify-center w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full border-4 border-white shadow-lg overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={assetProfile}
                  alt="Profile"
                />
              </label>
            </div>
          </div>

          {/* User Info */}
          <div className="pt-7 pb-6 px-6 sm:px-8">
            <h2 className="text-lg sm:text-xl font-bold">Ansolo Lazinatov</h2>
            <p className="text-sm text-gray-400">u/hansolo</p>

            {/* Followers & Following */}
            <div className="flex flex-wrap justify-between mt-2 text-sm">
              <div className="flex items-center gap-1">
                👥 <span>1297 Followers</span>
              </div>
              <div className="flex items-center gap-1">
                👤 <span>3971 Following</span>
              </div>
            </div>

            {/* About Me */}
            <div className="mt-4 text-sm">
              <p className="font-semibold">About me ✏️</p>
              <p className="text-gray-400 mt-1">
                “Le capitalisme exploite. Et le capitalisme exploite les gens de
                couleur...”
              </p>
            </div>
          </div>
        </div>

        {/* Profile Actions (Followers, Media, etc.) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-0 border border-gray-700 rounded-lg overflow-hidden mt-4">
          {[
            ["Followers", <UserCheck size={20} />],
            ["Communities", <Users size={20} />],
            ["Media", <Image size={20} />],
            ["Events", <Calendar size={20} />],
            ["Games", <Gamepad2 size={20} />],
            ["Settings", <Settings size={20} />],
          ].map(([label, icon], index) => (
            <div
              key={index}
              className="border-gray-700 p-4 flex flex-col items-center justify-center text-gray-400 hover:text-white transition"
            >
              {icon}
              <span className="text-sm font-semibold mt-2">{label}</span>
            </div>
          ))}
        </div>
        {/* messages section */}
        <div className="w-full md:max-w-lg mx-auto mt-6 rounded-lg shadow-lg p-4">
          {/* Header */}
          <div className="flex justify-between items-center border-b border-gray-700 pb-3 mb-3">
            <h3 className="text-lg font-semibold">
              Messages <span className="text-gray-400">(97)</span>
            </h3>
            <button className="">
              <MoreHorizontal />
            </button>
          </div>

          {/* Message List */}
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="flex items-center py-3 border-b border-gray-700 last:border-0 hover:bg-gray-800 transition rounded-lg px-2"
            >
              {/* Avatar & Status */}
              <div className="relative">
                <img
                  src={msg.avatar}
                  alt={msg.name}
                  className="w-8 h-8 rounded-full"
                />

                {msg.status === "online" && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-gray-900 rounded-full"></span>
                )}
              </div>

              {/* Name & Message */}
              <div className="ml-3 flex-1">
                <h5 className="font-semibold">{msg.name}</h5>
                <p className="text-gray-400 text-sm">
                  {msg.message.length > 20
                    ? msg.message.slice(0, 20) + "..."
                    : msg.message}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* photo section */}
        <div className="mb-8">
          {/* Header Section */}
          <div className="flex justify-between items-end pb-4">
            <h3 className="text-xl font-bold">Photos</h3>
            <div className="flex space-x-4 text-blue-400 text-sm font-semibold">
              <a href="#!" className="hover:underline">
                Albums
              </a>
              <a href="#!" className="hover:underline">
                See all
              </a>
            </div>
          </div>

          {/* Photos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
            {photos.map((photo, index) => (
              <a href={photo} key={index} data-gallery="gallery-photos">
                <img
                  src={photo}
                  alt={`Gallery ${index + 1}`}
                  className="w-full rounded-xl transition-transform duration-200 hover:scale-105"
                />
              </a>
            ))}
          </div>
        </div>
        {/* Event section */}
        <div className="mt-4 md:mt-6">
          <h3 className="text-xl font-bold">Events</h3>
          <a
            href="#!"
            className="text-blue-400 text-sm font-semibold hover:underline"
          >
            See more
          </a>
        </div>
        {/* Event card */}
        <div className=" min-h-screen">
          <h2 className="text-2xl font-bold text-center mb-6">
            Upcoming Events
          </h2>
          <EventsList events={sampleEvents} />
        </div>
      </div>

      {/* RIGHT COLUMN - Post Section */}
      <div className="col-span-1 md:col-span-3 md:ml-6">
        {/* Post Box */}
        <div className="w-full sm:w-[90%] md:max-w-3xl mx-auto h-auto p-3 rounded-lg shadow-md">
          <textarea
            className="w-full h-32 sm:h-36 bg-transparent border border-gray-700 rounded-md p-3 outline-none resize-none placeholder-gray-500"
            placeholder="Write something..."
          ></textarea>

          {/* Action Bar */}
          <div className="flex flex-col sm:flex-row sm:justify-between items-center mt-2 gap-3">
            <div className="flex items-center gap-2 sm:gap-3 text-gray-400">
              {[FaImage, FaCalendarAlt, FaMapMarkerAlt, FaTags, FaGlobe].map(
                (Icon, index) => (
                  <Icon
                    key={index}
                    className="cursor-pointer hover:text-gray-200"
                  />
                )
              )}
              <span>Public</span>
            </div>

            <button className="bg-blue-600 w-full sm:w-auto px-4 py-1.5 text-white rounded-md hover:bg-blue-700">
              Post
            </button>
          </div>
        </div>

        {/* Post Feed */}
        <div className=" mt-8 ">
          <PostFeed />
        </div>
        <div className=" mt-8 ">
          <PostCard />
        </div>
        <div className="">
          <SecondndPostFeed />
        </div>
      </div>
    </div>
  );
};

export default SocialOne;
