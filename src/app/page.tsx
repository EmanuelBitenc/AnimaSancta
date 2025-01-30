"use client";
import { FormProvider, set, useForm } from "react-hook-form";
import "./globals.css";
import { redirect } from "next/navigation";
import Link from "next/link";
import TituloPage from "@/components/tituloPage";
import EmConstrucao from "@/components/emConstrucao";

interface FormData {
  dicas: string;
}

export default function Home() {
  const methods = useForm<FormData>();
  const { register, handleSubmit, watch } = methods;

  const onSubmit = (data: FormData) => {
    const subject = encodeURIComponent("Sugestão para melhorar a página");
    const body = encodeURIComponent(`Sugestão recebida:\n\n${data.dicas}`);
    const mailtoLink = `mailto:emanuelmagalhaes.bi@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  };

  return (
    <div>
      <TituloPage titulo="Seja bem-vindo" />

      <div className="flex flex-col items-center gap-6 px-6 ">
        <div className="containerWhite">
          <div className="flex flex-col gap-4 sm:gap-10 text-sm sm:text-lg text-center mx-auto bg-amber-950/20 rounded-lg p-2 sm:p-5">
            <p>
              Esta ferramenta foi desenvolvida para ajudar você a realizar seu
              exame de consciência de forma prática e organizada, facilitando o
              preparo para a confissão.
            </p>
            <p>Acessando o menu de navegação, você encontrará opções como</p>
            <p>
              <span className="underline text-amber-950 font-bold">
                {" "}
                <Link href={"/oracoes"}> Orações</Link>
              </span>{" "}
              que irão te ajudar a fazer um exame de consciência mais tranquilo
              e profundo, preparando seu coração para uma confissão sincera e
              cheia de renovação.
            </p>
            <p>
              <span className="underline text-amber-950 font-bold">
                <Link href={"/exameConciencia"}> Exame de Consciência</Link>
              </span>
              , que te ajudará a refletir sobre suas ações e sentimentos. À
              medida que você seleciona as perguntas, elas são adicionadas à sua
              confissão, e você pode ir detalhando cada uma. No final, você pode
              baixar tudo para levar com você no momento da confissão, para não
              esquecer nenhum detalhe importante.
            </p>
          </div>
        </div>

        <div>
          <EmConstrucao />
        </div>
      </div>
    </div>
  );
}
