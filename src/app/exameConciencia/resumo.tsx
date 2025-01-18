import { FiChevronRight } from "react-icons/fi";

export const Resumo = () => {
  const resumo = [
    "Selecione um mandamento",
    "Leia as perguntas e reflita sobre",
    "Marque as perguntas e detalhe mais",
    "Preparasse para a confissão",
  ];

  return (
    <div className="flex flex-col gap-2 text-sm sm:text-lg text-center  w-10/12 max-w-screen-lg sm:w-5/5 mx-auto my-4 bg-amber-950/20 rounded-lg p-5">
      <p>
        Fique tranquilo: nenhum dado é armazenado. Tudo é completamente privado.
        Paz e Bem!
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
  );
};
