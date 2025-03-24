export interface Pergunta {
  id: number;
  pergunta: string;
  texto: string;
  textoDetalhe?: string;
}

export interface Mandamento {
  id: number;
  mandamento: string;
  texto: string;
  perguntas: Pergunta[];
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
          "Tenho colocado Deus como a prioridade máxima na minha vida, ou deixei que outras coisas (trabalho, lazer, dinheiro, relacionamentos) ocupassem o primeiro lugar?",
        textoDetalhe: "",
      },
      {
        id: 2,
        pergunta: "segundaPergunta",
        texto:
          "Dedico tempo diário à oração, à leitura da Palavra de Deus e à participação na vida da Igreja, ou negligencio minha relação com Ele?",
        textoDetalhe: "",
      },
      {
        id: 3,
        pergunta: "terceiraPergunta",
        texto:
          "Confio em Deus nos momentos de dificuldade, ou me deixo levar pelo desespero, pela ansiedade ou pela autossuficiência?",
        textoDetalhe: "",
      },
      {
        id: 4,
        pergunta: "quartaPergunta",
        texto:
          "Pratico a caridade e o amor ao próximo como um reflexo do meu amor por Deus, ou sou egoísta em minhas ações?",
        textoDetalhe: "",
      },
      {
        id: 5,
        pergunta: "quintaPergunta",
        texto:
          "Busquei respostas em superstições, horóscopos, esoterismo ou outras práticas contrárias à fé, em vez de confiar na providência divina?",
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
        id: 6,
        pergunta: "primeiraPergunta",
        texto:
          "Tratei o nome de Deus com respeito e reverência, ou o usei de forma leviana, em juramentos, blasfêmias ou piadas?",
        textoDetalhe: "",
      },
      {
        id: 7,
        pergunta: "segundaPergunta",
        texto:
          "Fiz promessas em nome de Deus sem intenção de cumpri-las, ou as cumpri com fidelidade?",
        textoDetalhe: "",
      },
      {
        id: 8,
        pergunta: "terceiraPergunta",
        texto:
          "Participei de conversas ou atitudes que desrespeitam Deus, a Virgem Maria, os santos ou coisas sagradas?",
        textoDetalhe: "",
      },
      {
        id: 9,
        pergunta: "quartaPergunta",
        texto:
          "Fui cuidadoso ao falar sobre a fé, evitando brincadeiras ou comentários que diminuam sua importância?",
        textoDetalhe: "",
      },
    ],
  },
  {
    id: 3,
    mandamento: "terceiroMandamento",
    texto: "3º Mandamento: Guardarás o dia do Senhor",
    perguntas: [
      {
        id: 10,
        pergunta: "primeiraPergunta",
        texto:
          "Participei da Missa todos os domingos e dias santos de guarda com atenção e devoção, ou faltei sem motivo grave (como doença ou emergência)?",
        textoDetalhe: "",
      },
      {
        id: 11,
        pergunta: "segundaPergunta",
        texto:
          "Dediquei o domingo ao descanso, à oração e à família, como um dia consagrado a Deus, ou o tratei como um dia comum?",
        textoDetalhe: "",
      },
      {
        id: 12,
        pergunta: "terceiraPergunta",
        texto:
          "Evitei trabalhos ou atividades desnecessárias no domingo para honrar o dia do Senhor, ou priorizei compromissos mundanos?",
        textoDetalhe: "",
      },
      {
        id: 13,
        pergunta: "quartaPergunta",
        texto:
          "Preparei-me para a Missa com o coração aberto, chegando a tempo e participando ativamente, ou fui distraído e desleixado?",
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
        id: 14,
        pergunta: "primeiraPergunta",
        texto:
          "Respeitei e honrei meus pais com palavras, gestos e atitudes, ou fui desobediente, impaciente ou desrespeitoso?",
        textoDetalhe: "",
      },
      {
        id: 15,
        pergunta: "segundaPergunta",
        texto:
          "Ajudei meus pais em suas necessidades, especialmente na velhice ou em dificuldades, ou os negligenciei?",
        textoDetalhe: "",
      },
      {
        id: 16,
        pergunta: "terceiraPergunta",
        texto:
          "Como pai ou mãe, eduquei meus filhos na fé católica e dei exemplo de vida cristã, ou falhei nessa responsabilidade?",
        textoDetalhe: "",
      },
      {
        id: 17,
        pergunta: "quartaPergunta",
        texto:
          "Promovi a paz e a unidade na minha família, ou causei discórdias e ressentimentos?",
        textoDetalhe: "",
      },
      {
        id: 18,
        pergunta: "quintaPergunta",
        texto:
          "Respeitei as autoridades legítimas (professores, chefes, governantes), ou as desrespeitei sem justa causa?",
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
        id: 19,
        pergunta: "primeiraPergunta",
        texto:
          "Respeitei a vida humana em todas as suas etapas, desde a concepção até a morte natural, ou apoiei práticas como aborto ou eutanásia?",
        textoDetalhe: "",
      },
      {
        id: 20,
        pergunta: "segundaPergunta",
        texto:
          "Alimentei ódio, raiva ou desejo de vingança contra alguém, ou promovi a violência com palavras ou ações?",
        textoDetalhe: "",
      },
      {
        id: 21,
        pergunta: "terceiraPergunta",
        texto:
          "Perdoei aqueles que me ofenderam, ou guardei rancor e mágoas no coração?",
        textoDetalhe: "",
      },
      {
        id: 22,
        pergunta: "quartaPergunta",
        texto:
          "Contribuí para a paz e a justiça ao meu redor, ou fui omisso diante de situações de violência, discriminação ou injustiça?",
        textoDetalhe: "",
      },
      {
        id: 23,
        pergunta: "quintaPergunta",
        texto:
          "Cuidei da minha saúde física e mental, evitando excessos como abuso de álcool, drogas ou negligência, ou coloquei minha vida em risco?",
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
        id: 24,
        pergunta: "primeiraPergunta",
        texto:
          "Vivi a castidade de acordo com meu estado de vida (solteiro, casado, celibatário), ou caí em pecados como fornicação, adultério ou masturbação?",
        textoDetalhe: "",
      },
      {
        id: 25,
        pergunta: "segundaPergunta",
        texto:
          "Evitei o uso de pornografia, conversas impuras ou comportamentos que desrespeitem a sexualidade, ou me deixei levar por eles?",
        textoDetalhe: "",
      },
      {
        id: 26,
        pergunta: "terceiraPergunta",
        texto:
          "Respeitei meu corpo como templo do Espírito Santo, ou o usei para satisfazer desejos egoístas?",
        textoDetalhe: "",
      },
      {
        id: 27,
        pergunta: "quartaPergunta",
        texto:
          "No namoro ou casamento, honrei os limites da castidade e da fidelidade, ou busquei prazer sem amor verdadeiro?",
        textoDetalhe: "",
      },
      {
        id: 28,
        pergunta: "quintaPergunta",
        texto:
          "Procurei ajuda para vencer tentações contra a pureza, ou me expus a situações arriscadas?",
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
        id: 29,
        pergunta: "primeiraPergunta",
        texto:
          "Fui honesto em meu trabalho, negócios e finanças, ou cometi furtos, fraudes ou injustiças?",
        textoDetalhe: "",
      },
      {
        id: 30,
        pergunta: "segundaPergunta",
        texto:
          "Respeitei os bens alheios, ou peguei, usei ou danifiquei algo que não me pertence?",
        textoDetalhe: "",
      },
      {
        id: 31,
        pergunta: "terceiraPergunta",
        texto:
          "Cumpri minhas obrigações financeiras, como pagar dívidas e salários justos, ou fui desleixado ou desonesto?",
        textoDetalhe: "",
      },
      {
        id: 32,
        pergunta: "quartaPergunta",
        texto:
          "Fui generoso com os pobres e necessitados, compartilhando meus bens e tempo, ou fui egoísta e apegado às coisas materiais?",
        textoDetalhe: "",
      },
      {
        id: 33,
        pergunta: "quintaPergunta",
        texto:
          "Cuidei do meio ambiente, usando os recursos naturais com responsabilidade, ou os desperdicei ou destruí?",
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
        id: 34,
        pergunta: "primeiraPergunta",
        texto:
          "Falei a verdade em todas as ocasiões, ou menti, enganei ou omiti informações importantes?",
        textoDetalhe: "",
      },
      {
        id: 35,
        pergunta: "segundaPergunta",
        texto:
          "Prejudiquei a reputação de alguém com fofocas, calúnias ou difamação, ou espalhei boatos sem verificar a verdade?",
        textoDetalhe: "",
      },
      {
        id: 36,
        pergunta: "terceiraPergunta",
        texto:
          "Guardei segredos confiados a mim, ou os revelei sem motivo justo?",
        textoDetalhe: "",
      },
      {
        id: 37,
        pergunta: "quartaPergunta",
        texto:
          "Fiz julgamentos precipitados ou injustos sobre os outros, ou os critiquei sem caridade?",
        textoDetalhe: "",
      },
      {
        id: 38,
        pergunta: "quintaPergunta",
        texto:
          "Reparei o dano causado por minhas palavras, ou deixei que a injustiça continuasse?",
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
        id: 39,
        pergunta: "primeiraPergunta",
        texto:
          "Mantive pureza nos meus pensamentos e desejos, ou alimentei fantasias impuras ou luxúria?",
        textoDetalhe: "",
      },
      {
        id: 40,
        pergunta: "segundaPergunta",
        texto:
          "Respeitei as pessoas ao meu redor, evitando olhares, gestos ou palavras que as desvalorizem, ou as tratei como objetos?",
        textoDetalhe: "",
      },
      {
        id: 41,
        pergunta: "terceiraPergunta",
        texto:
          "Fui fiel ao meu cônjuge (se casado) em pensamentos e ações, ou permiti que meu coração se desviasse?",
        textoDetalhe: "",
      },
      {
        id: 42,
        pergunta: "quartaPergunta",
        texto:
          "Evitei situações que me levassem à tentação, como flertes inadequados ou amizades ambíguas, ou as procurei?",
        textoDetalhe: "",
      },
    ],
  },
  {
    id: 10,
    mandamento: "decimoMandamento",
    texto: "10º Mandamento: Não cobiçarás as coisas alheias",
    perguntas: [
      {
        id: 43,
        pergunta: "primeiraPergunta",
        texto:
          "Fui grato pelo que Deus me deu, ou invejei os bens, o sucesso ou a felicidade dos outros?",
        textoDetalhe: "",
      },
      {
        id: 44,
        pergunta: "segundaPergunta",
        texto:
          "Evitei a ganância e o apego excessivo aos bens materiais, ou coloquei minha confiança no dinheiro e nas posses?",
        textoDetalhe: "",
      },
      {
        id: 45,
        pergunta: "terceiraPergunta",
        texto:
          "Alegrei-me com as conquistas alheias, ou deixei a inveja crescer no meu coração?",
        textoDetalhe: "",
      },
      {
        id: 46,
        pergunta: "quartaPergunta",
        texto:
          "Confiei que Deus provê o que preciso, ou me preocupei excessivamente com o futuro material?",
        textoDetalhe: "",
      },
    ],
  },
];
