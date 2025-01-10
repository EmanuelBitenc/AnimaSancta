"use client";
import { FiChevronDown } from "react-icons/fi";
import { lista } from "./data";

export const Lista = () => {
  function ativo() {
    console.log("teste");
  }
  return (
    <div className="w-10/12 sm:w-3/5 mx-auto">
      {lista.map((mandamento) => (
        <div key={mandamento.id}>
          <div className=" flex gap-8 justify-between items-center cursor-pointer  text-amber-950">
            <h2 className="sm:py-4 font-bold sm:text-lg ">
              {mandamento.mandamento}
            </h2>
            <FiChevronDown className="w-10 h-10  sm:w-8 sm:h-8" />
          </div>
          <ul className="w-11/12  ">
            {mandamento.perguntas.map((pergunta) => (
              <div key={pergunta.id}>
                <li className="py-4 sm:px-10 flex flex-row  gap-4 justify-between items-center hover:bg-amber-950/20 rounded-lg">
                  <label
                    htmlFor={pergunta.pergunta}
                    className="w-11/12 text-sm sm:text-base"
                  >
                    {pergunta.pergunta}
                  </label>
                  <input
                    type="checkbox"
                    name={pergunta.pergunta}
                    onChange={ativo}
                    className="w-4 h-4 rounded-md"
                  />
                </li>
              </div>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
