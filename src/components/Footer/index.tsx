import Link from "next/link";

export function Footer() {
  return (
    <footer className="  bg-amber-950 align-bottom">
      <div className="flex flex-col py-2 justify-center text-center">
        <div>
          <h1 className="fontTsuki text-xl">AnimaSancta</h1>
        </div>
        <div>
          <Link
            href={"https://www.linkedin.com/in/emanuelbitencourt/"}
            className="underline text-sm"
          >
            Feito por: BitencTech
          </Link>
        </div>
      </div>
    </footer>
  );
}
