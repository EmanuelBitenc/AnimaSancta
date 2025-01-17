"use client";
import { FormProvider, set, useForm } from "react-hook-form";
import "./globals.css";
import { redirect } from "next/navigation";
import Link from "next/link";

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

  const provs = true;

  const preenchido = watch("dicas") !== null;
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {provs ? (
          <div className="min-h-[calc(100vh-500px)] text-center py-10 ">
            <h1 className="mx-auto my-auto mb-4 text-amber-950">
              Página em construção...
            </h1>
            <div className=" bg-amber-950 mx-auto w-11/12 sm:w-3/4 md:w-2/4 lg:w-1/4 rounded-lg p-3">
              <Link href="/exameConciencia">Ir até o Exame de Conciência</Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col  my-20 gap-10 justify-center px-4  items-center">
            <div className="sm:w-2/4 mx-auto p-4 bg-amber-950 rounded-lg">
              <label className="flex flex-col gap-2">
                Nos envie sua sugestão e dicas para melhorar a página:
                {provs ? (
                  <div className=""></div>
                ) : (
                  <textarea
                    {...register("dicas")}
                    placeholder="Sugestões e dicas"
                    required={preenchido}
                    className="h-32 text-black p-2"
                  ></textarea>
                )}
              </label>
            </div>
            <input
              className=" cursor-pointer px-4 py-2 rounded-full bg-amber-950 hover:bg-amber-950/80"
              type="submit"
              value="Enviar"
            />
          </div>
        )}
      </form>
    </FormProvider>
  );
}
