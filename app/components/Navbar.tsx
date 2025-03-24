"use client";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Reference",
    href: "/reference",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
];

export default function Navbar() {
  const pathName = usePathname();
  return (
    <nav className="flex bg-gray-600/20 backdrop-blur-sm py-6 2xl:px-82 text-white justify-between px-8 lg:px-0">
      <div className="flex items-center">
        <Link href={"/"}>
          <Image
            src={"/headphone.png"}
            alt="logo"
            width={40}
            height={40}
            className="bg-transparent invert"
          />
        </Link>
        <h1 className="ml-2 font-bold text-xl">alex sison</h1>
      </div>
      <div className="flex space-x-4 lg:flex-1 lg:ml-12 items-center">
        {navLinks.map((link) => (
          <div key={link.href}>
            <Link
              href={link.href}
              className={`${
                pathName === link.href
                  ? "font-bold underline underline-offset-4"
                  : "text-gray-500"
              }`}
            >
              {link.name}
            </Link>
          </div>
        ))}
      </div>
      <div className="md:flex items-center space-x-4 hidden">
        <HoverCard>
          <HoverCardTrigger className="cursor-pointer">Call</HoverCardTrigger>
          <HoverCardContent>+8170 3363 2542</HoverCardContent>
        </HoverCard>
        <button className="bg-white text-black px-8 rounded-full py-1">
          <a
            target="_blank"
            href="https://mail.google.com/mail/?view=cm&to=alexismortelsison@gmail.com&su=Hello&body=This%20is%20a%20test%20email"
          >
            Email
          </a>
        </button>
      </div>
    </nav>
  );
}
