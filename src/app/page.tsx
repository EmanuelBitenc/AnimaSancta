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
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-x-hidden pt-12 pb-20">
      {/* Frase inspiradora */}
      <div className="relative z-10 w-full flex flex-col items-center mt-10 mb-12 px-4">
        <h2 className="font-cinzel font-semibold text-3xl sm:text-4xl md:text-5xl text-amber-100 drop-shadow-sm text-center mb-4 max-w-4xl leading-tight">
          “No dia em que eu temer, hei de confiar em ti.”
        </h2>
        <span className="block text-slate-400 font-inter text-sm sm:text-lg italic mb-4">
          (Salmo 56:3)
        </span>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent mt-4"></div>
      </div>
      
      {/* Cards de navegação */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
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
    <Link href={link} className="sessao-card group">
      <span className="sessao-card-icon">{icon}</span>
      <h3 className="sessao-card-title">{titulo}</h3>
      <p className="sessao-card-text">{text}</p>
    </Link>
  );
}
