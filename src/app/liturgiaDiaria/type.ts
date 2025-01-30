export interface LiturgiaType {
  data: string;
  liturgia: string;
  cor: string;
  dia: string;
  oferendas: string;
  comunhao: string;
  primeiraLeitura: {
    referencia: string;
    titulo: string;
    texto: string;
  };
  segundaLeitura?:
    | {
        referencia: string;
        titulo: string;
        texto: string;
      }
    | string; // Pode ser "Não há segunda leitura hoje!"
  salmo: {
    referencia: string;
    refrao: string;
    texto: string;
  };
  evangelho: {
    referencia: string;
    titulo: string;
    texto: string;
  };
  antifonas: {
    entrada: string;
    comunhao: string;
  };
}
