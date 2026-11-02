const NAMES = [
  "Jaseci",
  "JacHammer",
  "Tobu",
  "Flowline",
  "Spenzo",
  "Mesh",
  "Synopsys",
  "IEEE",
];

export function WorkStrip() {
  return (
    <section aria-label="Companies, products, and publications I have worked on">
      <ul className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 py-12 sm:px-10 sm:py-16">
        {NAMES.map((name) => (
          <li
            key={name}
            className="text-xl font-semibold tracking-tight text-muted-foreground"
          >
            {name}
          </li>
        ))}
      </ul>
    </section>
  );
}
