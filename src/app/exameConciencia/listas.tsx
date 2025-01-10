"use client";
import "@/app/globals.css";
import { FiChevronDown } from "react-icons/fi";
import { lista } from "@/data/ListaExameConsciencia";
import { Perguntas } from "@/components/ExameConsciencia/perguntas";
import Form from "next/form";
import { use, useState } from "react";

export const Lista = () => {
  const [painelOpen, setPainelOpen] = useState<number[]>([]);

  function handleClick(id: number) {
    setPainelOpen((prevState) =>
      prevState.includes(id)
        ? prevState.filter((openId) => openId !== id)
        : [...prevState, id]
    );
  }

  return (
    <div className="w-10/12 sm:w-3/5 mx-auto select-none">
      <Form action="">
        {" "}
        {lista.map((mandamento, index) => (
          <div key={mandamento.id} className="py-2">
            <div
              className=" flex gap-8 justify-between items-center cursor-pointer  text-amber-950"
              onClick={() => handleClick(mandamento.id)}
            >
              <h2 className="sm:py-4 font-bold sm:text-lg ">
                {mandamento.mandamento}
              </h2>
              <FiChevronDown
                className={`w-10 h-10 sm:w-8 sm:h-8 transform transition-transform duration-700 ${
                  painelOpen.includes(mandamento.id) ? "rotate-180" : ""
                }`}
              />
            </div>
            {painelOpen.includes(mandamento.id) && (
              <div>
                <Perguntas perguntas={mandamento.perguntas} />
              </div>
            )}
          </div>
        ))}
        <button
          type="submit"
          value=""
          className="px-4 py-2 bg-amber-950 rounded-full "
        >
          Gerar exame
        </button>
      </Form>
    </div>
  );
};
