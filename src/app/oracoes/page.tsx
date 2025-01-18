"use client";
import { useForm } from "react-hook-form";
import "@/app/globals.css";
import Link from "next/link";

interface FormData {
  dicas: string;
}

export default function Oracoes() {
  const methdos = useForm<FormData>();
  const { register, watch } = methdos;

  const preenchido = watch("dicas") !== null;

  return (
    <div className="mx-auto">
      <div className="flex flex-col  my-10 gap-5 justify-center px-4  items-center">
        <h1 className="mx-auto my-auto mb-4 text-amber-950 text-center">
          Página em construção...
          <br /> Enquanto isso, siga para{" "}
          <span className="underline text-amber-950 font-bold">
            <Link href={"/exameConciencia"}> Exame de Consciência</Link>
          </span>
        </h1>
        <div className="sm:w-2/4 mx-auto p-4 bg-amber-950 rounded-lg">
          <label className="flex flex-col gap-2">
            Nos envie sua sugestão e dicas para melhorar a página:
            <textarea
              {...register("dicas")}
              placeholder="Sugestões e dicas"
              required={preenchido}
              className="h-32 text-black p-2"
            ></textarea>
          </label>
        </div>
        <input
          className=" cursor-pointer px-4 py-2 rounded-full bg-amber-950 hover:bg-amber-950/80"
          type="submit"
          value="Enviar"
        />
      </div>
    </div>
  );
}
