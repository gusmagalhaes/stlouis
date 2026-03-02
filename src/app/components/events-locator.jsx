"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import EventsMap from "./events-map";

export default function EventsLocator({ events, cities }) {
  const [search, setSearch] = useState("");
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [selectedId, setSelectedId] = useState(events[0]?.id ?? null);

  const filteredEvents = useMemo(() => {
    const q = search.toLowerCase();
    let res = events.filter(
      (e) =>
        e.title.toLowerCase().includes(q) ||
        e.city.toLowerCase().includes(q) ||
        e.location.toLowerCase().includes(q)
    );
    if (selectedCity !== "All Cities") {
      res = res.filter((e) => e.city === selectedCity);
    }
    return res;
  }, [search, selectedCity, events]);

  const selectedEvent =
    filteredEvents.find((e) => e.id === selectedId) ?? filteredEvents[0];

  return (
    <main className="max-w-6xl mx-auto px-4 py-8 flex flex-col gap-6 lg:flex-row lg:gap-8">
      <section className="w-full lg:w-[40%] min-w-0 flex flex-col gap-4">
        <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-3 shrink-0">
          <div className="flex gap-2 flex-wrap">
            <input
              type="text"
              placeholder="Search for city name, street, etc."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 min-w-[140px] px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#e41e2b]"
            />
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm font-semibold text-[#1a1547] focus:outline-none focus:ring-2 focus:ring-[#e41e2b]"
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 overflow-y-auto max-h-[520px] pr-1 content-start min-h-0 flex-1">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedId(event.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setSelectedId(event.id);
              }}
              className={`flex h-[200px] bg-[#f0f0f0] rounded-xl overflow-hidden cursor-pointer transition-all duration-200 shadow hover:shadow-md ${
                selectedEvent && event.id === selectedEvent.id
                  ? "ring-2 ring-[#e41e2b] shadow-lg"
                  : ""
              }`}
            >
              <div className="w-1/2 min-h-[140px] shrink-0 relative overflow-hidden bg-gray-200">
                <Image
                  src="/poster.png"
                  alt="Wingsanity"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 200px"
                />
              </div>
              <div className="flex flex-col justify-between p-4 min-h-[140px] flex-1 min-w-0">
                <div className="min-w-0">
                  <h3 className="text-lg font-extrabold uppercase text-[#1a1547] leading-tight wrap-break-word">
                    {event.title}
                  </h3>
                  <p className="text-sm mt-1 text-gray-600 line-clamp-2" title={event.location}>
                    {event.location}
                  </p>
                  <p className="text-sm mt-1 border border-gray-300 rounded-md px-2 py-1 inline-flex font-bold w-fit">
                    {event.dateShort}
                  </p>
                </div>
                <Link
                  href={event.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-block w-fit text-sm font-black text-white bg-[#1a1547] px-4 py-1.5 rounded mt-3 hover:bg-[#e41e2b] transition-colors"
                >
                  GET NOW
                </Link>
              </div>
            </div>
          ))}

          {filteredEvents.length === 0 && (
            <p className="text-center text-sm text-[#1a1547]/70 py-8">
              No events match your search. Try another city or search.
            </p>
          )}
        </div>
      </section>

      <section className="w-full lg:flex-1">
        <EventsMap
          events={filteredEvents}
          selectedEvent={selectedEvent}
        />
      </section>
    </main>
  );
}
