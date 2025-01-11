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
        textoDetalhe: "",
      },
      {
        id: 2,
        pergunta: "segundaPergunta",
        texto: "Rezei diariamente e busquei fortalecer minha fé?",
        textoDetalhe: "",
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
        textoDetalhe: "",
      },
      {
        id: 4,
        pergunta: "segundaPergunta",
        texto: "Jurei falsamente ou fiz promessas sem intenção de cumpri-las?",
        textoDetalhe: "",
      },
    ],
  },
  {
    id: 3,
    mandamento: "terceiroMandamento",
    texto: "3º Mandamento: Santificar os domingos e festas",
    perguntas: [
      {
        id: 5,
        pergunta: "primeiraPergunta",
        texto:
          "Fui à missa aos domingos e nas festas obrigatórias ou negligenciei esse dever?",
        textoDetalhe: "",
      },
      {
        id: 6,
        pergunta: "segundaPergunta",
        texto:
          "Descansei adequadamente no domingo e fiz dele um dia de oração e descanso?",
        textoDetalhe: "",
      },
    ],
  },
  {
    id: 4,
    mandamento: "quartoMandamento",
    texto: "4º Mandamento: Honrar pai e mãe",
    perguntas: [
      {
        id: 7,
        pergunta: "primeiraPergunta",
        texto: "Respeitei meus pais e cuidei deles quando necessário?",
        textoDetalhe: "",
      },
      {
        id: 8,
        pergunta: "segundaPergunta",
        texto:
          "Fui desobediente ou rebelde contra a autoridade dos meus pais ou responsáveis?",
        textoDetalhe: "",
      },
    ],
  },
  {
    id: 5,
    mandamento: "quintoMandamento",
    texto: "5º Mandamento: Não matar",
    perguntas: [
      {
        id: 9,
        pergunta: "primeiraPergunta",
        texto:
          "Desejei ou pensei em fazer mal a alguém, inclusive com ódio ou vingança?",
        textoDetalhe: "",
      },
      {
        id: 10,
        pergunta: "segundaPergunta",
        texto:
          "Fui imprudente ao dirigir ou em outras situações que colocaram em risco minha vida ou a de outros?",
        textoDetalhe: "",
      },
    ],
  },
  {
    id: 6,
    mandamento: "sextoMandamento",
    texto: "6º Mandamento: Não cometer adultério",
    perguntas: [
      {
        id: 11,
        pergunta: "primeiraPergunta",
        texto: "Fui infiel ao meu cônjuge ou cometi pensamentos impuros?",
        textoDetalhe: "",
      },
      {
        id: 12,
        pergunta: "segundaPergunta",
        texto:
          "Fui desrespeitoso no trato com as pessoas, provocando escândalos ou comportamentos imorais?",
        textoDetalhe: "",
      },
    ],
  },
  {
    id: 7,
    mandamento: "setimoMandamento",
    texto: "7º Mandamento: Não roubar",
    perguntas: [
      {
        id: 13,
        pergunta: "primeiraPergunta",
        texto: "Roubei ou tomei algo que não me pertencia?",
        textoDetalhe: "",
      },
      {
        id: 14,
        pergunta: "segundaPergunta",
        texto: "Fui injusto nos meus negócios ou em minhas finanças?",
        textoDetalhe: "",
      },
    ],
  },
  {
    id: 8,
    mandamento: "oitavoMandamento",
    texto: "8º Mandamento: Não levantar falso testemunho",
    perguntas: [
      {
        id: 15,
        pergunta: "primeiraPergunta",
        texto: "Falei mentiras sobre alguém ou espalhei boatos prejudiciais?",
        textoDetalhe: "",
      },
      {
        id: 16,
        pergunta: "segundaPergunta",
        texto: "Fui desonesto ou omiti a verdade em situações importantes?",
        textoDetalhe: "",
      },
    ],
  },
  {
    id: 9,
    mandamento: "nonoMandamento",
    texto: "9º Mandamento: Não cobiçar a mulher do próximo",
    perguntas: [
      {
        id: 17,
        pergunta: "primeiraPergunta",
        texto: "Desejei ou cobicei a esposa de outra pessoa?",
        textoDetalhe: "",
      },
      {
        id: 18,
        pergunta: "segundaPergunta",
        texto:
          "Fui desrespeitoso com o casamento de outros ou contribui para destruição de uma família?",
        textoDetalhe: "",
      },
    ],
  },
  {
    id: 10,
    mandamento: "decimoMandamento",
    texto: "10º Mandamento: Não cobiçar os bens alheios",
    perguntas: [
      {
        id: 19,
        pergunta: "primeiraPergunta",
        texto: "Cobicei bens materiais de outra pessoa de forma invejosa?",
        textoDetalhe: "",
      },
      {
        id: 20,
        pergunta: "segundaPergunta",
        texto:
          "Fui ganancioso ou me deixei dominar pela busca de riquezas e bens materiais?",
        textoDetalhe: "",
      },
    ],
  },
];
