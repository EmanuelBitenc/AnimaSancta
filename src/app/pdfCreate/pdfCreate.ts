import { jsPDF } from "jspdf";
import { RespostaProps } from "../exameConsciencia/listas";
import { PoppinsRegular } from "../assets/fonts/PoppinsRegular";
import { Tsukimi } from "../assets/fonts/TsukimiRounded";

export const agruparPorMandamento = (respostas: RespostaProps[]) => {
  const agrupado: {
    [mandamentoTexto: string]: {
      perguntaTexto: string;
      textoDetalhe: string;
    }[];
  } = {};

  respostas.forEach((resposta) => {
    if (!agrupado[resposta.mandamentoTexto]) {
      agrupado[resposta.mandamentoTexto] = [];
    }
    agrupado[resposta.mandamentoTexto].push({
      perguntaTexto: resposta.perguntaTexto,
      textoDetalhe: resposta.textoDetalhe,
    });
  });

  return agrupado;
};

const TsukimiBase64 = Tsukimi;
const PoppinsRegularBase64 = PoppinsRegular;

export const gerarPdf = (respostas: RespostaProps[]) => {
  const agrupado = agruparPorMandamento(respostas);
  const doc = new jsPDF({});

  const containerWidth = 180; // Largura do texto
  const pageHeight = doc.internal.pageSize.height;

  function getTextWidth(text: string) {
    const larguraTexto = doc.getTextWidth(text);
    const larguraPagina = doc.internal.pageSize.width;
    const xCentralizado = (larguraPagina - larguraTexto) / 2;
    return xCentralizado;
  }

  // Adicionar as fontes ao VFS
  doc.addFileToVFS("PoppinsRegular.ttf", PoppinsRegularBase64);
  doc.addFileToVFS("Tsukimi.ttf", TsukimiBase64);

  // Registrar as fontes
  doc.addFont("PoppinsRegular.ttf", "PoppinsRegular", "normal");
  doc.addFont("Tsukimi.ttf", "Tsukimi", "normal");

  let y = 20;

  // Cabeçalho
  doc.setFont("Tsukimi", "normal");
  doc.setFontSize(18);
  doc.text("AnimaSancta", getTextWidth("AnimaSancta"), y);

  doc.setFont("PoppinsRegular", "normal");
  y += 10;
  doc.setFontSize(16);
  doc.text("Exame de Consciência", getTextWidth("Exame de Consciência"), y);

  y += 10;
  doc.setLineWidth(0.5);

  doc.setDrawColor(200, 200, 200);
  doc.line(10, y - 5, 200, y - 5); // Linha separadora
  y += 2;
  // Conteúdo principal
  Object.entries(agrupado).forEach(([mandamentoTexto, perguntas]) => {
    // Título do Mandamento
    doc.setFontSize(14);
    doc.setTextColor(54, 21, 3); // Cor texto
    doc.text(`${mandamentoTexto}`, 10, y);
    y += 10;

    // Perguntas e Detalhes
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0); // Preto
    perguntas.forEach((pergunta) => {
      const perguntaTexto = `• ${pergunta.perguntaTexto}`;
      const textoDetalhe = `- ${pergunta.textoDetalhe}`;

      // Divide a pergunta
      const linhasPergunta: string[] = doc.splitTextToSize(
        perguntaTexto,
        containerWidth
      );
      linhasPergunta.forEach((linha) => {
        doc.text(linha, 10, y);
        y += 8;
      });

      const linhasDetalhe: string[] = doc.splitTextToSize(
        textoDetalhe,
        containerWidth - 10
      );
      linhasDetalhe.forEach((linha) => {
        doc.text(linha, 20, y);
        y += 8;

        if (y > pageHeight - 20) {
          doc.addPage();
          y = 10;
        }
      });

      y += 2; // Espaçamento entre perguntas
    });

    y += 4; // Espaçamento entre mandamentos
    doc.setDrawColor(200, 200, 200); // Cinza claro
    doc.line(10, y - 4, 200, y - 4); // Linha separadora entre mandamentos
    y += 4;
  });

  doc.save("exameDeConsciencia.pdf");
};
