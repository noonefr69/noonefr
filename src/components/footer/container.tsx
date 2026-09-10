import { socials } from "@/data/socials";
import FooterItem from "./item";
import { ModeToggle } from "../toggle-mode";

export default function FooterContainer() {
  return (
    <footer className="flex mt-12 justify-between items-center ">
      <div className="text-sm font-semibold flex items-center ">
        © {new Date().getFullYear()}
      </div>
      <div className="flex items-center gap-2">
        <ModeToggle />
        {socials.map((social) => (
          <FooterItem key={social.url} social={social} />
        ))}
      </div>
    </footer>
  );
}
