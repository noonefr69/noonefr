import Image from "next/image";
import { Button } from "../ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import Link from "next/link";

interface SocialProps {
  url: string;
  icon: string;
  label: string;
}

export default function FooterItem({ social }: { social: SocialProps }) {
  return (
    <Button
      variant={"outline"}
      size={"icon"}
      className="opacity-70 duration-100 hover:opacity-100 bg-transparent!"
      nativeButton={false}
      render={<Link target="_blank" href={social.url}></Link>}
    >
      <Image
        src={social.icon}
        alt={social.label}
        width={1980}
        height={1080}
        className="w-4 dark:invert aspect-square"
      />
    </Button>
  );
}
