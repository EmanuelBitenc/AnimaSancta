import { TituloSessao } from "./TituloSessao";

export const ExameDiario = () => {
  return (
    <div className="mt-6">
      <TituloSessao
        textOne="Reflexão sobre o Dia"
        textTwo="Pergunte a si mesmo:"
      />

      <ul className="list-disc pl-5 flex flex-col gap-2">
        <li>
          <span className="text-amber-950 font-semibold text-lg sm:text-xl">
            Gratidão:
          </span>{" "}
          <p>Agradeci a Deus pelas bênçãos de hoje?</p>
        </li>
        <li>
          <span className="text-amber-950 font-semibold text-lg sm:text-xl">
            Amor:
          </span>{" "}
          <p>Coloquei Deus e o próximo acima dos meus interesses?</p>
        </li>
        <li>
          <span className="text-amber-950 font-semibold text-lg sm:text-xl">
            Palavras e ações:
          </span>{" "}
          <p>
            Fui honesto, paciente e bondoso, ou deixei a mentira, a raiva ou a
            indiferença me guiarem?
          </p>
        </li>
        <li>
          <span className="text-amber-950 font-semibold text-lg sm:text-xl">
            Pureza:
          </span>{" "}
          <p>
            Cuidei dos meus pensamentos e desejos, ou me deixei levar por
            tentações?
          </p>
        </li>
        <li>
          <span className="text-amber-950 font-semibold text-lg sm:text-xl">
            Oração:
          </span>{" "}
          <p>
            Rezei hoje, mesmo que brevemente, ou ignorei minha vida espiritual?
          </p>
        </li>
        <li>
          <span className="text-amber-950 font-semibold text-lg sm:text-xl">
            Deveres:
          </span>{" "}
          <p>
            Fiz meu trabalho e responsabilidades com amor, ou fui negligente?
          </p>
        </li>
        <li>
          <span className="text-amber-950 font-semibold text-lg sm:text-xl">
            Perdão:
          </span>{" "}
          <p>Perdoei quem me magoou, ou guardei rancor?</p>
        </li>
      </ul>
    </div>
  );
};
