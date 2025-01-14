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
                  textoDetalhe: textoDetalhe || "Sem detalhes fornecidos",
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
    <div className="">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {lista.map((mandamento) => (
            <div key={mandamento.id} className="py-2">
              {/* Cabeçalho do mandamento */}
              <div
                className="flex gap-8 justify-between items-center cursor-pointer  text-amber-950 "
                onClick={() => handleClick(mandamento.id)}
              >
                <h2 className="sm:py-4 font-bold sm:text-xl flex-1">
                  {mandamento.texto}
                </h2>
                <FiChevronDown
                  className={`w-10 h-10 sm:w-8 sm:h-8 transform transition-transform duration-700 ${
                    painelOpen.includes(mandamento.id) ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Lista de perguntas */}
              {painelOpen.includes(mandamento.id) && (
                <div>
                  <ul className="w-11/12">
                    {mandamento.perguntas.map((pergunta) => (
                      <li key={pergunta.id} className="my-3">
                        <div className="py-4 sm:px-10 flex flex-col gap-2 justify-between px-3 hover:bg-amber-950/20 rounded-lg">
                          {/* Checkbox e Pergunta */}
                          <label className="flex justify-between gap-5 w-full items-center cursor-pointer text-sm sm:text-lg">
                            <span className="flex-1">{pergunta.texto}</span>
                            <input
                              type="checkbox"
                              {...register(
                                `mandamento${mandamento.id}.pergunta${pergunta.id}.checked`
                              )}
                              className="h-5 w-5 rounded-md p-2"
                            />
                          </label>

                          {/* Input para detalhes */}
                          {watch(
                            `mandamento${mandamento.id}.pergunta${pergunta.id}.checked`
                          ) && (
                            <input
                              type="text"
                              placeholder="Detalhe ..."
                              maxLength={200}
                              required={watch(
                                `mandamento${mandamento.id}.pergunta${pergunta.id}.checked`
                              )}
                              {...register(
                                `mandamento${mandamento.id}.pergunta${pergunta.id}.textoDetalhe`
                              )}
                              className="w-full px-3 py-2 rounded-lg text-black"
                            />
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
          <div className="w-fit flex  gap-4 px-4 py-2 bg-amber-950 rounded-full mt-8 mb-10 mx-auto">
            <input
              type="submit"
              value="Preparar para confissão "
              className="cursor-pointer"
            />
            <div className="flex items-center">
              <FiDownload />
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
