import "@/app/globals.css";
import TituloPage from "@/components/tituloPage";
import { ExameDiario } from "./exameDiario";
import { Arrependimento } from "./arrependimento";

export default function exameConscienciaDiario() {
  return (
    <div className="relative">
      <TituloPage titulo="Exame de Consciência Diário" />

      <div>
        <div className="containerPanel relative">
          <div className="containerWhite">
            <div className="containerGray ">
              <p>
                Ao decorrer do dia, reserve alguns minutos para refletir na
                presença de Deus. Este exame rápido é um momento para agradecer,
                reconhecer suas falhas e pedir forças para o dia seguinte. Faça
                isso com simplicidade e coração aberto, confiando no amor e na
                misericórdia de Deus.
              </p>
            </div>
            <div className="text-sm sm:text-lg">
              <div>
                <ExameDiario />
              </div>
              <div>
                <Arrependimento />
              </div>
              <p className="text-amber-950 text-sm sm:text-xl mt-16 mb-4 text-center font-semibold">
                Pronto! Termine com um instante de silêncio, entregue-se à paz
                de Deus e fique tranquilo, sabendo que Ele está com você.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
