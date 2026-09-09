import HeaderContainer from "@/components/header/container";

export default function Home() {
  return (
    <div className="px-4">
      <HeaderContainer />
      <section className="mt-12 grid gap-6 grid-cols-9">
        <div>grid one</div>
        <div>grid one</div>
        <div>grid one</div>
        <div>grid one</div>
      </section>
    </div>
  );
}
