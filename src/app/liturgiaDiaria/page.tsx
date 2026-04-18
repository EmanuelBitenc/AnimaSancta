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

  const nomesMeses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
  ];

  useEffect(() => {
    async function fetchLiturgia() {
      try {
        setError(null);
        const { dia, mes, ano } = selectedDate;
        const res = await fetch(
          `https://liturgia.up.railway.app/?dia=${dia}&mes=${mes}&ano=${ano}`,
          { cache: "no-store" }
        );
        const json = await res.json();
        if (json.erro) {
          setError(json.erro);
          setData(null);
          return;
        }
        setData(json);
      } catch (err) {
        console.error("Erro ao buscar os dados:", err);
        setError("Ocorreu um erro ao buscar a liturgia. Por favor, tente novamente.");
        setData(null);
      }
    }
    fetchLiturgia();
  }, [selectedDate]);

  const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSelectedDate((prev) => ({ ...prev, [name]: value }));
  };

  if (!data && !error)
    return (
      <div className="flex items-center justify-center py-20">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
          <p className="text-accent font-medium text-lg">Carregando liturgia...</p>
        </div>
      </div>
    );

  return (
    <div className="containerPanel relative pb-10">
      <TituloPage titulo="Liturgia Diária" />

      {/* Seletor de Data */}
      <div className="w-full max-w-4xl mx-auto mb-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">Data:</span>
          <div className="flex gap-2">
            <select
              name="dia"
              value={selectedDate.dia}
              onChange={handleDateChange}
              className="px-4 py-2.5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-center bg-white/10 text-gray-200 appearance-none cursor-pointer hover:bg-white/15 transition-colors"
            >
              {dias.map((dia) => (
                <option key={dia} value={dia} className="bg-gray-800">{dia}</option>
              ))}
            </select>
            <select
              name="mes"
              value={selectedDate.mes}
              onChange={handleDateChange}
              className="px-4 py-2.5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-center bg-white/10 text-gray-200 appearance-none cursor-pointer hover:bg-white/15 transition-colors"
            >
              {meses.map((mes, index) => (
                <option key={mes} value={mes} className="bg-gray-800">{nomesMeses[index]}</option>
              ))}
            </select>
            <select
              name="ano"
              value={selectedDate.ano}
              onChange={handleDateChange}
              className="px-4 py-2.5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-center bg-white/10 text-gray-200 appearance-none cursor-pointer hover:bg-white/15 transition-colors"
            >
              {anos.map((ano) => (
                <option key={ano} value={ano} className="bg-gray-800">{ano}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {error ? (
        <div className="w-full max-w-4xl mx-auto p-8 bg-white/5 border border-accent/30 rounded-xl text-center">
          <h2 className="text-xl font-semibold text-accent mb-2">Liturgia não encontrada</h2>
          <p className="text-slate-300">{error}</p>
          <p className="text-sm text-slate-400 mt-2">Por favor, selecione outra data.</p>
        </div>
      ) : (
        data && (
          <div className="w-full max-w-4xl mx-auto flex flex-col gap-6">

            {/* Cabeçalho da Liturgia */}
            <div className="text-center py-6 px-4 bg-white/5 rounded-xl border border-white/10">
              <h1 className="font-cinzel text-2xl sm:text-3xl font-semibold text-gray-100 mb-2">
                {data.liturgia}
              </h1>
              <p className="text-sm text-gray-400">{data.data}</p>
              <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 bg-accent/15 rounded-full">
                <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                <span className="text-sm text-accent font-medium">Cor Litúrgica: {data.cor}</span>
              </div>
            </div>

            {/* Oração do Dia */}
            <LeituraCard titulo="Oração do Dia" emoji="🙏">
              <p className="text-gray-300 leading-relaxed">{data.dia}</p>
            </LeituraCard>

            {/* Primeira Leitura */}
            <LeituraCard
              titulo="Primeira Leitura"
              referencia={data.primeiraLeitura.referencia}
              emoji="📖"
            >
              <p className="font-semibold text-gray-200 mb-3">{data.primeiraLeitura.titulo}</p>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">{data.primeiraLeitura.texto}</p>
            </LeituraCard>

            {/* Salmo Responsorial */}
            <LeituraCard
              titulo="Salmo Responsorial"
              referencia={data.salmo.referencia}
              emoji="🎶"
            >
              <div className="bg-accent/10 border-l-4 border-accent px-4 py-3 rounded-r-lg mb-4">
                <p className="italic font-semibold text-accent">{data.salmo.refrao}</p>
              </div>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">{data.salmo.texto}</p>
            </LeituraCard>

            {/* Segunda Leitura (condicional) */}
            {typeof data.segundaLeitura === "object" && (
              <LeituraCard
                titulo="Segunda Leitura"
                referencia={data.segundaLeitura.referencia}
                emoji="📜"
              >
                <p className="font-semibold text-gray-200 mb-3">{data.segundaLeitura.titulo}</p>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">{data.segundaLeitura.texto}</p>
              </LeituraCard>
            )}

            {/* Evangelho */}
            <LeituraCard
              titulo="Evangelho"
              referencia={data.evangelho.referencia}
              emoji="✝️"
              destaque
            >
              <p className="font-semibold text-gray-200 mb-3">{data.evangelho.titulo}</p>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">{data.evangelho.texto}</p>
            </LeituraCard>

            {/* Oferendas e Comunhão lado a lado */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <LeituraCard titulo="Oferendas" emoji="🍷">
                <p className="text-gray-300 leading-relaxed">{data.oferendas}</p>
              </LeituraCard>
              <LeituraCard titulo="Comunhão" emoji="🍞">
                <p className="text-gray-300 leading-relaxed">{data.comunhao}</p>
              </LeituraCard>
            </div>

            {/* Antífonas */}
            <LeituraCard titulo="Antífonas" emoji="🎵">
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">Entrada</span>
                  <p className="text-gray-300 leading-relaxed mt-1">{data.antifonas.entrada}</p>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">Comunhão</span>
                  <p className="text-gray-300 leading-relaxed mt-1">{data.antifonas.comunhao}</p>
                </div>
              </div>
            </LeituraCard>

          </div>
        )
      )}
    </div>
  );
}

/* Componente de card reutilizável para cada seção da liturgia */
function LeituraCard({
  titulo,
  referencia,
  emoji,
  destaque,
  children,
}: {
  titulo: string;
  referencia?: string;
  emoji?: string;
  destaque?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`rounded-xl p-6 sm:p-8 border transition-colors ${
        destaque
          ? "bg-accent/5 border-accent/30"
          : "bg-white/5 border-white/10"
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        {emoji && <span className="text-2xl">{emoji}</span>}
        <div>
          <h2 className="font-cinzel text-lg sm:text-xl font-semibold text-accent">{titulo}</h2>
          {referencia && (
            <p className="text-xs text-gray-500 mt-0.5 uppercase tracking-wider">{referencia}</p>
          )}
        </div>
      </div>
      <div className="border-t border-white/5 pt-4">
        {children}
      </div>
    </section>
  );
}
