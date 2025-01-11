import { Mandamento, Pergunta } from "@/data/ListaExameConsciencia";
import jsPDF from "jspdf";

export const gerarPdf = (data: Mandamento) => {
  const doc = new jsPDF();

  // Adiciona o título
  doc.setFontSize(16);
  doc.text("Exame de Consciência", 50, 20, { align: "justify" });

  // Adiciona os dados do formulário
  let y = 30;
  for (let mandamentoId in data) {
    const mandamento = data[mandamentoId];
    doc.setFontSize(12);
    doc.text(`Mandamento: ${mandamentoId}`, 20, y);
    y += 10;

    mandamento.pergunta.forEach((pergunta: Pergunta, perguntaId: string) => {
      doc.text(`Pergunta: ${pergunta.texto}`, 20, y);
      y += 10;
      if (pergunta.texto) {
        doc.text(`Detalhe: ${pergunta.textoDetalhe}`, 20, y);
        y += 10;
      }
    });
    y += 10;
  }

  // Salva o PDF
  doc.save("exame_de_consciencia.pdf");
};
