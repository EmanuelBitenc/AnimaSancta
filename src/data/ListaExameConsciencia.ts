export interface Pergunta {
  id: number;
  pergunta: string;
  texto: string;
  textoDetalhe?: string;
}

export interface Mandamento {
  id: number;
  mandamento: string;
  perguntas: Pergunta[];
  texto: string;
}

export const lista: Mandamento[] = [
  {
    id: 1,
    mandamento: "primeiroMandamento",
    texto: "1º Mandamento: Amar a Deus sobre todas as coisas",
    perguntas: [
      {
        id: 1,
        pergunta: "primeiraPergunta",
        texto:
          "Coloquei Deus em primeiro lugar na minha vida ou priorizei outras coisas como trabalho, dinheiro ou prazeres?",
      },
      {
        id: 2,
        pergunta: "segundaPergunta",
        texto: "Rezei diariamente e busquei fortalecer minha fé?",
      },
    ],
  },
  {
    id: 2,
    mandamento: "segundoMandamento",
    texto: "2º Mandamento: Não tomar Seu Santo Nome em vão",
    perguntas: [
      {
        id: 3,
        pergunta: "primeiraPergunta",
        texto:
          "Usei o nome de Deus, de Jesus ou dos santos de forma desrespeitosa ou em vão?",
      },
      {
        id: 4,
        pergunta: "segundaPergunta",
        texto: "Jurei falsamente ou fiz promessas sem intenção de cumpri-las?",
      },
    ],
  },
];
