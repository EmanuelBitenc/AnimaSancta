import Link from "next/link";
import { Links } from "./links";

export function Nav() {
  return (
    <nav className="py-4 relative bg-[#1a1a1a]">
      <ul className="flex justify-center items-center flex-wrap gap-4 sm:gap-8 mx-5 font-inter text-[#FDFBF7] text-sm sm:text-base tracking-wide uppercase font-medium">
        <Links href="/" text="Home" />
        <Links href="/liturgiaDiaria" text="Liturgia Diária" />
        <Links href="/terco" text="Santo Terço" />
        <Links href="/porQueConfessar" text="Por que confessar?" />
        <Links href="/oracoes" text="Orações" />
        <Links href="/exameConsciencia" text="Exame de Consciência" />
        <Links href="/exameConscienciaDiario" text="Exame Diário" />
      </ul>
    </nav>
  );
}
