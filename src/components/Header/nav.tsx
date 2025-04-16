import Link from "next/link";
import { Links } from "./links";

export function Nav() {
  return (
    <nav className="py-2 ">
      <ul className="flex justify-center items-center flex-wrap gap-3 sm:gap-8 mx-5">
        <Links href="/" text="Home" />
        <Links href="/liturgiaDiaria" text="Liturgia Diária" />
        <Links href="/terco" text="Santo Terço" />
        <Links href="/porQueConfessar" text="Por que confessar?" />
        <Links href="/oracoes" text="Orações" />
        <Links href="/exameConsciencia" text="Exame de Consciência" />
        <Links href="/exameConscienciaDiario" text="Exame Diário " />
      </ul>
    </nav>
  );
}
