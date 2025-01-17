import Link from "next/link";

export function Nav() {
  return (
    <nav className="py-2 justify-center">
      <ul className="flex justify-center flex-wrap gap-8">
        <li className=" y-2">
          <Link
            href="/exameConciencia"
            className=" hover:underline hover:drop-shadow"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/exameConciencia"
            className=" hover:underline hover:drop-shadow"
          >
            Exame de conciência
          </Link>
        </li>
      </ul>
    </nav>
  );
}
