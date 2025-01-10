interface Pergunta {
  id: number;
  pergunta: string;
}

export interface Mandamento {
  id: number;
  mandamento: string;
  perguntas: Pergunta[];
}

export const lista: Mandamento[] = [
  {
    id: 1,
    mandamento: "1º Mandamento: Amar a Deus sobre todas as coisas",
    perguntas: [
      {
        id: 1,
        pergunta:
          "Coloquei Deus em primeiro lugar na minha vida ou priorizei outras coisas como trabalho, dinheiro ou prazeres?",
      },
      {
        id: 2,
        pergunta: "Rezei diariamente e busquei fortalecer minha fé?",
      },
      {
        id: 3,
        pergunta: "Neguei ou duvidei da fé de forma consciente e deliberada?",
      },
      {
        id: 4,
        pergunta:
          "Pratiquei superstições, magia, horóscopos ou outras práticas contrárias à fé em Deus?",
      },
      {
        id: 5,
        pergunta: "Respeitei e honrei a Deus em minhas palavras e ações?",
      },
    ],
  },
  {
    id: 2,
    mandamento: "2º Mandamento: Não tomar Seu Santo Nome em vão",
    perguntas: [
      {
        id: 1,
        pergunta:
          "Usei o nome de Deus, de Jesus ou dos santos de forma desrespeitosa ou em vão?",
      },
      {
        id: 2,
        pergunta:
          "Jurei falsamente ou fiz promessas sem intenção de cumpri-las?",
      },
      {
        id: 3,
        pergunta:
          "Fui irreverente em locais sagrados ou durante celebrações religiosas?",
      },
    ],
  },
  {
    id: 3,
    mandamento: "3º Mandamento: Guardar domingos e festas de guarda",
    perguntas: [
      {
        id: 1,
        pergunta: "Participei da Santa Missa aos domingos e dias de preceito?",
      },
      {
        id: 2,
        pergunta:
          "Evitei trabalhos desnecessários nesses dias para dedicar tempo ao descanso e ao culto a Deus?",
      },
      {
        id: 3,
        pergunta:
          "Usei o domingo como um dia para me aproximar de Deus e da minha família?",
      },
    ],
  },
  {
    id: 4,
    mandamento: "4º Mandamento: Honrar pai e mãe",
    perguntas: [
      {
        id: 1,
        pergunta:
          "Respeitei e honrei meus pais, cuidando deles quando necessário?",
      },
      {
        id: 2,
        pergunta:
          "Desobedeci ou tratei meus pais ou superiores com desrespeito?",
      },
      {
        id: 3,
        pergunta:
          "Negligenciei minhas responsabilidades como filho, pai, mãe ou familiar?",
      },
      {
        id: 4,
        pergunta:
          "Dei bom exemplo para meus filhos ou pessoas sob minha responsabilidade?",
      },
    ],
  },
  {
    id: 5,
    mandamento: "5º Mandamento: Não matar",
    perguntas: [
      {
        id: 1,
        pergunta:
          "Tirei ou coloquei em risco a vida de outra pessoa, direta ou indiretamente?",
      },
      {
        id: 2,
        pergunta: "Guardei ressentimento, ódio ou desejei mal a alguém?",
      },
      {
        id: 3,
        pergunta:
          "Negligenciei minha saúde física ou mental por excesso de trabalho, vícios ou descuido?",
      },
      {
        id: 4,
        pergunta: "Pratiquei aborto, apoiei ou aconselhei alguém a fazê-lo?",
      },
    ],
  },
  {
    id: 6,
    mandamento: "6º Mandamento: Não pecar contra a castidade",
    perguntas: [
      {
        id: 1,
        pergunta: "Guardei pureza nos pensamentos, palavras e ações?",
      },
      {
        id: 2,
        pergunta:
          "Consenti com pensamentos impuros ou pratiquei atos sexuais fora do casamento?",
      },
      {
        id: 3,
        pergunta:
          "Usei pornografia ou estimulei comportamentos imorais em outros?",
      },
      {
        id: 4,
        pergunta:
          "Respeitei meu corpo e o do próximo como templos do Espírito Santo?",
      },
    ],
  },
  {
    id: 7,
    mandamento: "7º Mandamento: Não roubar",
    perguntas: [
      {
        id: 1,
        pergunta:
          "Peguei algo que não me pertence ou fui desonesto em negócios e compromissos?",
      },
      {
        id: 2,
        pergunta:
          "Paguei salários justos e cumpri meus deveres profissionais com honestidade?",
      },
      {
        id: 3,
        pergunta:
          "Desperdicei recursos ou fui egoísta ao não ajudar os necessitados?",
      },
      {
        id: 4,
        pergunta:
          "Reparei injustiças cometidas ao próximo, devolvendo bens ou compensando danos?",
      },
    ],
  },
  {
    id: 8,
    mandamento: "8º Mandamento: Não levantar falso testemunho",
    perguntas: [
      {
        id: 1,
        pergunta: "Disse mentiras ou omiti a verdade para prejudicar alguém?",
      },
      {
        id: 2,
        pergunta: "Espalhei boatos, fofocas ou calúnias?",
      },
      {
        id: 3,
        pergunta:
          "Guardei segredos confiados a mim ou respeitei a privacidade alheia?",
      },
      {
        id: 4,
        pergunta: "Fui honesto em todas as minhas palavras e ações?",
      },
    ],
  },
  {
    id: 9,
    mandamento: "9º Mandamento: Não desejar a mulher do próximo",
    perguntas: [
      {
        id: 1,
        pergunta:
          "Alimentei pensamentos ou desejos impuros por alguém que não é meu cônjuge?",
      },
      {
        id: 2,
        pergunta:
          "Fui invejoso ou ciumento em relação à vida conjugal ou amorosa de outra pessoa?",
      },
      {
        id: 3,
        pergunta: "Respeitei a dignidade e a pureza no meu coração?",
      },
    ],
  },
  {
    id: 10,
    mandamento: "10º Mandamento: Não cobiçar as coisas alheias",
    perguntas: [
      {
        id: 1,
        pergunta:
          "Desejei de forma desordenada os bens materiais de outras pessoas?",
      },
      {
        id: 2,
        pergunta:
          "Fui invejoso em relação ao sucesso ou conquistas de outras pessoas?",
      },
      {
        id: 3,
        pergunta:
          "Coloquei o desejo por bens materiais acima da gratidão e confiança em Deus?",
      },
    ],
  },
];
