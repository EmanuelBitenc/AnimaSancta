import "@/app/globals.css";
import TituloPage from "@/components/tituloPage";
import { oracoes } from "./data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AnimaSancta - Orações",
};

export default function Oracoes() {
  return (
    <div className="relative">
      <TituloPage titulo="Orações" />

      <div className="containerPanel relative">
        <div className="containerWhite">
          <div className="containerGray ">
            <p>
              As orações a seguir foram pensadas para te ajudar a se preparar
              para um bom exame de consciência. <br />
              <br />
              São momentos de reflexão e conexão com Deus, onde você pode pedir
              luz para enxergar seus caminhos com clareza e força para se
              transformar. Leia com calma, entregue seu coração e lembre-se:
              Deus sempre está disposto a te acolher!
            </p>
          </div>
          <div className="mt-6">
            {oracoes.map((oracao) => (
              <div key={oracao.id} className="mb-5">
                <h1 className="text-amber-950 font-semibold text-xl">
                  {oracao.titulo}
                </h1>
                <p>{oracao.oracao}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
