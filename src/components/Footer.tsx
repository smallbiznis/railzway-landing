function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 text-sm text-text-muted md:flex-row md:items-center md:justify-between">
        <p>Railzway © {year}</p>
        <div className="flex flex-wrap gap-6">
          <a
            href="https://github.com"
            className="transition duration-base ease-standard hover:text-text-primary"
          >
            GitHub
          </a>
          <a
            href="#docs"
            className="transition duration-base ease-standard hover:text-text-primary"
          >
            Docs
          </a>
          <a
            href="#license"
            className="transition duration-base ease-standard hover:text-text-primary"
          >
            License
          </a>
          <a
            href="#privacy"
            className="transition duration-base ease-standard hover:text-text-primary"
          >
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
