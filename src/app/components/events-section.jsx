"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function EventsSection({ events, cities }) {
  const [selectedCity, setSelectedCity] = useState("All Cities");

  const filteredEvents =
    selectedCity === "All Cities"
      ? events
      : events.filter((e) => e.city === selectedCity);

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <label htmlFor="city-select" className="text-[#1a1547] font-bold text-sm uppercase tracking-wide">
          Filter by city
        </label>
        <select
          id="city-select"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="w-full sm:w-56 px-4 py-2.5 rounded-lg border-2 border-[#1a1547] bg-white text-[#1a1547] font-semibold focus:outline-none focus:ring-2 focus:ring-[#e41e2b] focus:border-transparent"
        >
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filteredEvents.map((event) => (
          <Link
            key={event.id}
            href={event.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex bg-[#f0f0f0] rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200"
          >
            <div className="w-1/2 min-h-[220px] shrink-0 relative overflow-hidden bg-gray-200">
              <Image
                src="/poster.png"
                alt="Wingsanity"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>

            <div className="flex flex-col justify-between p-4 min-h-[140px]">
              <div>
                <h3 className="text-lg font-extrabold uppercase text-[#1a1547] group-hover:text-[#e41e2b] transition-colors">
                  {event.title}
                </h3>
                <p className="text-sm mt-1" title={event.location}>
                  {event.location}
                </p>
                <p className="text-sm mt-1 border border-gray-300 rounded-md px-2 py-1 inline-flex font-bold">
                  {event.dateShort}
                </p>
              </div>

              <span className="inline-block w-fit text-sm font-black text-white bg-[#1a1547] px-4 py-1.5 rounded mt-3">
                GET NOW
              </span>
            </div>
          </Link>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <p className="text-center text-[#1a1547]/70 py-12">
          No events in this city. Try selecting another.
        </p>
      )}
    </>
  );
}
