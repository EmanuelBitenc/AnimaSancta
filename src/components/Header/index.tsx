"use client";
import Image from "next/image";

import imageOtimize from "@/app/assets/imgs/imageOtimize.jpg";
import { Nav } from "./nav";
import Link from "next/link";

export function Header() {
  return (
    <>
      <header className=" bg-amber-950 relative">
        <div className=" w-full py-3  flex justify-center items-center">
          <Link href="/exameConsciência">
            <h1 className="fontTsuki text-4xl ">AnimaSancta</h1>
          </Link>
        </div>
        <div className="relative w-full h-64 sm:h-[300px] md:h-[400px] lg:h-[500px] 2xl:h-[640px]">
          <Image
            src={imageOtimize}
            alt="Terço"
            layout="fill"
            content="responsive"
            objectFit="cover"
            objectPosition="bottom"
          />
        </div>
        <div className="w-full bg-amber-950 ">
          <Nav />
        </div>
      </header>
    </>
  );
}
