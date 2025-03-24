import { FiChevronRight } from "react-icons/fi";

export const Resumo = () => {
  const resumo = [
    "Selecione um mandamento",
    "Leia as perguntas e reflita sobre",
    "Marque as perguntas e detalhe mais",
    "Preparasse para a confissão",
  ];

  return (
    <div className="px-6 pb-4">
      <div className="flex flex-col gap-2 text-sm sm:text-lg text-center  sm:max-w-4xl bg-white  mx-auto  rounded-lg shadow-md p-4 sm:p-6 text-gray-800">
        <div className=" text-sm sm:text-lg text-center  mx-auto bg-amber-950/20 rounded-lg py-5 px-2">
          <p>
            Fique tranquilo: nenhum dado é armazenado. Tudo é completamente
            privado. Paz e Bem!
          </p>

          <ol className="flex flex-col sm:flex-row mx-4 text-sm items-center py-4 font-semibold text-amber-950 justify-between ">
            {resumo.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex flex-col sm:flex-row items-center gap-4"
                >
                  <p className="sm:w-4/5 text-center"> {item}</p>

                  {index < resumo.length - 1 && (
                    <FiChevronRight
                      className={"rotate-90 sm:rotate-0 sm:w-4 sm:h-4 "}
                    />
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};
