import "@/app/globals.css";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AnimaSancta - 404",
};

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-500px)] text-center py-10">
      <h1 className="mx-auto my-auto mb-4 text-accent text-3xl font-cinzel">
        404 - Página não encontrada
      </h1>
      <div className="bg-accent mx-auto w-11/12 sm:w-3/4 md:w-2/4 lg:w-1/4 rounded-lg p-3 text-white hover:bg-accent/80 transition-colors">
        <Link href="/">Voltar para Home</Link>
      </div>
    </div>
  );
}
