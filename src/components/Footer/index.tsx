import Link from "next/link";

export function Footer() {
  return (
    <footer className=" h-fit w-full  px-14 ">
      <div className="flex flex-col py-4 justify-center text-center">
        <div>
          <h1 className="fontTsuki text-xl">AnimaSancta</h1>
        </div>
        <div>
          <Link
            href={"https://www.linkedin.com/in/emanuelbitencourt/"}
            className="underline "
          >
            Direitos Reservados: Bitenc
          </Link>
        </div>
      </div>
    </footer>
  );
}
