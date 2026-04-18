import { FiChevronRight, FiShield, FiCheckCircle, FiEdit3, FiDownload } from "react-icons/fi";

export const Resumo = () => {
  const passos = [
    { icon: <FiShield className="w-5 h-5" />, texto: "Selecione um mandamento" },
    { icon: <FiCheckCircle className="w-5 h-5" />, texto: "Reflita sobre as perguntas" },
    { icon: <FiEdit3 className="w-5 h-5" />, texto: "Marque e detalhe" },
    { icon: <FiDownload className="w-5 h-5" />, texto: "Prepare-se para a confissão" },
  ];

  return (
    <div className="mb-8">
      {/* Mensagem de privacidade */}
      <div className="text-center mb-6 py-3 px-4 bg-accent/10 rounded-lg border border-accent/20">
        <p className="text-sm text-accent">
          🔒 Fique tranquilo: nenhum dado é armazenado. Tudo é completamente privado. Paz e Bem!
        </p>
      </div>

      {/* Passos */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {passos.map((passo, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 py-4 px-3 bg-white/5 rounded-xl border border-white/10 text-center"
          >
            <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center text-accent">
              {passo.icon}
            </div>
            <span className="text-xs sm:text-sm text-gray-300 font-medium leading-tight">
              {passo.texto}
            </span>
            <span className="text-xs text-accent font-bold">{index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
