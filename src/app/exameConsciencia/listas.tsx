"use client";
import "@/app/globals.css";
import { FiChevronDown, FiDownload } from "react-icons/fi";
import { lista } from "@/data/ListaExameConsciencia";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { agruparPorMandamento, gerarPdf } from "../pdfCreate/pdfCreate";

export interface RespostaProps {
  mandamentoTexto: string;
  perguntaTexto: string;
  textoDetalhe: string;
}

interface Pergunta {
  id: number;
  texto: string;
}

interface Mandamento {
  id: number;
  texto: string;
  perguntas: Pergunta[];
}
interface FormularioData {
  [mandamentoKey: string]: {
    [perguntaKey: string]: {
      checked: boolean;
      textoDetalhe?: string;
    };
  };
}

export const Lista = () => {
  const methods = useForm();
  const { register, handleSubmit, watch, setValue } = methods;

  const [painelOpen, setPainelOpen] = useState<number[]>([]);

  const onSubmit = (data: FormularioData) => {
    const respostas = obterTexto(data);
    if (respostas.length === 0) {
      return;
    }
    gerarPdf(respostas);
  };

  const handleClick = (id: number) => {
    setPainelOpen((prevState) =>
      prevState.includes(id)
        ? prevState.filter((openId) => openId !== id)
        : [...prevState, id]
    );
  };

  const obterTexto = (data: FormularioData) => {
    const respostasComTexto: RespostaProps[] = [];

    Object.entries(data).forEach(([mandamentoId, perguntas]) => {
      const mandamento = lista.find(
        (m) => `mandamento${m.id}` === mandamentoId
      );

      if (mandamento) {
        Object.entries(perguntas).forEach(
          ([perguntaId, { checked, textoDetalhe }]) => {
            if (checked) {
              const pergunta = mandamento.perguntas.find(
                (p) => `pergunta${p.id}` === perguntaId
              );

              if (pergunta) {
                respostasComTexto.push({
                  mandamentoTexto: mandamento.texto,
                  perguntaTexto: pergunta.texto,
                  textoDetalhe: textoDetalhe || "",
                });
              }
            }
          }
        );
      }
    });

    return respostasComTexto;
  };

  return (
    <div className="select-none">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            {lista.map((mandamento, index) => {
              const isOpen = painelOpen.includes(mandamento.id);

              return (
                <div
                  key={mandamento.id}
                  className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-white/5 border-accent/30 shadow-lg shadow-accent/5"
                      : "bg-white/5 border-white/10 hover:border-white/20"
                  }`}
                >
                  {/* Cabeçalho do mandamento */}
                  <button
                    type="button"
                    className="w-full flex items-center gap-4 p-5 sm:p-6 cursor-pointer text-left"
                    onClick={() => handleClick(mandamento.id)}
                  >
                    <h2 className="font-cinzel font-semibold text-sm sm:text-lg text-accent flex-1 leading-snug">
                      {mandamento.texto}
                    </h2>
                    <FiChevronDown
                      className={`w-5 h-5 sm:w-6 sm:h-6 text-accent/60 flex-shrink-0 transform transition-transform duration-500 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Lista de perguntas */}
                  {isOpen && (
                    <div className="border-t border-white/10 px-4 sm:px-6 pb-5">
                      <ul className="divide-y divide-white/5">
                        {mandamento.perguntas.map((pergunta, pIndex) => {
                          const isChecked = watch(
                            `mandamento${mandamento.id}.pergunta${pergunta.id}.checked`
                          );

                          return (
                            <li key={pergunta.id} className="py-4 first:pt-5">
                              <label
                                className={`flex items-start gap-4 cursor-pointer group rounded-lg p-3 -mx-3 transition-colors ${
                                  isChecked ? "bg-accent/10" : "hover:bg-white/5"
                                }`}
                              >
                                {/* Custom checkbox */}
                                <div className="relative flex-shrink-0 mt-0.5">
                                  <input
                                    type="checkbox"
                                    {...register(
                                      `mandamento${mandamento.id}.pergunta${pergunta.id}.checked`
                                    )}
                                    className="sr-only peer"
                                  />
                                  <div
                                    className={`w-5 h-5 sm:w-6 sm:h-6 rounded-md border-2 transition-all flex items-center justify-center ${
                                      isChecked
                                        ? "bg-accent border-accent"
                                        : "border-gray-500 group-hover:border-accent/60"
                                    }`}
                                  >
                                    {isChecked && (
                                      <svg
                                        className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={3}
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M5 13l4 4L19 7"
                                        />
                                      </svg>
                                    )}
                                  </div>
                                </div>
                                <span
                                  className={`text-sm sm:text-base leading-relaxed flex-1 transition-colors ${
                                    isChecked ? "text-gray-100" : "text-gray-400"
                                  }`}
                                >
                                  {pergunta.texto}
                                </span>
                              </label>

                              {/* Input para detalhes */}
                              {isChecked && (
                                <div className="mt-3 ml-9 sm:ml-10">
                                  <input
                                    type="text"
                                    placeholder="Adicione um detalhe (opcional)..."
                                    maxLength={200}
                                    {...register(
                                      `mandamento${mandamento.id}.pergunta${pergunta.id}.textoDetalhe`
                                    )}
                                    className="w-full px-4 py-2.5 rounded-lg text-sm text-white bg-white/10 border border-accent/20 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent placeholder:text-gray-500 transition-colors"
                                  />
                                </div>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Botão de submit */}
          <div className="mt-10 mb-6 flex flex-col gap-5 items-center text-center">
            <p className="text-sm text-gray-400 max-w-lg leading-relaxed">
              O botão a seguir irá agrupar suas respostas em um arquivo PDF
              para que você leve contigo seu exame de consciência para a confissão.
            </p>
            <button
              type="submit"
              className="flex items-center gap-3 px-8 py-3.5 bg-accent text-white font-medium rounded-full hover:bg-accent/80 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 active:scale-95"
            >
              <FiDownload className="w-5 h-5" />
              Preparar para confissão
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
