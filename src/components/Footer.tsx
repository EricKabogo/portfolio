export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>&copy; {new Date().getFullYear()} Eric Kabogo</p>
        <ul className="flex gap-6">
          <li>
            <a
              href="https://github.com/EricKabogo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fg"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/erickabogo/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fg"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:kabogoeric@gmail.com" className="hover:text-fg">
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
