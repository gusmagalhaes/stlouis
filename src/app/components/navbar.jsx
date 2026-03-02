import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "MENU", href: "#menu" },
  { label: "FIND US", href: "/" },
  { label: "WINGSANITY", href: "/landing" },
  { label: "FRANCHISING", href: "#franchising" },
  { label: "GIFT CARDS", href: "#gift-cards" },
];

export default function Navbar() {
  return (
    <nav className="relative w-full">
      <div className="h-[3px] bg-[#e41e2b]" />

      <div
        className="relative flex items-center justify-between px-6 py-2"
        style={{
          backgroundImage: "url(/header.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex items-center gap-6">
          <Link href="/" className="flex flex-col items-start shrink-0">
            <Image
              src="/logo.png"
              alt="St. Louis Bar & Grill"
              width={120}
              height={40}
              priority
            />
            <span className="text-[10px] font-bold tracking-[0.15em] text-white uppercase -mt-1">
              Bar & Grill
            </span>
          </Link>

          <div className="hidden md:flex flex-col text-white text-xs leading-tight">
            <span className="font-semibold">My St. Louis</span>
            <span className="flex items-center gap-1 opacity-80">
              Select Location
              <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <ul className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-white text-sm font-bold tracking-wide hover:text-red-400 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#order"
            className="flex items-center gap-2 bg-[#e41e2b] text-white text-sm font-bold px-5 py-2 rounded-full hover:bg-[#c9171f] transition-colors"
          >
            ORDER NOW
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 7h12M8 2l5 5-5 5" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="h-[3px] bg-[#e41e2b]" />
    </nav>
  );
}
