import Link from "next/link";

export function Footer() {
  return (
    <footer className="  relative bg-amber-950 align-bottom mt-5">
      <div className="flex flex-col py-1 justify-center text-center">
        <div>
          <h1 className="fontTsuki text-xl">AnimaSancta</h1>
        </div>
        <div>
          <Link
            href={"https://www.linkedin.com/in/emanuelbitencourt/"}
            target="_blank"
            className="text-sm"
          >
            BitencTech
          </Link>
        </div>
      </div>
    </footer>
  );
}
