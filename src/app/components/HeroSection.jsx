import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="my-24 tracking-[-3px]">
      <div className="leading-tight">
        <h1 className="text-white text-[64px] font-normal">
          Coffee, Code, Clients.
        </h1>
        <h1 className="text-white text-[96px] font-normal">
          That's Our Weekend.
        </h1>
      </div>
      <Link href="/contact_us"><button className="my-10 px-20 py-10 backdrop-blur-lg text-white text-2xl font-medium border-b-2 border-white rounded-full">Work With Us</button></Link>
      <h1 className="text-[#B8B8B8] text-4xl text-center my-10">We are experts in</h1>
    <div className="flex flex-row justify-between items-center gap-10 text-5xl text-white backdrop-blur-lg p-8 rounded-full">
        <p>ReactJS</p>
        <p>NextJS</p>
        <p>MongoDB</p>
        <p>Figma</p>
        <p>WebFlow</p>
    </div>
    </div>
  );
};

export default HeroSection;
