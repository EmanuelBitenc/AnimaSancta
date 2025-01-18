import "../globals.css";
import { Lista } from "./listas";

import { Metadata } from "next";
import { Resumo } from "./resumo";
import TituloPage from "@/components/tituloPage";

export const metadata: Metadata = {
  title: "AnimaSancta - Exame de Consciência",
  description:
    "Página dedicada ao Exame de Consciência, ajudando você a refletir sobre suas ações à luz dos Dez Mandamentos. ",
};

export default function ExameConciencia() {
  return (
    <div className="mx-auto">
      <TituloPage titulo="Exame de Consciência" />
      <Resumo />
      <div className="w-10/12 sm:w-3/5 mx-auto  select-none">
        <Lista />
      </div>
    </div>
  );
}
