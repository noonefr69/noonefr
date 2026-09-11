import FooterContainer from "@/components/footer/container";
import GitHubContainer from "@/components/github/container";
import GuestBookContainer from "@/components/guestbook/container";
import HeaderContainer from "@/components/header/container";
import WorkExpContainer from "@/components/works/container";

export default function Home() {
  return (
    <div className="px-4 py-4">
      <HeaderContainer />

      <section className="mt-12 grid grid-cols-9 gap-6">
        <div className="col-span-9 md:col-span-6">
          <WorkExpContainer />
        </div>
        <div className="col-span-9 md:col-span-3 ">
          {/*<GuestBookContainer />*/}
        </div>
        <div className="col-span-9 md:col-span-9">
          <GitHubContainer />
        </div>
      </section>

      <FooterContainer />
    </div>
  );
}
