import { jsPDF } from "jspdf";
import { RespostaProps } from "../exameConciencia/listas";
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

  const containerWidth = 180; //largura do container

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

  let y = 20; // Coordenada Y inicial no PDF

  // Usar a fonte "Tsukimi"
  doc.setFont("Tsukimi", "normal");

  // Adiciona o nome do logo

  doc.setFontSize(16);
  doc.text("AnimaSancta\n", getTextWidth("AnimaSancta"), y);

  // Usar a fonte "PoppinsRegular"
  doc.setFont("PoppinsRegular", "normal");
  y += 10;

  doc.setFontSize(14);
  doc.text("Exame de Consciência\n", getTextWidth("Exame de Consciência"), y);
  y += 20; // Ajusta o Y após o logo

  Object.entries(agrupado).forEach(([mandamentoTexto, perguntas]) => {
    doc.setFontSize(14);
    doc.text(`${mandamentoTexto}`, 10, y);
    y += 10;

    doc.setFontSize(12);
    perguntas.forEach((pergunta) => {
      // Divide o texto das perguntas para caber dentro do "container"
      const perguntaTexto = `• ${pergunta.perguntaTexto}`;
      const textoDetalhe = `- ${pergunta.textoDetalhe}`;

      const linhasPergunta: string[] = doc.splitTextToSize(
        perguntaTexto,
        containerWidth
      );

      // Adiciona a pergunta no PDF
      linhasPergunta.forEach((linha) => {
        doc.text(linha, 10, y);
        y += 10;
      });
      y += 2;

      const linhas: string[] = doc.splitTextToSize(
        textoDetalhe,
        containerWidth
      );

      // Adiciona cada linha dentro do "container" com a quebra de linha automática
      linhas.forEach((linha) => {
        doc.text(linha, 20, y);
        y += 10;

        // Quebra de página se Y exceder o limite
        if (y > 280) {
          doc.addPage();
          y = 10;
        }
      });

      y += 1; // Espaçamento entre as perguntas
    });

    y += 2; // Espaçamento entre mandamentos
  });

  doc.save("exameDeConsciencia.pdf");
};
