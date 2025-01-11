"use client";
import "@/app/globals.css";
import { FiChevronDown } from "react-icons/fi";
import { lista, Pergunta } from "@/data/ListaExameConsciencia";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { gerarPdf } from "../pdfCreate/pdfCreate";

export const Lista = () => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    gerarPdf(data);
  };

  // Função para gerar o PDF com os dados do formulário

  const [painelOpen, setPainelOpen] = useState<number[]>([]);

  function handleClick(id: number) {
    setPainelOpen((prevState) =>
      prevState.includes(id)
        ? prevState.filter((openId) => openId !== id)
        : [...prevState, id]
    );
  }
  const { register, setValue } = methods;

  const [checked, setChecked] = useState<{ [key: number]: boolean }>({});

  const handleCheckboxChange = (id: number, mandamentoId: number) => {
    setChecked((prev) => {
      const isChecked = !prev[id];

      // Atualizar o estado de `checked`
      const newChecked = { ...prev, [id]: isChecked };

      // Se o checkbox for desmarcado, limpar o campo de texto correspondente
      if (!isChecked) {
        // Limpar apenas o campo da pergunta desmarcada
        setValue(`mandamento${mandamentoId}.pergunta.${id}.texto`, "");
      }
      return newChecked;
    });
  };
  return (
    <div className="w-10/12 sm:w-3/5 mx-auto select-none">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {" "}
          {lista.map((mandamento, index) => (
            <div key={mandamento.id} className="py-2">
              <div
                className=" flex gap-8 justify-between items-center cursor-pointer  text-amber-950 z-10"
                onClick={() => handleClick(mandamento.id)}
              >
                <h2 className="sm:py-4 font-bold sm:text-lg ">
                  {mandamento.texto}
                </h2>
                <FiChevronDown
                  className={`w-10 h-10 sm:w-8 sm:h-8 transform transition-transform duration-700 ${
                    painelOpen.includes(mandamento.id) ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`transition-content ${
                  painelOpen.includes(mandamento.id) ? "open" : ""
                }`}
              >
                {painelOpen.includes(mandamento.id) && (
                  <div>
                    <ul className="w-11/12">
                      {mandamento.perguntas.map((pergunta: Pergunta) => (
                        <div key={pergunta.id} className="my-3">
                          <li className="py-4 sm:px-10 flex flex-col gap-2 justify-between px-3 hover:bg-amber-950/20 rounded-lg">
                            <label className="flex justify-between gap-5 w-full items-center cursor-pointer text-sm">
                              <span className="flex-1">{pergunta.texto}</span>
                              <input
                                className="h-5 w-5 rounded-md p-2"
                                checked={!!checked[pergunta.id]}
                                onChange={() =>
                                  handleCheckboxChange(
                                    pergunta.id,
                                    mandamento.id
                                  )
                                }
                                type="checkbox"
                              />
                            </label>
                            {checked[pergunta.id] && (
                              <input
                                type="text"
                                placeholder="Detalhe ..."
                                {...register(
                                  `mandamento${mandamento.id}.pergunta.${pergunta.id}.texto`
                                )}
                                className="w-full px-3 py-2 rounded-lg text-black"
                              />
                            )}
                          </li>
                        </div>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
          <input
            type="submit"
            value="Gerar exame"
            className="px-4 py-2 bg-amber-950 rounded-full mb-10  mx-auto block"
          />
        </form>
      </FormProvider>
    </div>
  );
};
