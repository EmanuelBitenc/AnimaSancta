import Link from "next/link";
interface Props {
  link: string;
  titulo: string;
  text: string;
}

export const SessaoHome = ({ text, link, titulo }: Props) => {
  return (
    <div>
      <p>
        <span className="underline text-amber-950 font-bold">
          {" "}
          <Link href={link}> {titulo}</Link>
        </span>{" "}
        {text}
      </p>
    </div>
  );
};
