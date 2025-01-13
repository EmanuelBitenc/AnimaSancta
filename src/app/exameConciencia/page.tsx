import "../globals.css";
import { Lista } from "./listas";

import { Metadata } from "next";
import { Resumo } from "./resumo";

export const metadata: Metadata = {
  title: "AnimaSancta - Exame de Consciência",
  description:
    "Página dedicada ao Exame de Consciência, ajudando você a refletir sobre suas ações à luz dos Dez Mandamentos. ",
};

export default function ExameConciencia() {
  return (
    <div className="mx-auto">
      <h1 className="text-3xl font-bold text-center pt-10 pb-2">
        Exame de Consciência
      </h1>
      <Resumo />
      <div className="w-10/12 sm:w-3/5 mx-auto  select-none">
        <Lista />
      </div>
    </div>
  );
}
