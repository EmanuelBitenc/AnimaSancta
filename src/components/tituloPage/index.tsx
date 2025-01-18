interface props {
  titulo: string;
}

export default function TituloPage({ titulo }: props) {
  return (
    <h1 className="text-3xl font-bold text-center pt-10 pb-5 text-amber-950">
      {titulo}
    </h1>
  );
}
