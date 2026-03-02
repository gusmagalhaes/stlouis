import Link from "next/link";
import EventsSection from "../components/events-section";
import { events, cities } from "../data/events";

export default function LandingPage() {
  return (
    <>
      <section
        className="relative text-white text-center py-20 px-6"
        style={{
          backgroundImage: "url(/header.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight">
          Wingsanity
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-xl mx-auto opacity-90">
          The hottest wing events across Canada. Find one near you.
        </p>
      </section>

      <section className="bg-[#ffd100] px-6 pb-16 pt-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center uppercase text-[#1a1547] mb-12 mt-6">
            Get ready for wing madness.
          </h2>
          <EventsSection events={events} cities={cities} />
        </div>
      </section>

      <section
        className="text-white text-center py-16 px-6"
        style={{
          backgroundImage: "url(/header.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-3xl md:text-4xl font-black uppercase">
          Don&apos;t Miss Out
        </h2>
        <p className="mt-3 opacity-80 max-w-md mx-auto">
          Follow us for early access, exclusive deals, and event updates.
        </p>
        <Link
          href="#"
          className="inline-flex items-center gap-2 mt-6 bg-[#e41e2b] text-white font-bold px-8 py-3 rounded-full hover:bg-[#c9171f] transition-colors text-lg"
        >
          LEARN MORE
          <svg width="16" height="16" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 7h12M8 2l5 5-5 5" />
          </svg>
        </Link>
      </section>
    </>
  );
}
