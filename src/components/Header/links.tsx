import Link from "next/link";
interface propsLinks {
  href: string;
  text: string;
}

export const Links = ({ href, text }: propsLinks) => {
  return (
    <li className="p-1">
      <Link href={href} className=" hover:underline hover:drop-shadow">
        {text}
      </Link>
    </li>
  );
};
