import "@/app/globals.css";
import EmConstrucao from "@/components/emConstrucao";
import TituloPage from "@/components/tituloPage";
import { oracoes } from "./data";

export default function Oracoes() {
  return (
    <div className="my-2">
      <TituloPage titulo="Orações" />
      <div className="space-y-6 text-sm   sm:p-6 mx-5 sm:mx-auto sm:w-3/4">
        {oracoes.map((oracao) => (
          <p key={oracao.id}>
            <span className="text-amber-950 font-semibold text-xl">
              {oracao.titulo}
            </span>
            <br />
            {oracao.oracao}
          </p>
        ))}
      </div>

      <div>
        <EmConstrucao />
      </div>
    </div>
  );
}
