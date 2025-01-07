"use client";
import Image from "next/image";

import homePic from "@/app/assets/imgs/home.jpg";
import { Nav } from "./nav";
import Link from "next/link";

export function Header() {
  return (
    <>
      <header className=" bg-amber-950 ">
        <div style={{ position: "relative", width: "100%", height: "384px" }}>
          <Image
            src={homePic}
            alt="Terço"
            layout="fill"
            content="responsive"
            objectFit="cover"
            objectPosition="bottom right"
          />
        </div>
        <div className=" w-full ">
          <Nav />
        </div>
      </header>
    </>
  );
}
