import "@/app/globals.css";
import EmConstrucao from "@/components/emConstrucao";
import TituloPage from "@/components/tituloPage";
import { oracoes } from "./data";

export default function Oracoes() {
  return (
    <div className="my-2">
      <TituloPage titulo="Orações" />

      <div className="space-y-6 text-sm   sm:p-6 mx-5 sm:mx-auto sm:w-3/4">
        <div className=" text-sm sm:text-lg text-center  mx-auto mb-10 bg-amber-950/20 rounded-lg p-5">
          <p>
            As orações a seguir foram pensadas para te ajudar a se preparar para
            um bom exame de consciência. <br />
            <br />
            São momentos de reflexão e conexão com Deus, onde você pode pedir
            luz para enxergar seus caminhos com clareza e força para se
            transformar. Leia com calma, entregue seu coração e lembre-se: Deus
            sempre está disposto a te acolher!
          </p>
        </div>
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
