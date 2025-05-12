"use client";
import "@/app/globals.css";
import TituloPage from "@/components/tituloPage";
import { useState } from "react";
import { misterios, oracoesComuns } from "./data";

export default function Terco() {
  const [tipoMisterio, setTipoMisterio] = useState<string>("gozosos");
  const [misterioAtual, setMisterioAtual] = useState<number>(0);
  const [aveMariaAtual, setAveMariaAtual] = useState<number>(0);
  const [mostrarOracao, setMostrarOracao] = useState<boolean>(false);
  const [oracaoAtual, setOracaoAtual] = useState<string>("");

  const misteriosSelecionados =
    misterios[tipoMisterio as keyof typeof misterios].misterios;
  const misterio = misteriosSelecionados[misterioAtual];

  const avancarAveMaria = () => {
    if (aveMariaAtual < 9) {
      setAveMariaAtual(aveMariaAtual + 1);
    } else {
      setAveMariaAtual(0);
      if (misterioAtual < 4) {
        setMisterioAtual(misterioAtual + 1);
      } else {
        setMisterioAtual(0);
        setTipoMisterio("gozosos");
      }
    }
  };

  const mostrarOracaoComum = (oracao: string) => {
    setOracaoAtual(oracao);
    setMostrarOracao(true);
  };

  const fecharOracao = () => {
    setMostrarOracao(false);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      fecharOracao();
    }
  };

  return (
    <div className="containerPanel relative">
      <TituloPage titulo="Santo Terço" />

      <div className="containerWhite">
        <div className="mb-4 sm:mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Selecione os Mistérios:
          </label>
          <select
            value={tipoMisterio}
            onChange={(e) => {
              setTipoMisterio(e.target.value);
              setMisterioAtual(0);
              setAveMariaAtual(0);
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-950"
          >
            <option value="gozosos">Mistérios Gozosos</option>
            <option value="luminosos">Mistérios Luminosos</option>
            <option value="dolorosos">Mistérios Dolorosos</option>
            <option value="gloriosos">Mistérios Gloriosos</option>
          </select>
        </div>

        <div className="mb-4 sm:mb-6">
          <h2 className="text-lg sm:text-xl font-semibold text-amber-800 mb-2">
            {misterios[tipoMisterio as keyof typeof misterios].titulo}
          </h2>
          <div className="bg-amber-50 p-3 sm:p-4 rounded-lg">
            <h3 className="font-bold text-amber-900 text-sm sm:text-base">
              {misterio.titulo}
            </h3>
            <p className="text-amber-800 italic text-sm sm:text-base">
              {misterio.subtitulo}
            </p>
            <p className="text-xs sm:text-sm text-amber-700 mt-2">
              {misterio.referencia}
            </p>
            <p className="mt-2 text-amber-800 text-sm sm:text-base">
              {misterio.texto}
            </p>
            <p className="mt-3 text-amber-900 font-medium text-sm sm:text-base">
              {misterio.intencao}
            </p>
          </div>
        </div>

        <div className="mb-4 sm:mb-6">
          <h3 className="text-base sm:text-lg font-semibold text-amber-800 mb-2">
            Orações Iniciais
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <button
              onClick={() =>
                mostrarOracaoComum(oracoesComuns.sinalDaCruz.texto)
              }
              className="px-3 sm:px-4 py-2 bg-amber-100 text-amber-800 rounded-md hover:bg-amber-200 transition-colors text-left text-sm sm:text-base"
            >
              {oracoesComuns.sinalDaCruz.titulo}
            </button>
            <button
              onClick={() =>
                mostrarOracaoComum(oracoesComuns.oferecimento.texto)
              }
              className="px-3 sm:px-4 py-2 bg-amber-100 text-amber-800 rounded-md hover:bg-amber-200 transition-colors text-left text-sm sm:text-base"
            >
              {oracoesComuns.oferecimento.titulo}
            </button>
            <button
              onClick={() => mostrarOracaoComum(oracoesComuns.creio.texto)}
              className="px-3 sm:px-4 py-2 bg-amber-100 text-amber-800 rounded-md hover:bg-amber-200 transition-colors text-left text-sm sm:text-base"
            >
              {oracoesComuns.creio.titulo}
            </button>
            <button
              onClick={() => mostrarOracaoComum(oracoesComuns.paiNosso.texto)}
              className="px-3 sm:px-4 py-2 bg-amber-100 text-amber-800 rounded-md hover:bg-amber-200 transition-colors text-left text-sm sm:text-base"
            >
              {oracoesComuns.paiNosso.titulo}
            </button>
          </div>
        </div>

        <div className="mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 mb-4">
            <span className="text-amber-800 font-medium text-sm sm:text-base">
              Ave Maria {aveMariaAtual + 1}/10
            </span>
            <button
              onClick={avancarAveMaria}
              className="w-full sm:w-auto px-4 py-2 bg-amber-950 text-white rounded-md hover:bg-amber-900 transition-colors text-sm sm:text-base"
            >
              Próxima Ave Maria
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-sm sm:text-base ${
                  index <= aveMariaAtual
                    ? "bg-amber-950 text-white"
                    : "bg-amber-950/20 text-amber-800"
                }`}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4 sm:mb-6">
          <h3 className="text-base sm:text-lg font-semibold text-amber-800 mb-2">
            Orações Finais
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <button
              onClick={() => mostrarOracaoComum(oracoesComuns.gloria.texto)}
              className="px-3 sm:px-4 py-2 bg-amber-100 text-amber-800 rounded-md hover:bg-amber-200 transition-colors text-left text-sm sm:text-base"
            >
              {oracoesComuns.gloria.titulo}
            </button>
            <button
              onClick={() =>
                mostrarOracaoComum(oracoesComuns.agradecimento.texto)
              }
              className="px-3 sm:px-4 py-2 bg-amber-100 text-amber-800 rounded-md hover:bg-amber-200 transition-colors text-left text-sm sm:text-base"
            >
              {oracoesComuns.agradecimento.titulo}
            </button>
            <button
              onClick={() =>
                mostrarOracaoComum(oracoesComuns.salveRainha.texto)
              }
              className="px-3 sm:px-4 py-2 bg-amber-100 text-amber-800 rounded-md hover:bg-amber-200 transition-colors text-left text-sm sm:text-base"
            >
              {oracoesComuns.salveRainha.titulo}
            </button>
            <button
              onClick={() =>
                mostrarOracaoComum(oracoesComuns.indulgencia.texto)
              }
              className="px-3 sm:px-4 py-2 bg-amber-100 text-amber-800 rounded-md hover:bg-amber-200 transition-colors text-left text-sm sm:text-base"
            >
              {oracoesComuns.indulgencia.titulo}
            </button>
          </div>
        </div>
      </div>

      {mostrarOracao && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          onClick={handleOverlayClick}
        >
          <div className="bg-white rounded-lg p-4 sm:p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg sm:text-xl font-semibold text-amber-800">
                {
                  Object.entries(oracoesComuns).find(
                    ([_, oracao]) => oracao.texto === oracaoAtual
                  )?.[1].titulo
                }
              </h3>
              <button
                onClick={fecharOracao}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="text-amber-800 whitespace-pre-line text-sm sm:text-base">
              {oracaoAtual}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
