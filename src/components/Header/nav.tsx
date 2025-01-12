import Link from "next/link";

export function Nav() {
  return (
    <div className=" py-2 flex gap-2 sm:gap-10 flex-col sm:flex-row justify-center sm:justify-between  flex-wrap px-2 sm:px-14 self-center items-center  ">
      <Link href="/exameConciencia">
        <h1 className="fontTsuki text-2xl ">AnimaSancta</h1>
      </Link>
      <nav>
        <ul className="flex sm:gap-4   ">
          <li>
            <Link
              href="/exameConciencia"
              className="px-2 sm:px-4 py-2   hover:underline hover:drop-shadow"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/exameConciencia"
              className="px-4 py-2   hover:underline hover:drop-shadow"
            >
              Exame de conciência
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
