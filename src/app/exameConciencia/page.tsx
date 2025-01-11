import "../globals.css";
import Layout from "../layout";
import { Lista } from "./listas";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AnimaSancta - Exame de Consciência",
  description:
    "Página dedicada ao Exame de Consciência, ajudando você a refletir sobre suas ações à luz dos Dez Mandamentos. ",
};

export default function ExameConciencia() {
  return (
    <div className="min-h-[calc(100vh-532px)]">
      <h1 className="text-3xl font-bold text-center py-10">
        Exame de Consciência
      </h1>
      <Lista />
    </div>
  );
}
