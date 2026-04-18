"use client";
import Image from "next/image";

import imageOtimize from "@/app/assets/imgs/imageOtimize.jpg";
import { Nav } from "./nav";
import Link from "next/link";

export function Header() {
  return (
    <>
      <header className="bg-[#1a1a1a] relative border-b border-accent/30 shadow-md">
        <div className="w-full py-5 flex justify-center items-center bg-[#141414]">
          <Link href="/">
            <h1 className="font-cinzel text-4xl sm:text-5xl text-[#FDFBF7] font-semibold tracking-wide drop-shadow-sm transition-transform hover:scale-105 duration-300">
              AnimaSancta
            </h1>
          </Link>
        </div>
        <div className="relative w-full h-64 sm:h-[300px] md:h-[400px] lg:h-[500px] 2xl:h-[640px]">
          <Image
            src={imageOtimize}
            alt="Terço"
            fill
            style={{ objectFit: "cover", objectPosition: "bottom" }}
            className="opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-80"></div>
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        <div className="w-full bg-[#1a1a1a] text-[#FDFBF7] shadow-inner">
          <Nav />
        </div>
      </header>
    </>
  );
}
