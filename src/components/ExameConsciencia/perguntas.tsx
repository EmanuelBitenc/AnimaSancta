import { Mandamento, Pergunta } from "@/data/ListaExameConsciencia";

interface Perguntas {
  id: number;
  texto: string;
}

interface Props {
  perguntas: Pergunta[];
}

export const Perguntas = ({ perguntas }: Props) => {
  return (
    <ul className="w-11/12  ">
      {perguntas.map((pergunta: Pergunta) => (
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
              className="w-4 h-4 rounded-md"
            />
          </li>
        </div>
      ))}
    </ul>
  );
};
