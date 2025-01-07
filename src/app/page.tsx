import Image from "next/image";
import "./globals.css";

import homePic from "@/app/assets/imgs/home.jpg";

export default function Home() {
  return (
    <main className="flex-grow bg-orange-100/80 ">
      <div className="relative  w-full h-96">
        <Image
          src={homePic}
          alt="Terço"
          layout="fill"
          content="responsive"
          objectFit="cover"
          objectPosition="right"
          priority={true} // Carregamento prioritário para a imagem principal
        />
        <div className="relative  w-full h-96 bg-black opacity-30"></div>
      </div>
      <div className="h- w-full"></div>
    </main>
  );
}
