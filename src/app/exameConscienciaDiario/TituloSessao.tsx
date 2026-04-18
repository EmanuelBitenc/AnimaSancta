interface Props {
  textOne: string;
  textTwo: string;
}

export const TituloSessao = ({ textOne, textTwo }: Props) => {
  return (
    <div className="mt-10 mb-5">
      <p className="text-accent font-semibold text-xl sm:text-3xl">{textOne}</p>
      <p>{textTwo}</p>
    </div>
  );
};
