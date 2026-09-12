export default function Title() {
  return (
    <div className="flex flex-col">
      <h3 className="text-lg lg:text-xl flex gap-0.5 items-center mb-2 font-semibold">
        ~$ whoami
      </h3>
      <h1 className="flex items-center text-2xl lg:text-3xl font-semibold mb-2 sm:mb-4">
        Hey, I{"'"}m Kasra - frontend eng.
      </h1>
      <p className="text-muted-foreground font-semibold text-xl tracking-tighter lg:text-2xl">
        Writing code, breaking things, and learning how computers actually work.
      </p>
    </div>
  );
}
