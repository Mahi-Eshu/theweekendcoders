"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'

const NavBar = () => {
  const pathname = usePathname();

  const Links = [
    {
      name: "Services",
      href: "/services"
    },
    {
      name: "Our Works",
      href: "/our_works"
    },
    {
      name: "Contact Us",
      href: "/contact_us"
    }
  ]

  return (
    <div className="my-14 flex flex-row justify-between">
      <div>
        <Link href='/'><Image src="/images/logo.svg" width={300} height={300} alt="Logo" /></Link>
      </div>
      <div className="hidden md:flex md:flex-row md:justify-between md:items-center text-white text-lg gap-10 font-medium tracking-tight">
          {
            Links.map((link, index) => (
              <Link href={link.href} key={index} className={`relative font-medium ${pathname === link.href ? `underline underline-offset-8` : ` underline-offset-8 after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:top-7 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`}`}>{link.name}</Link>
            ))
          }
      </div>
    </div>
  );
};

export default NavBar;
