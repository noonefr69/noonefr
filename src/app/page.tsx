import HeaderContainer from "@/components/header/container";
import WorkExp from "@/components/work-exp";

export default function Home() {
  return (
    <div className="px-4">
      <HeaderContainer />
      <section className="mt-12 grid gap-6 grid-cols-9">
        <div className="md:col-span-7 col-span-9">
          <WorkExp />
        </div>
        <div className="col-span-9 md:col-span-2">grid one</div>
        <div className="col-span-4">grid one</div>
        <div className="col-span-5">grid one</div>
      </section>
    </div>
  );
}
