"use client";
import "@/app/globals.css";
import { LiturgiaType } from "./type";
import TituloPage from "@/components/tituloPage";
import { useEffect, useState } from "react";

export default function LiturgiaDiaria() {
  const [data, setData] = useState<LiturgiaType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState({
    dia: new Date().getDate().toString().padStart(2, "0"),
    mes: (new Date().getMonth() + 1).toString().padStart(2, "0"),
    ano: new Date().getFullYear().toString(),
  });

  // Gerar opções para os selects
  const dias = Array.from({ length: 31 }, (_, i) =>
    (i + 1).toString().padStart(2, "0")
  );
  const meses = Array.from({ length: 12 }, (_, i) =>
    (i + 1).toString().padStart(2, "0")
  );
  const anoAtual = new Date().getFullYear();
  const anos = Array.from({ length: 6 }, (_, i) =>
    (anoAtual - 5 + i).toString()
  );

  // Nomes dos meses para exibição
  const nomesMeses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  useEffect(() => {
    async function fetchLiturgia() {
      try {
        setError(null);
        const { dia, mes, ano } = selectedDate;
        const res = await fetch(
          `https://liturgia.up.railway.app/?dia=${dia}&mes=${mes}&ano=${ano}`,
          {
            cache: "no-store",
          }
        );
        const json = await res.json();

        // Verificar se há erro na resposta
        if (json.erro) {
          setError(json.erro);
          setData(null);
          return;
        }

        setData(json);
      } catch (err) {
        console.error("Erro ao buscar os dados:", err);
        setError(
          "Ocorreu um erro ao buscar a liturgia. Por favor, tente novamente."
        );
        setData(null);
      }
    }

    fetchLiturgia();
  }, [selectedDate]);

  const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSelectedDate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (!data && !error)
    return (
      <p className="text-center text-amber-950 font-bold text-lg my-4">
        Carregando...
      </p>
    );

  return (
    <div className="containerPanel relative">
      <TituloPage titulo="Liturgia Diária" />

      <div className="containerWhite">
        <div className="mb-6 flex flex-col items-center">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Selecione a data da liturgia:
          </label>
          <div className="flex space-x-2">
            <select
              name="dia"
              value={selectedDate.dia}
              onChange={handleDateChange}
              className="px-3  py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-center"
            >
              {dias.map((dia) => (
                <option key={dia} value={dia} className="text-center">
                  {dia}
                </option>
              ))}
            </select>

            <select
              name="mes"
              value={selectedDate.mes}
              onChange={handleDateChange}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-center"
            >
              {meses.map((mes, index) => (
                <option key={mes} value={mes} className="text-center">
                  {nomesMeses[index]}
                </option>
              ))}
            </select>

            <select
              name="ano"
              value={selectedDate.ano}
              onChange={handleDateChange}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-center"
            >
              {anos.map((ano) => (
                <option key={ano} value={ano} className="text-center">
                  {ano}
                </option>
              ))}
            </select>
          </div>
        </div>

        {error ? (
          <div className="p-6 bg-white border border-amber-900 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-amber-800 mb-2">
              Liturgia não encontrada
            </h2>
            <p className="text-amber-900">{error}</p>
            <p className="text-sm text-amber-900 mt-2">
              Por favor, selecione outra data.
            </p>
          </div>
        ) : (
          data && (
            <>
              <div className="containerGray">
                <h1 className="text-2xl font-bold text-gray-800">
                  {data.liturgia}
                </h1>
                <p className="text-sm text-gray-500">
                  {data.data} - Cor: {data.cor}
                </p>
              </div>

              <section className="liturgiaDiaria-itens">
                <h2 className="text-xl font-semibold">Oração do Dia</h2>
                <div className="ml-4">
                  <p className="text-gray-700">{data.dia}</p>
                </div>
              </section>

              <section className="liturgiaDiaria-itens">
                <h2 className="text-xl font-semibold">Primeira Leitura</h2>
                <p className="text-sm text-gray-500">
                  {data.primeiraLeitura.referencia}
                </p>
                <div className="ml-4">
                  <p className="font-semibold">{data.primeiraLeitura.titulo}</p>
                  <p className="text-gray-700">{data.primeiraLeitura.texto}</p>
                </div>
              </section>

              <section className="liturgiaDiaria-itens">
                <h2 className="text-xl font-semibold">Salmo Responsorial</h2>
                <p className="text-sm text-gray-500">{data.salmo.referencia}</p>
                <div className="ml-4">
                  <p className="italic font-semibold">{data.salmo.refrao}</p>
                  <p className="text-gray-700 whitespace-pre-line">
                    {data.salmo.texto}
                  </p>
                </div>
              </section>
              
              {typeof data.segundaLeitura === "object" && (
                <section className="liturgiaDiaria-itens">
                  <h2 className="text-xl font-semibold">Segunda Leitura</h2>
                  <p className="text-sm text-gray-500">
                    {data.segundaLeitura.referencia}
                  </p>
                  <div className="ml-4">
                    <p className="font-semibold">
                      {data.segundaLeitura.titulo}
                    </p>
                    <p className="text-gray-700">{data.segundaLeitura.texto}</p>
                  </div>
                </section>
              )}

              

              <section className="liturgiaDiaria-itens">
                <h2 className="text-xl font-semibold">Evangelho</h2>

                <p className="text-sm text-gray-500">
                  {data.evangelho.referencia}
                </p>
                <div className="ml-4">
                  <p className="font-semibold">{data.evangelho.titulo}</p>
                  <p className="text-gray-700">{data.evangelho.texto}</p>
                </div>
              </section>

              <section className="liturgiaDiaria-itens">
                <h2 className="text-xl font-semibold">Oferendas</h2>
                <div className="ml-4">
                  <p className="text-gray-700">{data.oferendas}</p>
                </div>
              </section>

              <section className="liturgiaDiaria-itens">
                <h2 className="text-xl font-semibold">Comunhão</h2>
                <div className="ml-4">
                  <p className="text-gray-700">{data.comunhao}</p>
                </div>
              </section>

              <section className="liturgiaDiaria-itens">
                <h2 className="text-xl font-semibold">Antífonas</h2>

                <p className="font-semibold">Entrada:</p>
                <div className="ml-4">
                  {" "}
                  <p className="text-gray-700">{data.antifonas.entrada}</p>
                </div>
                <p className="font-semibold mt-2">Comunhão:</p>
                <div className="ml-4">
                  {" "}
                  <p className="text-gray-700">{data.antifonas.comunhao}</p>
                </div>
              </section>
            </>
          )
        )}
      </div>
    </div>
  );
}
