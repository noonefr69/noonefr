import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import worksExp from "@/data/work.json";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import {
  AtSign,
  BookOpen,
  FileCode2,
  Music,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  AtSign,
  BookOpen,
  FileCode2,
  Music,
  ShoppingCart,
};

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export default function WorkExp() {
  return (
    <Card className="bg-transparent relative overflow-visible ring-border">
      <Card className="absolute px-3 py-1 bg-background -top-3.5 left-6 ring-border">
        Works
      </Card>
      <CardContent className="pt-2 gap-4 flex flex-col min-h-0 max-h-80 overflow-y-scroll hide-scrollbar">
        {worksExp.worksExp
          .slice()
          .sort((a, b) => b.date.localeCompare(a.date))
          .map((work, i) => {
            const Icon = icons[work.icon];

            return (
              <Link href={work.url} target="_blank" key={i}>
                <Item
                  className="hover:bg-accent/5 hover:border-primary/50 duration-150"
                  variant={"outline"}
                >
                  <ItemMedia variant="icon">
                    <Icon />
                  </ItemMedia>
                  <ItemContent className="min-w-0">
                    <ItemTitle className="truncate line-clamp-none max-w-full min-w-0">
                      {work.title}
                    </ItemTitle>
                    <ItemDescription className="sm:hidden ">
                      {fmtDate(work.date)}
                    </ItemDescription>
                  </ItemContent>
                  <ItemActions className="lg:text-sm text-xs sm:block hidden">
                    {fmtDate(work.date)}
                  </ItemActions>
                </Item>
              </Link>
            );
          })}
      </CardContent>
    </Card>
  );
}
