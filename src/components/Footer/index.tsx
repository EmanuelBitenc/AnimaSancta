import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative bg-[#1a1a1a] text-[#FDFBF7] align-bottom mt-5 border-t border-accent/20 pt-8 pb-6">
      <div className="flex flex-col py-1 justify-center items-center text-center gap-2">
        <div>
          <h1 className="font-cinzel text-2xl font-semibold tracking-wider text-accent">
            AnimaSancta
          </h1>
        </div>
        <div>
          <Link
            href={"https://www.linkedin.com/in/emanuelbitencourt/"}
            target="_blank"
            className="font-inter text-xs sm:text-sm text-slate-400 hover:text-white transition-colors duration-300 uppercase tracking-widest"
          >
            BitencTech
          </Link>
        </div>
      </div>
    </footer>
  );
}
