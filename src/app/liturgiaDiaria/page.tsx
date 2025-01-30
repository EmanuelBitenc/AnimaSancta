"use client";
import "@/app/globals.css";
import { LiturgiaType } from "./type";
import TituloPage from "@/components/tituloPage";
import { useEffect, useState } from "react";

export default function LiturgiaDiaria() {
  const [data, setData] = useState<LiturgiaType | null>(null);

  useEffect(() => {
    async function fetchLiturgia() {
      try {
        const res = await fetch("https://liturgia.up.railway.app/", {
          cache: "no-store",
        });
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Erro ao buscar os dados:", err);
      }
    }

    fetchLiturgia();
  }, []);

  if (!data) return <p>Carregando...</p>;
  return (
    <div className="containerPanel">
      <TituloPage titulo="Liturgia Diária" />

      <div className="containerWhite">
        <div className="containerGray">
          <h1 className="text-2xl font-bold text-gray-800">{data.liturgia}</h1>
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

        {typeof data.segundaLeitura === "object" && (
          <section className="liturgiaDiaria-itens">
            <h2 className="text-xl font-semibold">Segunda Leitura</h2>
            <p className="text-sm text-gray-500">
              {data.segundaLeitura.referencia}
            </p>
            <div className="ml-4">
              <p className="font-semibold">{data.segundaLeitura.titulo}</p>
              <p className="text-gray-700">{data.segundaLeitura.texto}</p>
            </div>
          </section>
        )}

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

        <section className="liturgiaDiaria-itens">
          <h2 className="text-xl font-semibold">Evangelho</h2>

          <p className="text-sm text-gray-500">{data.evangelho.referencia}</p>
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
      </div>
    </div>
  );
}
