"use client";
import { useForm } from "react-hook-form";
import "@/app/globals.css";
import Link from "next/link";

interface FormData {
  dicas: string;
}

export default function EmConstrucao() {
  const methdos = useForm<FormData>();
  const { register, watch } = methdos;

  const preenchido = watch("dicas") !== null;

  return (
    <div className="m-auto  ">
      <div className="flex flex-col  my-10 gap-5 justify-center px-4  items-center">
        <h1 className="mx-auto my-auto mb-4 text-amber-950 text-center">
          Página em construção...
          <br /> Enquanto isso, siga para{" "}
          <span className="underline text-amber-950 font-bold">
            <Link href={"/exameConciencia"}> Exame de Consciência</Link>
          </span>
        </h1>
        <div className="sm:w-2/4 mx-auto p-4 bg-amber-950 rounded-lg flex items-center">
          <p className="mx-auto  ">
            Nos envie sua sugestão e dicas para melhorar a página:{" "}
            <Link
              href={"https://www.linkedin.com/in/emanuelbitencourt/"}
              className="underline "
            >
              BitencTech
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
