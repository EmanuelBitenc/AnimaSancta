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
    texto: "1º Mandamento: Amarás a Deus sobre todas as coisas",
    perguntas: [
      {
        id: 1,
        pergunta: "primeiraPergunta",
        texto:
          "Tenho amado a Deus acima de tudo, colocando-O como prioridade em minha vida?",
        textoDetalhe: "",
      },
      {
        id: 2,
        pergunta: "segundaPergunta",
        texto:
          "Tenho confiado plenamente no amor e no poder de Deus, ou me desespero diante das dificuldades?",
        textoDetalhe: "",
      },
      {
        id: 3,
        pergunta: "terceiraPergunta",
        texto:
          "Tenho praticado a superstição ou seguido práticas religiosas alheias ao cristianismo?",
        textoDetalhe: "",
      },
      {
        id: 4,
        pergunta: "quartaPergunta",
        texto:
          "Tenho negligenciado minha vida de oração pessoal, familiar ou comunitária?",
        textoDetalhe: "",
      },
      {
        id: 5,
        pergunta: "quintaPergunta",
        texto:
          "Tenho dedicado tempo para conhecer e estudar a fé cristã, ou me contento com um entendimento superficial?",
        textoDetalhe: "",
      },
      {
        id: 6,
        pergunta: "sextaPergunta",
        texto:
          "Tenho usado os dons que Deus me deu para Sua glória ou para meu benefício egoísta?",
        textoDetalhe: "",
      },
      {
        id: 7,
        pergunta: "setimaPergunta",
        texto:
          "Tenho me apegado mais às coisas materiais do que ao amor de Deus?",
        textoDetalhe: "",
      },
    ],
  },
  {
    id: 2,
    mandamento: "segundoMandamento",
    texto: "2º Mandamento: Não tomarás o nome de Deus em vão",
    perguntas: [
      {
        id: 8,
        pergunta: "primeiraPergunta",
        texto:
          "Usei o nome de Deus de forma desrespeitosa, em blasfêmias ou juramentos falsos?",
        textoDetalhe: "",
      },
      {
        id: 9,
        pergunta: "segundaPergunta",
        texto: "Fui irreverente ao tratar as coisas sagradas?",
        textoDetalhe: "",
      },
      {
        id: 10,
        pergunta: "terceiraPergunta",
        texto:
          "Recorri a Deus apenas por interesse próprio ou em momentos de necessidade, esquecendo-me de agradecê-Lo?",
        textoDetalhe: "",
      },
      {
        id: 11,
        pergunta: "quartaPergunta",
        texto:
          "Participei de conversas ou ações que ridicularizam a fé ou o nome de Deus?",
        textoDetalhe: "",
      },
    ],
  },
  {
    id: 3,
    mandamento: "terceiroMandamento",
    texto: "3º Mandamento: Santificarás o dia do Senhor",
    perguntas: [
      {
        id: 12,
        pergunta: "primeiraPergunta",
        texto: "Tenho participado da Missa dominical com atenção e devoção?",
        textoDetalhe: "",
      },
      {
        id: 13,
        pergunta: "segundaPergunta",
        texto:
          "Tenho evitado trabalhos desnecessários no domingo, dedicando o dia ao descanso e ao Senhor?",
        textoDetalhe: "",
      },
      {
        id: 14,
        pergunta: "terceiraPergunta",
        texto:
          "Tenho usado o domingo para estar com minha família e fortalecer os laços espirituais?",
        textoDetalhe: "",
      },
      {
        id: 15,
        pergunta: "quartaPergunta",
        texto:
          "Tenho consagrado tempo suficiente à adoração eucarística e à oração?",
        textoDetalhe: "",
      },
    ],
  },
  {
    id: 4,
    mandamento: "quartoMandamento",
    texto: "4º Mandamento: Honrarás pai e mãe",
    perguntas: [
      {
        id: 16,
        pergunta: "primeiraPergunta",
        texto:
          "Tenho honrado e respeitado meus pais, cuidando deles em suas necessidades?",
        textoDetalhe: "",
      },
      {
        id: 17,
        pergunta: "segundaPergunta",
        texto:
          "Como pai/mãe, tenho educado meus filhos na fé e dado bom exemplo de vida cristã?",
        textoDetalhe: "",
      },
      {
        id: 18,
        pergunta: "terceiraPergunta",
        texto: "Tenho cumprido com paciência e amor meus deveres familiares?",
        textoDetalhe: "",
      },
      {
        id: 19,
        pergunta: "quartaPergunta",
        texto:
          "Tenho cultivado a reconciliação e o espírito de serviço dentro da minha família?",
        textoDetalhe: "",
      },
    ],
  },
  {
    id: 5,
    mandamento: "quintoMandamento",
    texto: "5º Mandamento: Não matarás",
    perguntas: [
      {
        id: 20,
        pergunta: "primeiraPergunta",
        texto: "Tenho causado dano físico ou moral a outras pessoas?",
        textoDetalhe: "",
      },
      {
        id: 21,
        pergunta: "segundaPergunta",
        texto:
          "Tenho alimentado sentimentos de ódio, rancor ou desejo de vingança contra alguém?",
        textoDetalhe: "",
      },
      {
        id: 22,
        pergunta: "terceiraPergunta",
        texto: "Tenho perdoado as ofensas recebidas, ou guardo mágoas?",
        textoDetalhe: "",
      },
      {
        id: 23,
        pergunta: "quartaPergunta",
        texto: "Tenho cuidado da minha saúde e evitado vícios prejudiciais?",
        textoDetalhe: "",
      },
      {
        id: 24,
        pergunta: "quintaPergunta",
        texto: "Induzi ou procurei o aborto de alguma forma?",
        textoDetalhe: "",
      },
      {
        id: 25,
        pergunta: "sextaPergunta",
        texto:
          "Participei de negócios que promovem o uso de drogas ou violência?",
        textoDetalhe: "",
      },
    ],
  },
  {
    id: 6,
    mandamento: "sextoMandamento",
    texto: "6º Mandamento: Não pecarás contra a castidade",
    perguntas: [
      {
        id: 26,
        pergunta: "primeiraPergunta",
        texto: "Tenho mantido pensamentos, palavras ou ações impuras?",
        textoDetalhe: "",
      },
      {
        id: 27,
        pergunta: "segundaPergunta",
        texto:
          "Tenho consumido material pornográfico ou assistido conteúdos que banalizam a sexualidade?",
        textoDetalhe: "",
      },
      {
        id: 28,
        pergunta: "terceiraPergunta",
        texto:
          "Tenho respeitado a dignidade do outro no contexto do relacionamento?",
        textoDetalhe: "",
      },
      {
        id: 29,
        pergunta: "quartaPergunta",
        texto:
          "Tenho caído em pecados como masturbação, fornicação ou adultério?",
        textoDetalhe: "",
      },
    ],
  },
  {
    id: 7,
    mandamento: "setimoMandamento",
    texto: "7º Mandamento: Não roubarás",
    perguntas: [
      {
        id: 30,
        pergunta: "primeiraPergunta",
        texto: "Fui honesto no meu trabalho, ou cometi fraudes e roubos?",
        textoDetalhe: "",
      },
      {
        id: 31,
        pergunta: "segundaPergunta",
        texto:
          "Usei indevidamente os recursos alheios ou os recursos da criação?",
        textoDetalhe: "",
      },
      {
        id: 32,
        pergunta: "terceiraPergunta",
        texto:
          "Fui justo em minhas relações com subordinados, empregadores ou colegas?",
        textoDetalhe: "",
      },
      {
        id: 33,
        pergunta: "quartaPergunta",
        texto:
          "Tenho contribuído para o bem comum ou agido apenas em benefício próprio?",
        textoDetalhe: "",
      },
    ],
  },
  {
    id: 8,
    mandamento: "oitavoMandamento",
    texto: "8º Mandamento: Não levantarás falso testemunho",
    perguntas: [
      {
        id: 15,
        pergunta: "primeiraPergunta",
        texto: "Disse mentiras ou escondi a verdade para me beneficiar?",
        textoDetalhe: "",
      },
      {
        id: 16,
        pergunta: "segundaPergunta",
        texto: "Caluniei ou difamei alguém, causando danos à sua reputação?",
        textoDetalhe: "",
      },
      {
        id: 17,
        pergunta: "terceiraPergunta",
        texto: "Fiz julgamentos injustos ou temerários sobre outras pessoas?",
        textoDetalhe: "",
      },
      {
        id: 18,
        pergunta: "quartaPergunta",
        texto: "Violei segredos confiados a mim?",
        textoDetalhe: "",
      },
    ],
  },
  {
    id: 9,
    mandamento: "nonoMandamento",
    texto: "9º Mandamento: Não desejarás a mulher do próximo",
    perguntas: [
      {
        id: 19,
        pergunta: "primeiraPergunta",
        texto:
          "Cultivei pensamentos ou desejos impuros em relação a pessoas comprometidas?",
        textoDetalhe: "",
      },
      {
        id: 20,
        pergunta: "segundaPergunta",
        texto: "Respeitei a dignidade das pessoas com quem me relacionei?",
        textoDetalhe: "",
      },
      {
        id: 21,
        pergunta: "terceiraPergunta",
        texto:
          "Tenho sido fiel ao meu cônjuge ou às promessas de castidade feitas a Deus?",
        textoDetalhe: "",
      },
    ],
  },
  {
    id: 10,
    mandamento: "decimoMandamento",
    texto: "10º Mandamento: Não cobiçarás os bens do próximo",
    perguntas: [
      {
        id: 22,
        pergunta: "primeiraPergunta",
        texto:
          "Tenho invejado os bens materiais ou a posição social de outras pessoas?",
        textoDetalhe: "",
      },
      {
        id: 23,
        pergunta: "segundaPergunta",
        texto:
          "Desejei algo de forma desordenada, esquecendo-me de agradecer pelo que já possuo?",
        textoDetalhe: "",
      },
      {
        id: 24,
        pergunta: "terceiraPergunta",
        texto:
          "Tenho cultivado um coração generoso, compartilhando meus bens com os necessitados?",
        textoDetalhe: "",
      },
    ],
  },
];
