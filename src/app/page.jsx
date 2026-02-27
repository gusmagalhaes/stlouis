import Link from "next/link";
import EventsSection from "./components/events-section";

const events = [
  { id: 1, title: "Wingsanity Dartmouth", city: "Dartmouth", location: "547 Portland St, Dartmouth, NS", dateShort: "JUN 1", href: "https://staging.admitone.com/events/city/community/food-drink/wingsanity-2026/MMUBY2" },
  { id: 2, title: "Wingsanity Dieppe", city: "Dieppe", location: "Rue Kennedy, Dieppe, NB", dateShort: "JUN 1", href: "https://staging.admitone.com/events/city/community/food-drink/wingsanity-2026/HX15R4" },
  { id: 3, title: "Wingsanity Charlottetown", city: "Charlottetown", location: "167 Minna Jane Dr, Charlottetown, PE", dateShort: "JUN 1", href: "https://staging.admitone.com/events/city/community/food-drink/wingsanity-2026/NTKEC0" },
  { id: 4, title: "Wingsanity Fredericton", city: "Fredericton", location: "711 Two Nations Crossing, Fredericton, NB", dateShort: "JUN 1", href: "https://staging.admitone.com/events/city/community/food-drink/wingsanity-2026/H06IB4" },
  { id: 5, title: "Wingsanity Calgary", city: "Calgary", location: "2200 Na'a Common Southwest, Calgary, AB", dateShort: "JUN 1", href: "https://staging.admitone.com/events/city/community/food-drink/wingsanity-2026/NYF35J" },
  { id: 6, title: "Wingsanity Edmonton", city: "Edmonton", location: "14222 28 Ave SW, Edmonton, AB", dateShort: "JUN 1", href: "https://staging.admitone.com/events/city/community/food-drink/wingsanity-2026/BE501X" },
  { id: 7, title: "Wingsanity St. Albert", city: "St. Albert", location: "375 St Albert Trl, St. Albert, AB", dateShort: "JUN 1", href: "https://staging.admitone.com/events/city/community/food-drink/wingsanity-2026/6GMXHT" },
  { id: 8, title: "Wingsanity Guelph", city: "Guelph", location: "202 Clair Rd E, Guelph, ON", dateShort: "JUN 1", href: "https://staging.admitone.com/events/city/community/food-drink/wingsanity-2026/KCKUYE" },
  { id: 9, title: "Wingsanity Grande Prairie", city: "Grande Prairie", location: "10602 67th Ave, Grande Prairie, AB", dateShort: "JUN 1", href: "https://staging.admitone.com/events/city/community/food-drink/wingsanity-2026/NNKHSB" },
  { id: 10, title: "Wingsanity Sault Ste. Marie", city: "Sault Ste. Marie", location: "293 Bay Street, Sault Ste. Marie, ON", dateShort: "JUN 1", href: "https://staging.admitone.com/events/city/community/food-drink/wingsanity-2026/VHX7N3" },
  { id: 11, title: "Wingsanity Sudbury", city: "Sudbury", location: "1835 Regent Street, Sudbury, ON", dateShort: "JUN 1", href: "https://staging.admitone.com/events/city/community/food-drink/wingsanity-2026/56J8R7" },
  { id: 12, title: "Wingsanity North Bay", city: "North Bay", location: "850 McKeown Avenue, North Bay, ON", dateShort: "JUN 1", href: "https://staging.admitone.com/events/city/community/food-drink/wingsanity-2026/TXJE7Q" },
  { id: 13, title: "Wingsanity Barrie", city: "Barrie", location: "353 Duckworth Street, Barrie, ON", dateShort: "JUN 1", href: "https://staging.admitone.com/events/city/community/food-drink/wingsanity-2026/ZFLCSU" },
  { id: 14, title: "Wingsanity Toronto (Bay St)", city: "Toronto", location: "595 Bay Street, Toronto, ON", dateShort: "JUN 1", href: "https://staging.admitone.com/events/city/community/food-drink/wingsanity-2026/S84PYG" },
  { id: 15, title: "Wingsanity Toronto (Yonge St)", city: "Toronto", location: "2050 Yonge St, Toronto, ON", dateShort: "JUN 1", href: "https://staging.admitone.com/events/city/community/food-drink/wingsanity-2026/ZETNEJ" },
  { id: 16, title: "Wingsanity Toronto (Bloor St)", city: "Toronto", location: "376 Bloor St W, Toronto, ON", dateShort: "JUN 1", href: "https://staging.admitone.com/events/city/community/food-drink/wingsanity-2026/HNR8C3" },
  { id: 17, title: "Wingsanity North York", city: "North York", location: "808 York Mills Rd, North York, Toronto, ON", dateShort: "JUN 1", href: "https://staging.admitone.com/events/city/community/food-drink/wingsanity-2026/XYC0VP" },
];

const cities = ["All Cities", ...new Set(events.map((e) => e.city).sort())];

export default function Home() {
  return (
    <>
      {/* Hero */}
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

      {/* Events grid */}
      <section className="bg-[#ffd100] px-6 pb-16 pt-12">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-black text-center uppercase text-[#1a1547] mb-12 mt-6">
            Get ready for wing madness.
          </h2>

          <EventsSection events={events} cities={cities} />
        </div>
      </section>

      {/* Footer CTA */}
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
