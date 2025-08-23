"use client";

import Link from "next/link";
import ClubLogo from "./club-logo";
import { Input } from "./ui/input";
import { CalendarRange, GraduationCap } from "lucide-react";
import SearchBar from "./search-bar";
import { usePathname } from "next/navigation";

interface ServiceProps {
  title: string;
  icon: React.ReactNode;
  active?: boolean;
}

export function Service({ title, icon, active }: ServiceProps) {
  return (
    <li>
      <button
        className={`px-6 py-2 text-sm uppercase font-bold border-b-2 inline-flex items-center gap-3 ${
          active ? "border-primary" : "border-transparent"
        }`}
      >
        {icon}
        {title}
      </button>
    </li>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="bg-card">
        <ul className="container mx-auto w-full flex flex-row items-center">
          <Service
            title="Profes"
            icon={<GraduationCap className="size-4.5" />}
            active
          />
          <Service
            title="Malla"
            icon={<CalendarRange className="size-4.5" />}
          />
        </ul>
      </div>
      <div className="grid-navbar p-6 container mx-auto items-center">
        <ClubLogo className="fill-foreground" />
        {pathname === "/" ? (
          <div></div>
        ) : (
          <SearchBar
            $size="normal"
            inputProps={{ className: "min-w-sm rounded-full" }}
          />
        )}
        <nav className="ml-auto">
          <ul className="flex flex-row items-center gap-6 font-mono uppercase text-sm font-bold">
            <li>
              <Link href="/feedback">Feedback</Link>
            </li>
            <li>
              <Link href="/devs">Devs</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
