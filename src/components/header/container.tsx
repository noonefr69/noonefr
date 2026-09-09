import Image from "next/image";
import Title from "./title";

export default function HeaderContainer() {
  return (
    <header className="flex items-center justify-between gap-16">
      <Title />
      <Image
        src={`/me.webp`}
        alt="me frfr"
        width={1980}
        height={1080}
        className="hidden sm:block sm:w-24 lg:w-32 aspect-square object-cover border-4 duration-150 hover:border-primary border-border rounded-full"
      />
    </header>
  );
}
