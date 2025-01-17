"use client";
import Image from "next/image";

import image from "@/app/assets/imgs/image.jpg";
import { Nav } from "./nav";
import Link from "next/link";

export function Header() {
  return (
    <>
      <header className=" bg-amber-950 ">
        <div className=" w-full py-3  flex justify-center items-center">
          <Link href="/exameConciencia">
            <h1 className="fontTsuki text-4xl ">AnimaSancta</h1>
          </Link>
        </div>
        <div className="relative w-full h-64 sm:h-[300px] md:h-[400px] lg:h-[500px] 2xl:h-[640px]">
          <Image
            src={image}
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
