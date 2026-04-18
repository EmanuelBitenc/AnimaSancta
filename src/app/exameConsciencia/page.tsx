import "../globals.css";
import { Lista } from "./listas";

import { Metadata } from "next";
import { Resumo } from "./resumo";
import TituloPage from "@/components/tituloPage";

export const metadata: Metadata = {
  title: "AnimaSancta - Exame de Consciência",
};

export default function ExameConsciencia() {
  return (
    <div className="mx-auto relative pb-10">
      <TituloPage titulo="Exame de Consciência" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Resumo />
        <Lista />
      </div>
    </div>
  );
}
