import Link from "next/link";

export function Nav() {
  return (
    <div className="h-20 flex gap-2 sm:gap-10 justify-center md:justify-between  flex-wrap  px-14 items-center  ">
      <div>
        <Link href="/">
          <h1 className="fontTsuki text-2xl ">AnimaSancta</h1>
        </Link>
      </div>
      <nav>
        <ul className="flex gap-4   ">
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
