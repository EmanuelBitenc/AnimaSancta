export function Header() {
  return (
    <header className="h-20 flex justify-between  px-14  items-center bg-amber-950">
      <div>
        <h1 className="fontTsuki text-2xl">AnimaSancta</h1>
      </div>
      <nav>
        <ul className="flex gap-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
