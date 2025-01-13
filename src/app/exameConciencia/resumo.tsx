import { FiChevronRight } from "react-icons/fi";

export const Resumo = () => {
  const resumo = [
    "Selecione um mandamento",
    "Leia as perguntas e reflita sobre",
    "Marque as perguntas e detalhe mais",
    "Preparasse para a confissão",
  ];

  return (
    <div className="flex flex-col gap-2 text-sm  sm:text-left w-10/12 max-w-screen-lg sm:w-5/5 mx-auto my-4">
      <p>
        Seja bem-vindo! Esta ferramenta foi desenvolvida para ajudar você a
        realizar seu exame de consciência de forma prática e organizada,
        facilitando o preparo para a confissão.
      </p>

      <ol className="flex flex-col sm:flex-row mx-4 text-sm items-center py-4 font-semibold text-amber-950">
        {resumo.map((item, index) => {
          return (
            <li
              key={index}
              className="flex flex-col sm:flex-row  gap-2 items-center mr-2"
            >
              <p className="sm:w-4/5"> {item}</p>

              {index < resumo.length - 1 && (
                <FiChevronRight
                  className={"rotate-90 sm:rotate-0 sm:w-4 sm:h-4 "}
                />
              )}
            </li>
          );
        })}
      </ol>

      <p>
        Fique tranquilo: nenhum dado é armazenado. Tudo é completamente privado.
        Paz e Bem!
      </p>
    </div>
  );
};
