import "../globals.css";
import { Lista } from "./listas";

export default function ExameConciencia() {
  return (
    <div className="min-h-[calc(100vh-532px)]">
      <h1 className="text-3xl font-bold text-center py-10">
        Exame de Consciência
      </h1>
      <Lista />
    </div>
  );
}
