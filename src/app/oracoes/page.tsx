import "@/app/globals.css";
import EmConstrucao from "@/components/emConstrucao";
import TituloPage from "@/components/tituloPage";
import { oracoes } from "./data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AnimaSancta - Orações",
};

export default function Oracoes() {
  return (
    <div>
      <TituloPage titulo="Orações" />

      <div className="flex flex-col items-center gap-6 px-6   text-gray-800">
        <div className="max-w-4xl bg-white p-6 rounded-lg shadow-md">
          <div className=" text-sm sm:text-lg text-center  mx-auto mb-10 bg-amber-950/20 rounded-lg p-5">
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
      <div>
        <EmConstrucao />
      </div>
    </div>
  );
}
