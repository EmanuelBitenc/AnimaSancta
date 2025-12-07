"use client";
import { FormProvider, set, useForm } from "react-hook-form";
import "./globals.css";
import { redirect } from "next/navigation";
import Link from "next/link";
import TituloPage from "@/components/tituloPage";
import Image from "next/image";
import homeImage from "@/app/assets/imgs/home.jpg";

interface FormData {
  dicas: string;
}

export default function Home() {
  const methods = useForm<FormData>();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center  overflow-x-hidden ">
      {/* Frase inspiradora */}
      <div className="relative z-10 w-full flex flex-col items-center mt-10 mb-4">
        <h2 className="fontFunnel text-2xl sm:text-4xl text-amber-950 drop-shadow-lg text-center mb-2 max-w-5xl">
          “No dia em que eu temer, hei de confiar em ti.”
        </h2>
        <span className="block text-amber-950 text-sm sm:text-lg italic mb-4">
          (Salmo 56:3)
        </span>
      </div>
      {/* Cards de navegação */}
      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-8">
        <SessaoHomeCard
          link="/liturgiaDiaria"
          titulo="Liturgia Diária"
          icon="📖"
          text="Aprofunde-se na Palavra de Deus e nas orações diárias da Igreja."
        />
        <SessaoHomeCard
          link="/terco"
          titulo="Santo Terço"
          icon="🕊️"
          text="Reze e medite os mistérios da vida de Jesus e Maria."
        />
        <SessaoHomeCard
          link="/oracoes"
          titulo="Orações"
          icon="🙏"
          text="Encontre orações para fortalecer sua fé e preparar seu coração."
        />
        <SessaoHomeCard
          link="/exameConscienciaDiario"
          titulo="Exame de Consciência Diário"
          icon="🌃"
          text="Reflexão diária para crescer na vida cristã."
        />
        <SessaoHomeCard
          link="/exameConsciencia"
          titulo="Exame de Consciência"
          icon="✝️"
          text="Prepare-se para a confissão com perguntas e reflexões guiadas."
        />
        <SessaoHomeCard
          link="/porQueConfessar"
          titulo="Por que Confessar?"
          icon="🕯️"
          text="Entenda a importância do sacramento da reconciliação."
        />
      </div>
    </div>
  );
}

// Novo componente de card estilizado
function SessaoHomeCard({
  link,
  titulo,
  text,
  icon,
}: {
  link: string;
  titulo: string;
  text: string;
  icon: string;
}) {
  return (
    <Link
      href={link}
      className="group  rounded-3xl shadow-lg bg-white/90 border border-amber-200 hover:border-amber-700 hover:shadow-2xl transition-all duration-300 p-6 min-h-[180px] flex flex-col items-center justify-center text-center gap-3 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-700"
    >
      <span className="text-4xl sm:text-5xl mb-2 drop-shadow-lg group-hover:scale-110 transition-transform">
        {icon}
      </span>
      <span className="fontFunnel text-xl sm:text-2xl text-amber-900 group-hover:text-amber-700 transition-colors">
        {titulo}
      </span>
      <span className="text-amber-800 text-sm sm:text-base opacity-90">
        {text}
      </span>
    </Link>
  );
}
