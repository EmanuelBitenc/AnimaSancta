"use client";
import { FormProvider, set, useForm } from "react-hook-form";
import "./globals.css";
import { redirect } from "next/navigation";
import Link from "next/link";
import TituloPage from "@/components/tituloPage";
import EmConstrucao from "@/components/emConstrucao";
import { SessaoHome } from "@/components/SessaoHome";

interface FormData {
  dicas: string;
}

export default function Home() {
  const methods = useForm<FormData>();

  return (
    <div>
      <TituloPage titulo="Seja bem-vindo" />

      <div className="flex flex-col items-center gap-6 px-6 ">
        <div className="containerWhite">
          <div className="flex flex-col gap-4 sm:gap-10 text-sm sm:text-lg text-pretty mx-auto bg-amber-950/20 rounded-lg p-2 sm:p-5">
            <p className="text-center">
              Esta ferramenta foi desenvolvida para ajudar você a realizar seu
              exame de consciência de forma prática e organizada, facilitando o
              preparo para a confissão.
            </p>
            <p className="text-center">
              Acessando o menu de navegação, você encontrará opções como
            </p>
            <SessaoHome
              link="/liturgiaDiaria"
              titulo="Liturgia Diária"
              text=", acompanhando a Liturgia do Dia de Hoje e mergulhe nas orações,
              leituras e reflexões que nos ajudam a viver e crescer na fé. A
              Liturgia Diária é uma oportunidade para se conectar mais
              profundamente com a Palavra de Deus e com os ensinamentos da
              Igreja, oferecendo momentos de oração e meditação que fortalecem o
              espírito e renovam a nossa caminhada cristã."
            />
            <SessaoHome
              link="/terco"
              titulo="Santo Terço"
              text=", uma poderosa devoção mariana que nos ajuda a meditar nos mistérios da vida de Jesus e Maria. Reze o terço conosco, seguindo os mistérios gozosos, luminosos, dolorosos e gloriosos, enquanto acompanha as orações e meditações."
            />
            <SessaoHome
              link="/oracoes"
              titulo="Orações"
              text="
              que irão te ajudar a fazer um exame de consciência mais tranquilo
              e profundo, preparando seu coração para uma confissão sincera e
              cheia de renovação."
            />
            <SessaoHome
              link="/exameConscienciaDiario"
              titulo="Exame de Consciência Diário"
              text=", para que durante o dia você possa ir refletindo rapidamente sobre suas ações. Simples e prático, pode ser feito a qualquer momento, fortalecendo sua conexão com Deus e renovando sua caminhada cristã."
            />

            <SessaoHome
              link="/exameConsciencia"
              titulo="Exame de Consciência"
              text=", que te ajudará a refletir sobre suas ações e sentimentos. À
              medida que você seleciona as perguntas, elas são adicionadas à sua
              confissão, e você pode ir detalhando cada uma. No final, você pode
              baixar tudo para levar com você no momento da confissão, para não
              esquecer nenhum detalhe importante."
            />
          </div>
        </div>

        <div>
          <EmConstrucao />
        </div>
      </div>
    </div>
  );
}
